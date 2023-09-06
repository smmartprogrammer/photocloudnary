"use client"

import { Heart } from "@/component/Icons/Heart"
import { CldImage } from "next-cloudinary"
import { setAsFavouriteAction } from "./Actions"
import { useTransition } from "react"

export function CloudinaryImage(props: any & { publicId: string }) {
    const [transition, startTransition] = useTransition()
    return (
        <div className="relative">
            <CldImage
                {...props}
            />
            <Heart
                onClick={() => {
                    startTransition(() => {
                        setAsFavouriteAction(props.publicId)
                    })
                }}
                className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" />
        </div>
    )
}