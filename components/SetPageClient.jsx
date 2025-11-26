'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/paths'
import { ChevronDown, ChevronUp, FileText } from 'lucide-react'

export default function SetPageClient({
    setNumber,
    title,
    price,
    units,
    unitText,
    parts,
    partsText,
    imageFolder,
    description,
    features,
    dimensions,
    images = []
}) {
    const [selectedImage, setSelectedImage] = useState(images.length > 0 ? images[0] : null)
    const [unitsOpen, setUnitsOpen] = useState(false)
    const [partsOpen, setPartsOpen] = useState(false)
    const [featuresOpen, setFeaturesOpen] = useState(true)
    const [dimensionsOpen, setDimensionsOpen] = useState(true)
    const [mechanicalOpen, setMechanicalOpen] = useState(false)
    const [electricalOpen, setElectricalOpen] = useState(false)
    const [computationalOpen, setComputationalOpen] = useState(false)

    // Update selectedImage when images prop changes
    useEffect(() => {
        if (images.length > 0 && !selectedImage) {
            setSelectedImage(images[0])
        }
    }, [images, selectedImage])

    let featureList = []
    if (Array.isArray(features)) {
        featureList = features
    } else if (typeof features === 'string') {
        // If the string contains a pipe '|', use that as the delimiter to allow commas in text
        // Otherwise fallback to comma splitting for backward compatibility
        const delimiter = features.includes('|') ? '|' : ','
        featureList = features.split(delimiter).map(f => f.trim())
    }
    const logoPath = getImagePath('/docs-test/images/spoke-set-logo.png')

    // Helper to resolve image path
    const getImgSrc = (imgName) => {
        if (!imgName) return ''
        return getImagePath(`/docs-test/images/${imageFolder}/${imgName}`)
    }

    return (
        <div style={{
            backgroundColor: '#f7f7f7',
            padding: '40px',
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            color: '#000',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '20px',
            flexWrap: 'wrap'
        }}>
            {/* Left Column: Hero Image and Thumbnails */}
            <div style={{ flex: '1', minWidth: '300px', maxWidth: '750px' }}>
                {/* Hero Image */}
                <div style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    backgroundColor: '#ebebeb',
                    marginBottom: '20px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {selectedImage && (
                        <Image
                            src={getImgSrc(selectedImage)}
                            alt={title}
                            width={750}
                            height={750}
                            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                        />
                    )}
                </div>

                {/* Thumbnails */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 100px)',
                    gap: '10px'
                }}>
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedImage(img)}
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '5px',
                                width: '100px'
                            }}
                        >
                            <div style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: '#ebebeb',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    src={getImgSrc(img)}
                                    alt={`Thumbnail ${idx}`}
                                    width={100}
                                    height={100}
                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                />
                            </div>
                            <div style={{
                                height: '2px',
                                width: '100%',
                                backgroundColor: selectedImage === img ? '#ffd000' : 'transparent'
                            }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Details */}
            <div style={{
                width: '380px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0px'
            }}>
                {/* Title and Price */}
                <div style={{ marginBottom: '10px' }}>
                    <h1 style={{
                        fontSize: '22pt',
                        fontWeight: 'bold',
                        margin: '0 0 10px 0',
                        lineHeight: '1.2'
                    }}>
                        {title}
                    </h1>
                    {price && (
                        <div style={{ fontSize: '22pt', fontWeight: 'normal' }}>
                            {price}
                        </div>
                    )}
                </div>

                {/* Units Dropdown */}
                <div style={{ borderTop: '1px solid #e0e0e0' }}>
                    <div
                        onClick={() => setUnitsOpen(!unitsOpen)}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: '16pt',
                            height: '60px',
                            paddingRight: '20px',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <span style={{ flex: 1 }}>
                            <span style={{ fontWeight: 'bold' }}>{units}</span> <span style={{ fontWeight: 500 }}>Units</span>
                        </span>
                        {unitsOpen ? <ChevronUp size={20} strokeWidth={1.5} /> : <ChevronDown size={20} strokeWidth={1.5} />}
                    </div>
                    {unitsOpen && unitText && (
                        <div style={{ paddingBottom: '20px', fontSize: '16pt', color: '#808080' }}>
                            {unitText.split(',').map((line, i) => (
                                <div key={i}>{line.trim()}</div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Parts Dropdown */}
                <div style={{ borderTop: '1px solid #e0e0e0' }}>
                    <div
                        onClick={() => setPartsOpen(!partsOpen)}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: '16pt',
                            height: '60px',
                            paddingRight: '20px',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <span style={{ flex: 1 }}>
                            <span style={{ fontWeight: 'bold' }}>{parts}</span> <span style={{ fontWeight: 500 }}>Parts</span>
                        </span>
                        {partsOpen ? <ChevronUp size={20} strokeWidth={1.5} /> : <ChevronDown size={20} strokeWidth={1.5} />}
                    </div>
                    {partsOpen && partsText && (
                        <div style={{ paddingBottom: '20px', fontSize: '16pt', color: '#808080' }}>
                            {partsText}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div style={{ borderTop: '1px solid #e0e0e0', padding: '20px 0' }}>
                    <div style={{
                        fontSize: '16pt',
                        color: '#808080',
                        lineHeight: '1.5',
                        fontFamily: 'var(--font-ibm-plex-sans), sans-serif'
                    }}>
                        {description}
                    </div>
                </div>

                {/* Features */}
                <div style={{ padding: '20px 0' }}>
                    <div style={{ fontSize: '16pt', fontWeight: 'bold', marginBottom: '10px' }}>Features</div>
                    <ul style={{
                        listStyleType: 'disc',
                        paddingLeft: '20px',
                        margin: 0,
                        fontSize: '16pt',
                        color: '#808080',
                        lineHeight: '1.5',
                        fontFamily: 'var(--font-ibm-plex-sans), sans-serif'
                    }}>
                        {featureList.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Dimensions */}
                <div style={{ borderTop: '1px solid #e0e0e0', padding: '20px 0' }}>
                    <div style={{ fontSize: '16pt', fontWeight: 'bold', marginBottom: '10px' }}>Dimensions</div>
                    <div style={{ fontSize: '16pt', color: '#808080' }}>
                        {dimensions}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <div style={{ padding: '20px 0' }}>
                    <button style={{
                        backgroundColor: '#ffd000',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '0 30px',
                        height: '40px',
                        fontSize: '16pt',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        width: '100%',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-ibm-plex-mono), monospace',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        Add to Cart
                    </button>
                </div>

                {/* Assembly Instructions */}
                <div style={{
                    borderTop: '1px solid #e0e0e0',
                    height: '60px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '10px',
                    fontSize: '16pt',
                    width: '100%',
                    boxSizing: 'border-box',
                    paddingRight: '20px'
                }}>
                    <FileText size={24} strokeWidth={1.5} />
                    <span style={{ flex: 1 }}>Assembly Instructions</span>
                </div>

                {/* Mechanical Dropdown */}
                <div style={{ borderTop: '1px solid #e0e0e0' }}>
                    <div
                        onClick={() => setMechanicalOpen(!mechanicalOpen)}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: '16pt',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            height: '60px',
                            paddingRight: '20px',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <span style={{ flex: 1 }}>Mechanical</span>
                        {mechanicalOpen ? <ChevronUp size={20} strokeWidth={1.5} /> : <ChevronDown size={20} strokeWidth={1.5} />}
                    </div>
                </div>

                {/* Electrical Dropdown */}
                <div style={{ borderTop: '1px solid #e0e0e0' }}>
                    <div
                        onClick={() => setElectricalOpen(!electricalOpen)}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: '16pt',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            height: '60px',
                            paddingRight: '20px',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <span style={{ flex: 1 }}>Electrical</span>
                        {electricalOpen ? <ChevronUp size={20} strokeWidth={1.5} /> : <ChevronDown size={20} strokeWidth={1.5} />}
                    </div>
                </div>

                {/* Computational Dropdown */}
                <div style={{ borderTop: '1px solid #e0e0e0' }}>
                    <div
                        onClick={() => setComputationalOpen(!computationalOpen)}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: '16pt',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            height: '60px',
                            paddingRight: '20px',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <span style={{ flex: 1 }}>Computational</span>
                        {computationalOpen ? <ChevronUp size={20} strokeWidth={1.5} /> : <ChevronDown size={20} strokeWidth={1.5} />}
                    </div>
                </div>

                {/* Set Number Footer */}
                <div style={{
                    marginTop: '20px',
                    fontSize: '16pt',
                    fontWeight: 'bold',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '10px',
                    width: '100%',
                    boxSizing: 'border-box',
                    paddingRight: '20px'
                }}>
                    <Image
                        src={logoPath}
                        alt="Spoke Logo"
                        width={24}
                        height={24}
                        style={{ display: 'block' }}
                    />
                    <span style={{ flex: 1 }}>{setNumber}</span>
                </div>

            </div>
        </div>
    )
}
