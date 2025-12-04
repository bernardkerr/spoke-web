import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import {
  getMarkdownFilesFromRoots,
  getAllMarkdownSlugsFromRoots
} from '@/lib/markdown'
import { Mermaid } from '@/components/Mermaid'
import { Section, Box, Heading, Text } from '@radix-ui/themes'
import FloatingTOC from '@/components/FloatingTOC'
import { Mdx } from '@/lib/mdx'
import { extractAndMaybeRemoveFirstH1FromMdxSource } from '@/lib/title'
import { CONTENT_VERSION } from '@/lib/content-version'

// Mermaid diagrams are now pre-rendered to inline SVG by lib/markdown.js.

export async function generateStaticParams() {
  const slugs = await getAllMarkdownSlugsFromRoots(['docs-test'])
  return slugs
}

export default async function DocPage({ params }) {
  const resolvedParams = await params
  const slugParts = resolvedParams.slug
  const slug = slugParts.join('/')

  // Locate and read markdown from docs-test root
  const files = await getMarkdownFilesFromRoots(['docs-test'])
  const file = files.find(f => f.slug === slug)
  if (!file || !fs.existsSync(file.fullPath)) {
    notFound()
  }
  const raw = fs.readFileSync(file.fullPath, 'utf8')
  const { data: fm, content } = matter(raw)

  // Remove first H1 if it duplicates/equals page title and derive title
  const { source: cleanedSource, title: derivedTitle } = extractAndMaybeRemoveFirstH1FromMdxSource(
    content,
    fm.title
  )
  const fallbackTitle = slug.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const pageTitle = derivedTitle || fallbackTitle

  // Extract Breadcrumb component if it exists at the start of content
  const breadcrumbMatch = cleanedSource.match(/^<Breadcrumb\s+([^>]+)\/>\s*\n*/i)
  let breadcrumbProps = null
  let contentWithoutBreadcrumb = cleanedSource

  if (breadcrumbMatch) {
    // Extract the props from the Breadcrumb tag
    const propsString = breadcrumbMatch[1]
    // Parse paths array and current props
    const pathsMatch = propsString.match(/paths=\{(\[[^\]]+\])\}/)
    const currentMatch = propsString.match(/current="([^"]+)"/)

    if (pathsMatch && currentMatch) {
      try {
        // Parse the paths array - it's in the format [{...}, {...}]
        const pathsArrayString = pathsMatch[1]
        const paths = JSON.parse(pathsArrayString.replace(/(\w+):/g, '"$1":'))

        breadcrumbProps = {
          paths: paths,
          current: currentMatch[1]
        }
      } catch (e) {
        console.error('Failed to parse breadcrumb paths:', e)
      }
    }

    // Remove the Breadcrumb from the content
    contentWithoutBreadcrumb = cleanedSource.replace(breadcrumbMatch[0], '')
  }

  // Determine layout
  const layout = (fm && (fm.layout || fm.renderer)) || undefined

  return (
    <>
      <Section size="2">
        <Box mx="auto" style={{ maxWidth: 1200, width: '100%' }} data-content-version={CONTENT_VERSION}>
          {breadcrumbProps && (
            <Box mb="2" className="breadcrumb-container" style={{
              fontSize: 'var(--theme-typography-font-size-2)',
              color: 'var(--theme-colors-neutral-neutral-9)',
              fontWeight: 400,
            }}>
              {breadcrumbProps.paths && breadcrumbProps.paths.map((path, index) => (
                <span key={index}>
                  <a href={path.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {path.label}
                  </a>
                  <span> / </span>
                </span>
              ))}
              <strong style={{ color: 'var(--theme-colors-neutral-neutral-12)', fontWeight: 600 }}>
                {breadcrumbProps.current}
              </strong>
            </Box>
          )}
          <Box mb="5">
            <Heading size="8">{pageTitle}</Heading>
            {fm && fm.description && (
              <Text as="p" color="gray" size="4">{fm.description}</Text>
            )}
          </Box>

          <article className="prose dark:prose-invert max-w-none">
            <Mdx source={contentWithoutBreadcrumb} layout={layout} />
          </article>
          <Mermaid autoRender={true} />
        </Box>
      </Section>
      <FloatingTOC />
    </>
  )
}
