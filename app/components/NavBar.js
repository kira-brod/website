'use client'
import { Bars3Icon } from "@heroicons/react/24/outline"
import { useState } from "react";
import Link from "next/link";


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    return (
        <div className={"justify-between w-screen mx-auto px-4 " + (isOpen ? 'flex-col' : 'md:flex')}>
            <div className="flex justify-between items-center">
                <Link href="/" className="kb">kb.</Link>
                <button onClick={handleClick}>
                    <Bars3Icon className="h-6 w-6 text-black md:hidden" />
                </button>
            </div>
            <div className={"md:flex md:flex-row items-center justify-start md:space-x-1 pb-3 md:pb-0 " + (isOpen ? 'flex-col' : 'hidden')}>
                <Link href="/work" className={"block " + (isOpen ? '' : 'pl-6')}>WORK</Link>
                <a className={"block " + (isOpen ? '' : 'pl-6')}>PERSONAL</a>
            </div>
        </div>
    )
}