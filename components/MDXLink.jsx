import Link from 'next/link'

export default function MDXLink({ href, children, ...props }) {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternal) {
        return (
            <Link href={href} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    )
}
