"use client"
import { useEffect, useState } from "react"
import { CloudinaryImage } from "../../component/cloudinary-image"
import { SearchResult } from "../gallery/page"
import ImageGrid from "@/component/image-grid"


export default function FavoritesList({ initialResources }: {
    initialResources: SearchResult[]
}) {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])

    return (
        <ImageGrid images={resources}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage key={imageData.public_id} imageData={imageData} width="400" height="400" alt="an image of something"
                        onUnheart={(unheartedResource) => {
                            setResources((currentResources) => currentResources.filter((resources) =>
                                resources.public_id !== unheartedResource.public_id
                            ))
                        }}

                    />
                )
            }}
        />
    )
}
