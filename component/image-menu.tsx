import {
    User,
    FolderPlus
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "./Icons/menu"
import { AddToAlbumDialog } from "./add-to-album-dialogue"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"

export function ImageMenu({ image }: { image: SearchResult[] }) {
    const [albumName, setAlbumName] = useState("")
    

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-8 h-8 p-0">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem asChild onClick={() => setOpen(false)}>
                        {/* <FolderPlus className="mr-2 h-4 w-4" />
                        <span>Add to Album</span> */}
                        <AddToAlbumDialog image={image} />
                        
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
