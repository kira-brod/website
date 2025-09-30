import Link from "next/link"
import Image from "next/image"

export function Footer() {

    return (
        <footer className="justify-between w-screen mx-auto px-10 pb-3" >
            <div className="flex justify-between items-center">
                <Link href="/" className="kb">kb.</Link>
                <p className="text-[#999999]">made @ home</p>
                <div className="socials flex">
                    <Link href="https://www.instagram.com/kira.brod/">
                        <Image className="place-self-center mr-2" src="/img/Insta.png" alt="instagram link" width={30} height={30} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kira-brodsky-90a11a275/">
                        <Image className="place-self-center" src="/img/LinkedIn.png" alt="linkedin link" width={30} height={30} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
