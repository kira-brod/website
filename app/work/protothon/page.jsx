'use client'
import NavBar from "@/app/components/NavBar"
import Container from "@/app/components/Container"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/app/components/Footer"
import { motion } from "framer-motion"
import { useRef } from "react"


export default function Protothon() {



    const list = useRef()

    // // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
    // const item = useRef();
    const itemWidth = list.offsetWidth;

    function handleClick(direction) {
        // Based on the direction we call `scrollBy` with the item width we got earlier
        if (direction === "previous") {
            list.scrollTo({ left: -itemWidth, behavior: "smooth" });
        } else {
            list.scrollTo({ left: itemWidth, behavior: "smooth" });
        }
    }

    return (
        <div className="overflow-x-hidden">
            <div className="">
                <NavBar />
            </div>
            <div className="hero-text grid grid-cols-1 lg:grid-cols-3 px-20">
                <div className="col-span-2">
                    <div className="grid grid-rows-2">
                        <div className="py-10">
                            <p className="text-6xl">A web app designed to aid the SFD with resource allocation.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <h2 className="pb-5">About</h2>
                                <p>The Seattle Fire Department is looking for a platform that should facilitate seamless communication, resource allocation, and data management to optimize emergency response efforts and improve overall operational efficiency.</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="ml-0 md:ml-20">
                                    <h2 className="pb-5">Role</h2>
                                    <p className="pb-10">Designer</p>
                                    <h2 className="pb-5">Dates</h2>
                                    <p className="pb-10">May 4th - May 5th</p>
                                </div>
                                <div className="ml-20">
                                    <h2 className="pb-5">Team</h2>
                                    <p className="pb-10">4 Students</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buffer bg-[#DDE5EC] shadow-inner">
                <Image className="shadow-inner" src="/img/map.png" alt="design-buffer" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="diving-in px-32 py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="place-content-center mt-14 md:mt-0 mr-0 md:mr-10 lg:mr-0">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Context</h2>
                    <h2 className="pb-5">Problem</h2>
                    <p className="pb-3">This past year has kept the Seattle Fire Department extremely busy with a rising call load. We have seen an increase in calls across many areas, including vacant building fires, scenes of violence, automatic fire alarms, suspected overdoses and responses to those who are unhoused.</p>
                    <p>No other specific design feedback was given, the rest was focused on bugs found during the testing as well as the order in which the case information was presented.</p>
                </div>
                <div className="grid justify-items-center">
                    <Link href="https://leetcare.notion.site/02-Brandon-San-4939f286ec054b908a7f702016cea7f5">
                        <Image className="place-self-center" src="/img/stats.png" alt="main profile" width={500} height={500} />
                    </Link>
                </div>
            </div>
            <div className="inspiration px-32 pb-20 grid grid-cols-1">
                <div className="mt-14 text-center ">
                    <h2 className="pb-5">Meeting One</h2>
                    <p className="pb-3">Our first meeting focused on getting to know the other team members and working out our working habits. </p>
                    <Image className="place-self-center drop-shadow-2xl" src="/img/personality.png" alt="design system" width={1100} height={1100} />
                </div>
            </div>
            <div class="list-wrapper">
                <ul class="list">
                    <li ref={list} className="item"><div className="content">Item 1</div></li>
                    <li ref={list} className="item"><div className="content">Item 2</div></li>
                    <li ref={list} className="item"><div className="content">Item 3</div></li>
                    <li ref={list} className="item"><div className="content">Item 4</div></li>
                    <li ref={list} className="item"><div className="content">Item 5</div></li>
                </ul>
                <button onClick={handleClick} className="buttonScroll button--previous" type="button">➜</button>
                <button onClick={handleClick} className="buttonScroll button--next" type="button">➜</button>
            </div>
            <Footer />
        </div >
    )
}