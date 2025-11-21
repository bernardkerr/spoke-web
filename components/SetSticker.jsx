'use client'

import { Box } from '@radix-ui/themes'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

export default function SetSticker({ setNumber, title, units, parts, qrcode, image, backgroundColor = '#e8e8e8' }) {
    // Construct image paths relative to docs-test/images
    const logoPath = '/docs-test/images/spoke-set-logo.png'
    const imagePath = `/docs-test/images/${image}`

    const [qrCodeSvg, setQrCodeSvg] = useState('')
    const qrCodeRef = useRef(null)

    useEffect(() => {
        if (setNumber) {
            const url = `https://spoke-robotics.com/set=${setNumber}`

            const qrCode = new QRCodeStyling({
                width: 100,
                height: 100,
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
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    padding: '0px 20px',
                    gap: '16px',
                }}
            >
                {qrCodeSvg && (
                    <div
                        dangerouslySetInnerHTML={{ __html: qrCodeSvg }}
                        style={{
                            width: '100px',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    />
                )}
                <Image
                    src={imagePath}
                    alt={title}
                    width={80}
                    height={80}
                    style={{ display: 'block', objectFit: 'contain' }}
                />
            </div>
            {/* Bottom border */}
            <div style={{ borderBottom: '2px solid #000' }} />
        </Box >
    )
}
