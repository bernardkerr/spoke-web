'use client'

import { useState, useEffect } from 'react'
import { Box, Card, Text, ScrollArea } from '@radix-ui/themes'

export default function FloatingTOC({ minHeadings = 3 }) {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState('top') // 'top' | 'middle' | 'bottom' | 'hidden'
  const [expandedIds, setExpandedIds] = useState(new Set())

  useEffect(() => {
    // Extract headings from the page
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const used = new Set()
      const slugify = (str) => {
        return (str || '')
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
      }
      const ensureId = (el) => {
        if (el.id) { used.add(el.id); return el.id }
        const base = slugify(el.textContent)
        let candidate = base || 'section'
        let i = 1
        while (used.has(candidate) || document.getElementById(candidate)) {
          i += 1
          candidate = `${base || 'section'}-${i}`
        }
        el.id = candidate
        used.add(candidate)
        return candidate
      }

      const detailsMap = new Map() // details element -> controlling heading ID

      const rawHeadings = Array.from(headingElements)
        // Exclude headings that live inside containers explicitly marked to be ignored by TOC
        .filter((el) => !el.closest('[data-toc-exclude]'))
        .map((heading) => {
          const id = ensureId(heading)
          const summary = heading.closest('summary')
          const isCollapsible = !!summary

          if (isCollapsible) {
            const details = summary.closest('details')
            if (details) {
              detailsMap.set(details, id)
            }
          }

          return {
            id,
            text: heading.textContent,
            level: parseInt(heading.tagName.charAt(1)),
            element: heading,
            isCollapsible,
            requiredOpenIds: []
          }
        })
        .filter(heading => heading.id)

      // Second pass: Calculate requiredOpenIds (ancestor details that must be open)
      rawHeadings.forEach(h => {
        let el = h.element.parentElement
        while (el) {
          if (el.tagName === 'DETAILS') {
            // Check if we are in the summary of this details
            const summary = el.querySelector('summary')
            if (summary && summary.contains(h.element)) {
              // We are in the summary, so we don't depend on this details being open
            } else {
              // We are in the content, so we depend on this details
              const controllerId = detailsMap.get(el)
              if (controllerId) {
                h.requiredOpenIds.push(controllerId)
              }
            }
          }
          el = el.parentElement
        }
      })

      setHeadings(rawHeadings)
      setIsVisible(rawHeadings.length >= minHeadings)
    }

    // Wait for content to be rendered
    const timer = setTimeout(extractHeadings, 100)
    return () => clearTimeout(timer)
  }, [minHeadings])

  useEffect(() => {
    if (headings.length === 0) return

    // Set up IntersectionObserver for scroll spy
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id)

        if (visibleHeadings.length > 0) {
          // Set the first visible heading as active
          setActiveId(visibleHeadings[0])
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px', // Trigger when heading is near top
        threshold: 0
      }
    )

    headings.forEach(heading => {
      if (heading.element) {
        observer.observe(heading.element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  // Sync expanded state with details elements
  useEffect(() => {
    const updateState = (id, isOpen) => {
      setExpandedIds(prev => {
        const next = new Set(prev)
        if (isOpen) next.add(id)
        else next.delete(id)
        return next
      })
    }

    const cleanupFns = []

    headings.forEach(h => {
      if (h.isCollapsible && h.element) {
        const details = h.element.closest('details')
        if (details) {
          // Sync initial state
          if (details.open) {
            setExpandedIds(prev => new Set(prev).add(h.id))
          }

          const onToggle = () => updateState(h.id, details.open)
          details.addEventListener('toggle', onToggle)
          cleanupFns.push(() => details.removeEventListener('toggle', onToggle))
        }
      }
    })

    return () => cleanupFns.forEach(fn => fn())
  }, [headings])

  // Persisted placement across the site
  useEffect(() => {
    try {
      const saved = localStorage.getItem('floatingTOCPosition')
      if (saved && ['top', 'middle', 'bottom', 'hidden'].includes(saved)) {
        setPosition(saved)
      }
    } catch (e) {
      // ignore
    }
  }, [])

  // When the mobile hamburger requests the TOC, ensure we switch to 'top'
  useEffect(() => {
    const onMobileTocOpen = () => setPosition('top')
    try {
      window.addEventListener('mobile-toc-open', onMobileTocOpen)
    } catch { }
    return () => {
      try { window.removeEventListener('mobile-toc-open', onMobileTocOpen) } catch { }
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('floatingTOCPosition', position)
    } catch (e) {
      // ignore
    }
  }, [position])

  const handleHeadingClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 70 // Approximate navbar + padding
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      // Check if this specific heading is a trigger for a details element (inside summary)
      const summary = element.closest('summary')
      if (summary) {
        const details = summary.closest('details')
        if (details) {
          // Toggle the details element
          const willOpen = !details.open
          details.open = willOpen

          // Only scroll if we are opening it
          if (willOpen) {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
          return
        }
      }

      // Not a trigger, but might be inside a closed details element
      const parentDetails = element.closest('details')
      if (parentDetails && !parentDetails.open) {
        parentDetails.open = true
      }

      // Standard scroll for content items
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    // Notify listeners (MobileTOC) to close the overlay on selection
    try {
      window.dispatchEvent(new Event('floating-toc-select'))
    } catch { }
  }

  const cyclePosition = () => {
    setPosition(prev => (
      prev === 'top' ? 'middle' :
        prev === 'middle' ? 'bottom' :
          prev === 'bottom' ? 'hidden' :
            'top'
    ))
  }

  // Compute placement styles
  const placementStyle = (() => {
    const common = {
      zIndex: 9999,
      maxWidth: '280px',
      width: '280px'
    }
    if (position === 'top') {
      return {
        ...common,
        top: 'calc(80px + 2rem)', // Header height + spacing
        bottom: 'auto',
        transform: 'none'
      }
    }
    if (position === 'middle') {
      return {
        ...common,
        top: '50%',
        bottom: 'auto',
        transform: 'translateY(-50%)'
      }
    }
    return {
      ...common,
      top: 'auto',
      bottom: '2rem',
      transform: 'none'
    }
  })()

  if (!isVisible) return null

  // Hidden mode: show only the tiny glyph in the page's top-right; clicking reveals TOC at top
  if (position === 'hidden') {
    return (
      <div
        className="floating-toc-toggle-alone hidden lg:block"
        role="button"
        title="Show table of contents"
        aria-label="Show table of contents"
        tabIndex={0}
        onClick={() => setPosition('top')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setPosition('top')
          }
        }}
      >
        {/* Indicate top as the target state when revealing */}
        {['top', 'middle', 'bottom'].map((pos) => (
          <span
            key={pos}
            className={`line ${pos === 'top' ? 'active' : ''}`}
          />
        ))}
      </div>
    )
  }

  return (
    <Box
      position="fixed"
      right="4"
      style={placementStyle}
      className="floating-toc hidden lg:block" // Hide on mobile/tablet
    >
      {/* Hover-only tiny placement toggle */}
      <div
        className="toc-toggle"
        onClick={cyclePosition}
        title="Toggle TOC placement"
        aria-label="Toggle table of contents placement"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            cyclePosition()
          }
        }}
      >
        {['top', 'middle', 'bottom'].map((pos) => (
          <span
            key={pos}
            className={`line ${position === pos ? 'active' : ''}`}
          />
        ))}
      </div>
      <Card size="2" className="floating-toc-card">
        <Box p="3">
          <Text size="2" weight="medium" color="gray" mb="3" as="div">
            Contents
          </Text>
          <ScrollArea type="hover" style={{ maxHeight: '60vh' }}>
            <Box as="nav">
              {headings.map((heading) => {
                // Check visibility: all required ancestor details must be open
                const isVisible = heading.requiredOpenIds.every(id => expandedIds.has(id))
                if (!isVisible) return null

                return (
                  <Box
                    key={heading.id}
                    mb="1"
                    style={{
                      paddingLeft: `${(heading.level - 1) * 12}px`
                    }}
                  >
                    <Text
                      size="1"
                      as="button"
                      onClick={() => handleHeadingClick(heading.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        textAlign: 'left',
                        border: 'none',
                        borderBottom: 'none',
                        background: 'none',
                        padding: '4px 8px',
                        borderRadius: 'var(--radius-2)',
                        cursor: 'pointer',
                        boxShadow: 'none',
                        outline: 'none',
                        textDecoration: 'none',
                        color: activeId === heading.id
                          ? 'var(--accent-11)'
                          : 'var(--gray-12)',
                        backgroundColor: activeId === heading.id
                          ? 'var(--accent-3)'
                          : 'transparent',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (activeId !== heading.id) {
                          e.currentTarget.style.backgroundColor = 'var(--gray-4)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeId !== heading.id) {
                          e.currentTarget.style.backgroundColor = 'transparent'
                        }
                      }}
                    >
                      {heading.isCollapsible && (
                        <span style={{
                          display: 'inline-flex',
                          marginRight: '6px',
                          transform: expandedIds.has(heading.id) ? 'translateY(-1px) rotate(90deg)' : 'translateY(-1px)',
                          transition: 'transform 0.2s ease'
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </span>
                      )}
                      {heading.text}
                    </Text>
                  </Box>
                )
              })}
            </Box>
          </ScrollArea>
        </Box>
      </Card>
    </Box>
  )
}

