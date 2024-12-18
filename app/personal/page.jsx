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
            <div className={" grid content-between overflow-x-hidden "}>
                <div className="">
                    <NavBar project={true} scrolled={scrolled} color="bg-[#ffffff]" />
                </div>

                <div className="bg-gradient-to-r from-[#CD85B7]/25 from-10% via-[#CD8595]/50 via-30% to-[#C085CD]/25 to-90%  mt-16  rounded-2xl mx-10">
                    <div className="mx-10 mt-14 lg:mx-auto lg:mt-0 max-w-5xl ">
                        <div className="grid grid-cols-1 md:ml-0 lg:ml-10 xl:ml-0 md:grid-cols-2">
                            <div className="">
                                <div>
                                    <p className=" text-7xl  mt-44 font-bold leading-[3.5rem]">
                                        Hi, I&apos;m Kira!
                                    </p>
                                </div>
                                <div className="mt-20 mb-20 grid grid-cols-1 lg:grid-cols-4">
                                    <div className="col-span-3">
                                        <p className="mb-5">Aside from being interested in UX/UI Design, I love all things arts and crafts. From crocheting to studying abroad in London for art history, I am a sucker for a good piece of art.</p>
                                        <p>I also go bouldering on occasion!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content-end">
                                <Image src="/img/bunny.png" className="" alt="under construction sign" width={800} height={800} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr className="landing" /> */}
            </div>
            {/* <div className="grid h-screen place-content-center grid-cols-1">
                <Image src="/img/construction.png" className="place-self-center" alt="under construction sign" width={400} height={400} />

            </div> */}
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