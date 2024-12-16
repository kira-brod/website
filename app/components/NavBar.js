'use client'
import { Bars3Icon } from "@heroicons/react/24/outline"
import { useState } from "react";
import Link from "next/link";


export default function NavBar(props) {

    const [isOpen, setIsOpen] = useState(false);

    const {project, scrolled, color} = props;

    const handleClick = (event) => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    return (
        <div className={(project ? 'fixed z-10 ' : '') + "justify-between py-2 w-screen mx-auto px-10 " + (isOpen ? 'flex-col' : 'md:flex') + (scrolled > 0 ? ' drop-shadow-md' : '') + " " + color }>
            <div className="flex justify-between items-center">
                <Link href="/" className="kb">kb.</Link>
                <button onClick={handleClick}>
                    <Bars3Icon className="h-6 w-6 text-black md:hidden" />
                </button>
            </div>
            <div className={"md:flex md:flex-row items-center justify-start md:space-x-1 pb-3 md:pb-0 " + (isOpen ? 'flex-col' : 'hidden')}>
                <Link href="/#work" className={"block " + (isOpen ? '' : 'pl-6')}>WORK</Link>
                <Link href="/personal" className={"block " + (isOpen ? '' : 'pl-6')}>ABOUT ME</Link>
            </div>
        </div>
    )
}