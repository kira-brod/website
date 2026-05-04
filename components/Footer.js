'use client'
import Link from "next/link"
import Image from "next/image"

export function Footer() {

    return (
        <footer className="overflow-y-hidden">
            <div className="h-auto md:h-[400px] bg-[#2B3808]">
                <div className="mx-10 xl:mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-end">
                    <Image src="/img/Footer.png" alt="linkedin link" width={900} height={900} />
                    <div className="mb-10">
                        <Link className="hover:underline text-black" target="_blank" href="https://www.linkedin.com/in/kira-brodsky-90a11a275/">
                            <p className="text-[#CFFF49] mb-2">[ LinkedIn ]</p>
                        </Link>
                        <Link className="hover:underline text-black" href="mailto:kira.b@outlook.com">
                            <p className="text-[#CFFF49]">[ Email ]</p>
                        </Link>
                    </div>
                    {/* <div className="flex justify-between items-center">
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
            </div> */}
                </div>
            </div>
        </footer>
    )
}
