'use client'

import { Box } from '@radix-ui/themes'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

import { getImagePath } from '@/lib/paths'

export default function SetSticker({ setNumber, title, units, parts, qrcode, image, backgroundColor = '#e8e8e8' }) {
    // Construct image paths relative to docs-test/images
    // getImagePath handles rewriting /docs-test/images -> /content/images and prepending basePath
    const logoPath = getImagePath('/docs-test/images/spoke-set-logo.png')
    const imagePath = getImagePath(`/docs-test/images/${image}`)

    const [qrCodeSvg, setQrCodeSvg] = useState('')
    const qrCodeRef = useRef(null)

    useEffect(() => {
        if (setNumber) {
            const url = `https://spoke-robotics.com/set=${setNumber}`

            const qrCode = new QRCodeStyling({
                width: 200,
                height: 200,
                data: url,
                margin: 0,
                qrOptions: {
                    typeNumber: 0,
                    mode: 'Byte',
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#000000',
                    type: 'rounded'
                },
                backgroundOptions: {
                    color: 'transparent'
                },
                cornersSquareOptions: {
                    color: '#000000',
                    type: 'extra-rounded'
                },
                cornersDotOptions: {
                    color: '#000000',
                    type: 'extra-rounded'
                }
            })

            qrCode.getRawData('svg').then((blob) => {
                const reader = new FileReader()
                reader.onload = () => {
                    setQrCodeSvg(reader.result)
                }
                reader.readAsText(blob)
            })
        }
    }, [setNumber])

    return (
        <Box
            style={{
                width: '200px',
                backgroundColor: backgroundColor,
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
                    alignItems: image ? 'center' : 'flex-start',
                    justifyContent: 'flex-start',
                    padding: '16px 20px 16px 20px',
                    gap: '16px',
                }}
            >
                {qrCodeSvg && (
                    <div
                        className="not-prose"
                        dangerouslySetInnerHTML={{ __html: qrCodeSvg }}
                        style={{
                            width: '64px',
                            height: '64px',
                            minWidth: '64px',
                            minHeight: '64px',
                            maxWidth: '64px',
                            maxHeight: '64px',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                    />
                )}
                {image && (
                    <Image
                        src={imagePath}
                        alt={title}
                        width={80}
                        height={64}
                        style={{ display: 'block', objectFit: 'cover', margin: 0, padding: 0 }}
                    />
                )}
            </div>
            {/* Bottom border */}
            <div style={{ borderBottom: '2px solid #000' }} />
        </Box >
    )
}
