"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"


export function ForceRefresh() {

    const router = useRouter()
    return

    (useEffect(() => {

        router.refresh()

    }, [])
    )

}


