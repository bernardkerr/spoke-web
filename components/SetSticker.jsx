'use client'

import { Box } from '@radix-ui/themes'
import Image from 'next/image'

export default function SetSticker({ setNumber, title, units, parts, qrcode, image, bgcolor = '#e8e8e8' }) {
    // Construct image paths relative to docs-test/images
    const logoPath = '/docs-test/images/spoke-set-logo.png'
    const qrcodePath = `/docs-test/images/${qrcode}`
    const imagePath = `/docs-test/images/${image}`

    return (
        <Box
            style={{
                width: '200px',
                backgroundColor: bgcolor,
                padding: '0',
                fontFamily: 'monospace',
                display: 'inline-block',
                fontSize: '1rem', // Match standard markdown text size (16px)
            }}
        >
            {/* Top border */}
            <div style={{ borderBottom: '2px solid #000' }} />

            {/* Logo and Number Section */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '9px',
                    padding: '0 0 0 20px',
                    borderBottom: '2px solid #000',
                }}
            >
                <Image
                    src={logoPath}
                    alt="Spoke Logo"
                    width={24}
                    height={24}
                    style={{ display: 'block', marginLeft: '-1px', marginRight: '0' }}
                />
                <span
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        letterSpacing: '0.02em',
                        position: 'relative',
                        top: '1px',
                    }}
                >
                    {setNumber}
                </span>
            </div>

            {/* Title Section */}
            <Box
                style={{
                    padding: '8px 20px',
                    borderBottom: '2px solid #000',
                }}
            >
                <div
                    style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        lineHeight: '1.1',
                        marginBottom: '4px',
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontSize: '1rem',
                        lineHeight: '1.1',
                    }}
                >
                    Set
                </div>
            </Box>

            {/* Units Section */}
            <Box
                style={{
                    padding: '8px 20px',
                    borderBottom: '2px solid #000',
                }}
            >
                <div
                    style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        lineHeight: '1.1',
                        marginBottom: '4px',
                    }}
                >
                    {units}
                </div>
                <div
                    style={{
                        fontSize: '1rem',
                        lineHeight: '1.1',
                    }}
                >
                    Units
                </div>
            </Box>

            {/* Parts Section */}
            <Box
                style={{
                    padding: '8px 20px',
                    borderBottom: '2px solid #000',
                }}
            >
                <div
                    style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        lineHeight: '1.1',
                        marginBottom: '4px',
                    }}
                >
                    {parts}
                </div>
                <div
                    style={{
                        fontSize: '1rem',
                        lineHeight: '1.1',
                    }}
                >
                    Parts
                </div>
            </Box>

            {/* QR Code and Product Image Section */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '0 0 0 20px',
                    gap: '16px',
                    marginTop: '-5px',
                    marginBottom: '-5px',
                }}
            >
                <Image
                    src={qrcodePath}
                    alt="QR Code"
                    width={80}
                    height={80}
                    style={{ display: 'block', marginLeft: '-10px', marginRight: '-10px' }}
                />
                <Image
                    src={imagePath}
                    alt={title}
                    width={80}
                    height={80}
                    style={{ display: 'block', objectFit: 'contain', marginLeft: '-1px', marginRight: '-10px' }}
                />
            </div>
        </Box >
    )
}
