'use client'
import NavBar from "@/app/components/NavBar"
import Container from "@/app/components/Container"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/app/components/Footer"
import { motion } from "framer-motion"
// import { Carousel } from "@coreui/coreui"
// import { useRef } from "react"
import EmblaCarousel from "@/app/components/EmblaCarousel"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const SLIDES = [{ image: "/img/p1-cover.png" },
{ image: "/img/p2.png" },
{ image: "/img/p3.png" },
{ image: "/img/p4.png" },
{ image: "/img/painpointsp45.png" },
{ image: "/img/p5.png" },
{ image: "/img/p6.png" },
{ image: "/img/p7.png" },
{ image: "/img/p8.png" },
{ image: "/img/p9.png" },
{ image: "/img/p10.png" },
{ image: "/img/p11.png" },
{ image: "/img/p12.png" }]




export default function Protothon() {

    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            //   console.log('Page scrolled:', window.pageYOffset);
            setScrolled(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);

        };
    }, []);

    // const list = useRef()

    // // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
    // const item = useRef();
    // const itemWidth = list.offsetWidth;

    // function handleClick(direction) {
    //     // Based on the direction we call `scrollBy` with the item width we got earlier
    //     if (direction === "previous") {
    //         list.scrollTo({ left: -itemWidth, behavior: "smooth" });
    //     } else {
    //         list.scrollTo({ left: itemWidth, behavior: "smooth" });
    //     }
    // }

    return (
        <main className="overflow-x-hidden">
            <div className="">
                <NavBar project={true} scrolled={scrolled} color="bg-white"/>
            </div>
            <div className="hero-text grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-6xl px-4 md:px-0 mt-2">
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
            <div className="diving-in mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="place-content-center mt-14 md:mt-0 mr-0 md:mr-10 lg:mr-10">
                    <h2 className="pb-1 text-[#00839A] text-sm">Context</h2>
                    <h2 className="pb-5">Problem</h2>
                    <p className="pb-3">This past year has kept the Seattle Fire Department extremely busy with a rising call load. We have seen an increase in calls across many areas, including vacant building fires, scenes of violence, automatic fire alarms, suspected overdoses and responses to those who are unhoused.</p>
                    <p>No other specific design feedback was given, the rest was focused on bugs found during the testing as well as the order in which the case information was presented.</p>
                </div>
                <div className="grid justify-items-center">
                    <Image className="place-self-center" src="/img/stats.png" alt="main profile" width={500} height={500} />
                </div>
            </div>
            <hr className=" rxpert-hr" />
            <div className="inspiration mx-auto max-w-6xl px-4 md:px-0 pb-20 pt-10 grid grid-cols-1">
                <div className="mt-14 text-center grid justify-center ">
                    <h2 className="pb-3">Team Questionnare</h2>
                    <p className="pb-10">Since most of us didn&apos;t know eachother prior to the protothon, we thought it would be beneficial to identify each person&apos;s strengths/weaknesses and what they want to get out of this project.</p>
                    <Image className="place-self-center drop-shadow-2xl" src="/img/personality.png" alt="design system" width={1100} height={1100} />
                </div>
            </div>
            <div className="bg-[#04025A]">
                <div className="mx-auto max-w-6xl px-4 md:px-0">
                    <div className="design-system py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                        <div className="grid content-center mr-0 md:mr-10 mb-20 md:mb-0">
                            <div>
                                <h2 className="pb-5 text-white">Design Preparations</h2>
                                <p className="pb-3 text-white">Research and meetings were conducted to ensure all members were on the same page.</p>
                            </div>
                        </div>
                        <div>
                            <Link href="https://docs.google.com/document/d/1Raj_XagLUzPX20Gpo4Rs8fotKOtDsTJr4ZEthWPACso/edit?usp=sharing">
                                <div className="grid place-content-center  ">
                                    <h2 className="pb-5 text-white">Background Research</h2>
                                    <p className=" text-white">Before starting on the design, it was important for us to understand how the fire department works and what they need to have successful operations.</p>
                                    <p className=" pt-10 flex justify-start hover:underline items-center text-white">Click to read more
                                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                                    </p>

                                </div>
                            </Link>
                            <Link href="https://docs.google.com/document/d/1i33HmuWv-kAiQvdlZPLhtj-DeeQ4zaHPPxbfkNLu2eE/edit?usp=sharing">
                                <div className=" mt-20  ">
                                    <h2 className="pb-5  text-white">Meeting Notes</h2>
                                    <p className=" text-white">Instead of staying on call for majority of the day, we wanted to ensure that we had breaks to process our individual thoughts. While we met, we jotted down notes on ideas and tasks.</p>
                                    <p className=" pt-10 justify-start hover:underline items-center flex text-white">Click to read more
                                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="diving-in mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="grid justify-items-center ">
                    <Image className="place-self-center" src="/img/lo-fi.png" alt="main profile" width={500} height={500} />
                </div>
                <div className="place-content-center mt-14 md:mt-0 mr-0 md:ml-10 lg:mr-0">
                    <h2 className="pb-1 text-[#00839A] text-sm">Design</h2>
                    <h2 className="pb-5">Lo-Fi Sketches</h2>
                    <p className="pb-3">Before starting on our digital design, we all took time to visualize the different interfaces that we had in mind. These were my initial sketches for the map view, incident view, dashboard, and incident tracking interfaces.</p>
                    <p>After everyone was done sketching, we met back up to discuss our ideas. It was interesting to see how everyone had different visuals for the interfaces. After a thorough discussion, we settled on the designs that we liked and split up the work.</p>
                </div>
            </div>
            <div className="bg-[#CCE6EB]">
                <div className="mx-auto max-w-6xl px-4 md:px-0">
                    <div className="diving-in px-32 py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                        <div className="place-content-center mt-14 md:mt-0 mr-0 md:mr-10 lg:mr-10">
                            <h2 className="pb-1 text-[#00839A] text-sm">Design</h2>
                            <h2 className="pb-5">Style Guide</h2>
                            <p className="pb-3">Since we were splitting up the design, we wanted to ensure that it was cohesive between interfaces. We were able to quickly decide on a color palette and font style.</p>
                            <p>We wanted to stick with a calmer color palette yet still have some warning colors such as yellow and red for open incidents. We also wanted to separate incidents based on battalion which required a bigger color palette.</p>
                        </div>
                        <div className="grid justify-items-center">
                            <Image className="place-self-center" src="/img/style-guide.png" alt="main profile" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="inspiration mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1 justify-items-center">
                <h2 className="pb-1 text-[#00839A] text-sm">Design</h2>
                <h2 className="pb-5">Map View</h2>
                <p className="pb-5 md:px-24 text-center">My task was designing the map view. For this, we wanted to have the fire department be able to see all the incidents for that day, whether closed or open. To log an incident, you can click on an area on the map and start filling out information about the incident.</p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Image className="place-self-center" src="/img/Incidents.png" alt="main profile" width={700} height={700} />
                    <Image className="place-self-center" src="/img/ReportInc.png" alt="main profile" width={700} height={700} />
                </div>
            </div>
            <div className="bg-[#CCE6EB]">
                <div className="mx-auto max-w-6xl px-4 md:px-0">
                    <div className="diving-in py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                        <div className="grid justify-items-center">
                            <Image className="place-self-center" src="/img/cases.png" alt="main profile" width={500} height={500} />
                        </div>
                        <div className="place-content-center mt-14 md:mt-0 mr-0 md:ml-10 lg:mr-10">
                            <h2 className="pb-5">Incident Tracking Page</h2>
                            <p className="pb-3">After finishing the map view, I was able to help another member of my team design the incidents page. We discussed how the visual of the incidents should be similar to the map view.</p>
                            <p>We chose to also add filters to the top of the page so that users could choose what incidents they wanted to see. The colors to the left of each incident correspond to which battalion they occured in.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="diving-in mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="grid content-center mr-0 md:mr-10">
                    <div>
                        <h2 className="pb-1 text-[#00839A] text-sm">Reflection</h2>
                        <h2 className="pb-5">Developing the Design</h2>
                        <p className="pb-3">This was my first protothon and it was interesting getting to work under such time constraints.</p>
                    </div>
                </div>
                <div className="place-content-center mt-14 md:mt-0 mr-0 md:ml-10 lg:mr-10">
                    <h2 className="pb-5">User Testing</h2>
                    <p className="pb-12">To ensure that our design worked for our audience, it would have been beneficial to be able to watch our audience interact with in, noting any changes that would need to be implemented.</p>
                    <h2 className="pb-5">Understanding</h2>
                    <p className="pb-12">Since our time was limited, we didn’t spend much of it looking for competing interfaces. I think that it is always beneficial to gain an understanding of what is currently being used and how it can be developed.</p>
                    <h2 className="pb-5">Optimization</h2>
                    <p className="pb-12">An additional feature that would be interesting to implement is batch tracking in order to see which equipment and vehicles have the most efficient response rate.</p>
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-4 md:px-0">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
            <Footer />
        </main >
    )
}