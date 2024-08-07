import Link from "next/link"
import Image from "next/image"

export function Footer() {

    return (
        <footer className="justify-between w-screen mx-auto px-4 pb-3" >
            <div className="flex justify-between items-center">
                <Link href="/" className="kb">kb.</Link>
                <p className="text-[#999999]">сделано дома</p>
                <div className="socials flex">
                    <Image className="place-self-center mr-2" src="/img/Insta.png" alt="airbuds app cover" width={30} height={30} />
                    <Image className="place-self-center" src="/img/LinkedIn.png" alt="airbuds app cover" width={30} height={30} />
                </div>
            </div>
        </footer>
    )
}
