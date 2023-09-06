import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const Navbar = () => {
    return (
        <div className="hidden flex-col md:flex">
            <div className="border-b container mx-auto">
                <div className="flex h-16 items-center px-4">

                    PhotoApp
                    <div className="ml-auto flex items-center space-x-4 ">

                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar




