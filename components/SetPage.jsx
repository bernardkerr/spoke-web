import fs from 'fs'
import path from 'path'
import SetPageClient from './SetPageClient'

export default function SetPage(props) {
    const { imageFolder } = props
    let images = []

    if (imageFolder) {
        const imagesDir = path.join(process.cwd(), 'docs-test', 'images', imageFolder)
        try {
            if (fs.existsSync(imagesDir)) {
                const files = fs.readdirSync(imagesDir)
                images = files.filter(file => /\.(png|jpg|jpeg|webp|gif)$/i.test(file)).sort()
            }
        } catch (e) {
            console.error(`Error reading images for SetPage from ${imagesDir}:`, e)
        }
    }

    return <SetPageClient {...props} images={images} />
}
