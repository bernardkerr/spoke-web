'use client'

import { Box } from '@radix-ui/themes'
import Link from 'next/link'

export default function Breadcrumb({ paths, current }) {
    return (
        <Box
            mb="4"
            style={{
                fontSize: 'var(--theme-typography-font-size-2)',
                color: 'var(--theme-colors-neutral-neutral-9)',
                fontWeight: 400,
            }}
            className="breadcrumb-container"
        >
            {paths && paths.map((path, index) => (
                <span key={index}>
                    <Link href={path.href}>{path.label}</Link>
                    <span> / </span>
                </span>
            ))}
            <strong>{current}</strong>
        </Box>
    )
}
