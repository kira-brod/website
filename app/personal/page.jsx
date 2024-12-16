'use client'
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Personal() {

    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            // console.log('Page scrolled:', window.pageYOffset);
            setScrolled(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);

        };
    }, []);

    return (
        <div>
            <NavBar project={true} scrolled={scrolled} />
            <div className="grid h-screen place-content-center grid-cols-1">
                <Image src="/img/construction.png" className="place-self-center" alt="under construction sign" width={400} height={400} />

            </div>
            {/* <div className="grid grid-cols-3 pt-20 gap-3 mx-3">
                <div className="col-span-2 bg-purple-300 rounded-md">
                    <p>hi</p>
                    <p>hi</p>
                    <p>hi</p>
                </div>
                <div className="col-span-1 bg-pink-400 rounded-md">

                </div>
            </div> */}
        </div>
    )
}