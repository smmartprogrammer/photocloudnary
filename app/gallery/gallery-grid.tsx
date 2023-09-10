"use client"

import ImageGrid from "@/component/image-grid"
import { SearchResult } from "./page"
import { CloudinaryImage } from "@/component/cloudinary-image"


export default function GalleryGrid({ images }: { images: SearchResult[] }) {
    return (
arguments        <ImageGrid images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage key={imageData.public_id} imageData={imageData} width="400" height="400" alt="an image" />
                )
            }}
        />
    )
}
    
    
