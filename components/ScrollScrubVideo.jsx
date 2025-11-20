'use client'

import { useEffect, useRef, useState } from 'react'
import { Box } from '@radix-ui/themes'
import Script from 'next/script'

export default function ScrollScrubVideo({
    src,
    height = '1500vh',
    ...props
}) {
    const [containerId, setContainerId] = useState('')
    const [isScriptLoaded, setIsScriptLoaded] = useState(false)
    const instanceRef = useRef(null)

    useEffect(() => {
        setContainerId(`scrolly-video-${Math.random().toString(36).substr(2, 9)}`)
    }, [])

    useEffect(() => {
        if (!containerId || !isScriptLoaded || !window.ScrollyVideo) return

        // Cleanup previous instance
        if (instanceRef.current) {
            try {
                instanceRef.current.destroy()
            } catch (e) {
                console.error('Error destroying ScrollyVideo:', e)
            }
        }

        try {
            console.log('Initializing ScrollyVideo from CDN...')
            instanceRef.current = new window.ScrollyVideo({
                scrollyVideoContainer: containerId,
                src: src,
                // The library handles sticky positioning if we don't interfere
                // We might need to ensure the parent has height
            })
        } catch (e) {
            console.error('Error initializing ScrollyVideo:', e)
        }

        return () => {
            if (instanceRef.current) {
                try {
                    instanceRef.current.destroy()
                } catch (e) {
                    console.error('Error destroying ScrollyVideo:', e)
                }
            }
        }
    }, [src, containerId, isScriptLoaded])

    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/npm/scrolly-video@latest/dist/scrolly-video.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log('ScrollyVideo script loaded')
                    setIsScriptLoaded(true)
                }}
            />

            <Box
                className="not-prose"
                style={{
                    height: height,
                    position: 'relative',
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)'
                }}
            >
                {/* ScrollyVideo container - library handles sticky positioning */}
                <div id={containerId} style={{
                    width: '100%',
                    overflow: 'hidden',
                    position: 'relative'
                }} />

                {/* Overlay content - needs its own sticky positioning */}
                {props.children && (
                    <Box
                        style={{
                            position: 'sticky',
                            top: 0,
                            width: '100%',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            paddingTop: 'calc(var(--theme-tokens-space-navbar-height, 60px) - 10px)',
                            zIndex: 10,
                            pointerEvents: 'none',
                            marginTop: '-100vh' // Pull overlay up to cover video
                        }}
                    >
                        <Box style={{ pointerEvents: 'auto', width: '100%' }}>
                            {props.children}
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    )
}
