'use client'

import { useEffect, useState, useRef } from 'react'


export default function QRCode({ text, width = 64, height = 64 }) {
    const [qrCodeSvg, setQrCodeSvg] = useState('')

    useEffect(() => {
        if (text) {
            import('qr-code-styling').then((QRCodeStylingModule) => {
                const QRCodeStyling = QRCodeStylingModule.default
                const qrCode = new QRCodeStyling({
                    width: 200,
                    height: 200,
                    data: text,
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
            })
        }
    }, [text, width, height])

    if (!qrCodeSvg) return null;

    return (
        <div
            className="not-prose"
            dangerouslySetInnerHTML={{ __html: qrCodeSvg }}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                display: 'inline-block',
            }}
        />
    )
}
