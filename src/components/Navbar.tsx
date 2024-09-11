import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function Navbar(){
    return (
        <div className="flex mt-4 ml-2">
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}