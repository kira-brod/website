'use client'
import NavBar from "@/app/components/NavBar"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
// import { Carousel } from "@coreui/coreui"
// import { useRef } from "react"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
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
        <main className="overflow-x-hidden bg-[#ffffff]">

            <div className={" grid content-between overflow-x-hidden "}>
                <div className="">
                    <NavBar project={true} scrolled={scrolled} color="bg-[#ffffff]" />
                </div>

                <div className="bg-gradient-to-r from-[#4A93E1]/25 from-10% via-[#547EE9]/50 via-30% to-[#859ACD]/25 to-90%  mt-16  rounded-2xl mx-10">
                    <div className="mx-10 lg:mx-auto mt-14 lg:mt-0 max-w-5xl lg:pr-44">
                        <div>
                            <p className="leading-6 lg:leading-3 mt-20 mb-3">Designer | Four members | Protothon - May 4th-5th 2024 | Figma</p>
                            <p className=" text-5xl font-bold leading-[3.5rem]">
                                A web app designed to aid the SFD with resource allocation.
                            </p>
                        </div>
                        <div className="mt-20 mb-20 grid grid-cols-1 lg:grid-cols-4">
                            <p className=" col-span-2">For the Protothon, my team chose to go with the Enterprise track. Our task was to design a platform that aims to streamline communication, resource management, and emergency response coordination for the Seattle Fire Department.</p>
                        </div>
                    </div>
                </div>
                {/* <hr className="landing" /> */}
            </div>

            <div className="py-16 mx-10 lg:mx-auto max-w-5xl lg:pr-44">
                <p className="leading-3 font-bold  mb-3">Problem</p>
                <p className=" lg:mx-0  text-3xl font-bold leading-[2.5rem]">
                    The Seattle Fire Department is experiencing an increase in caller volume and incidents and need a way to dispatch resources.
                </p>
                <p className="mt-5 ">This past year has kept the Seattle Fire Department extremely busy with a rising call load. We have seen an increase in calls across many areas, including vacant building fires, scenes of violence, automatic fire alarms, suspected overdoses and responses to those who are unhoused. </p>
                <p className="mt-5 ">A concerning trend they have begun to see is an increase in cardiac arrests, which appears to be correlated with the rise in suspected overdoses. In all, they sent resources on a record-setting 111,319 responses in 2023 – a nearly five percent increase over the prior year. Dispatchers need a way to track their resources while making sure the proper supplies are reaching each incident.</p>
            </div>

            <div className="bg-[#efeff2] rounded-2xl mx-10">
                <div className="py-16  mx-10 lg:mx-auto max-w-5xl ">
                    <p className="leading-3 font-bold  mb-3">Goals for Dispatching Tool</p>
                    <div className="diving-in grid grid-cols-1  mt-14 md:grid-cols-3  md:px-0 ">
                        <div className="mr-5">
                            <h2 className="text-6xl pb-5">01</h2>
                            <h2 className="pb-5 text-3xl">Track Incident Data</h2>
                            <p className="pb-12 md:pb-0">Dispatchers will be able to distinguish between active and inactive incidents, as well as resource trends among incidents and batallions. </p>
                        </div>
                        <div className="mr-5">
                            <h2 className="text-6xl pb-5">02</h2>
                            <h2 className="pb-5 text-3xl">Dispatch Resources</h2>
                            <p className="pb-12 md:pb-0">Dispatchers will know what resources are available to use at the time of an incident.</p>
                        </div>
                        <div className="mr-5">
                            <h2 className="text-6xl pb-5">03</h2>
                            <h2 className="pb-5 text-3xl">Informed Decisions</h2>
                            <p className="">Based on incident tracking data, dispatchers will be able to optimize their operations.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="py-16 mx-10 lg:mx-auto max-w-5xl">
                <p className="text-3xl mb-5 font-bold">User Personas</p>
                <p className="lg:pr-44">Our primary users are the dispatchers within the Seattle Fire Department as well as any other employees that deal with incident management.</p>
                <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 -ml-5">
                    <Image src="/img/Tom.png" alt="dashboard" width={600} height={300} />
                    <Image src="/img/Larisa.png" alt="dashboard" width={600} height={300} />
                </div>
            </div>
            <hr className="landing" />

            <div className="mx-10 lg:mx-auto max-w-5xl py-16 ">
                <div className="grid lg:grid-cols-5 grid-cols-1">
                    <div className="col-span-3 content-center pr-10">
                        <p className="mb-3  font-bold">Research</p>
                        <p className="mb-5">The Seattle Fire Department (SFD) operates 33 fire stations grouped into five battalions, dispatching the nearest available resources based on the nature of the emergency, such as fire suppression, BLS, ALS, technical operations, or Health One services. The EMS department emphasizes cardiac arrest survival through rapid deployment of BLS and ALS resources, aiming for CPR within four minutes and paramedic services within eight minutes of an event.</p>
                        <p className="mb-5">Mobile Integrated Health Program provides enhanced services for frequent 911 callers and individuals with complex social or medical needs, offering immediate response and long-term navigation for medical, mental health, and social support.</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-3xl font-bold mb-5">Operational challenges: </p> <p className="mb-10">Call processing within 60 seconds has dropped significantly, indicating a need for improved unit assignment and dispatch efficiency.</p>
                        <p className="text-3xl font-bold mb-5">Data Utilization Gaps:</p> <p> Limited use of historical data analytics and reporting hinders trend identification, resource planning, and informed decision-making.</p>
                    </div>
                </div>
            </div>
            <hr className="landing" />

            {/* <div className="mx-10 lg:mx-auto max-w-5xl py-20">
                <h2 className="pb-3 text-3xl">User Flow</h2>
                <p className="pb-10 mr-0 lg:mr-60">It was important for us to understand how a professor would navigate through our product and creating a user flow allowed us to connect the different interfaces together smoothly.</p>
                <Image className=" drop-shadow-2xl" src="/img/flow.png" alt="design system" width={1100} height={1100} />
            </div> */}

            {/* <div className="mx-10 lg:mx-auto max-w-5xl py-20">
                <h2 className="text-3xl">Lo-Fi and System Design</h2>
                <div className="grid grid-cols-1 lg:grid-cols-9 place-content-start">
                    <div className="col-span-5 -ml-5">
                        <Image src="/img/lofi.png" alt="lofi" width={600} height={300} />
                    </div>
                    <div className="col-span-4 -ml-5">
                        <Image src="/img/DS-rxpert.png" alt="design system" width={500} height={300} />
                    </div>
                </div>
            </div> */}

            <div className="mx-10 lg:mx-auto max-w-5xl py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="-ml-5">
                        <Image src="/img/SFDlofi.png" alt="SFD lo-fi" width={600} height={300} />
                    </div>
                    <div className="ml-0 lg:ml-10 mt-10 lg:mt-0 place-content-center">
                        <p className="mb-3  font-bold">Lo-Fi Sketches</p>
                        <p className="mb-5 ">Before starting on our digital design, we all took time to visualize the different interfaces that we had in mind. These were some of the sketches for the map view, incident view, dashboard, and incident tracking interfaces.</p>
                        <p>After everyone was done sketching, we met back up to discuss our ideas. It was interesting to see how everyone had different visualize for the interfaces. After a thorough discussion, we settled on the designs that we liked and split up the work.</p>
                    </div>
                </div>
            </div>

            <div className="mx-10 lg:mx-auto max-w-5xl py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-2 flex -ml-5 lg:hidden justify-end">
                        <Image src="/img/SFDdash.png" alt="dashboard" width={600} height={300} />
                    </div>
                    <div className="mt-10 col-span-1 place-content-center">
                        <p className="text-3xl mb-5 font-bold">Review summary statistics and improve response rate.</p>
                        <p>Now having access to information regarding resources, incident types, and battalion specific statistics, the Seattle Fire Department can have informed decision-making.</p>
                    </div>
                    <div className="col-span-2 -ml-5 lg:flex justify-end hidden">
                        <Image src="/img/SFDdash.png" alt="dashboard" width={600} height={300} />
                    </div>
                </div>
            </div>

            {/* <div className="mx-10 lg:mx-auto max-w-5xl py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-2 -ml-5">
                        <Image src="/img/CommunityHub.png" alt="Community hub" width={600} height={300} />
                    </div>
                    <div className="col-span-1 mt-10 place-content-center">
                        <p className="text-3xl mb-5 font-bold">Share your cases and interact with others.</p>
                        <p>Upload your cases for feedback and have access to other’s cases to use in your curriculum.</p>
                        <p className="mt-10">* Received feedback that professors would not want to use their time to leave feedback/interact with cases - this feature was put on hold</p>
                    </div>
                </div>
            </div> */}


            <div className="bg-[#efeff2] rounded-2xl mx-10">
                <div className="py-16 mx-10 lg:mx-auto max-w-5xl">
                    <p className="text-3xl  font-bold mb-5">Quickly dispatch resources to all active incidents.</p>
                    <p className="lg:pr-40">In the map view, you are able to see the five different battalions. All the active incidents are marked in red while the closed incidents are marked in blue. To dispatch resources, select a location on the map and fill out corresponding information.</p>
                    <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 -ml-5">
                        <Image src="/img/Incidents1.png" alt="map" width={600} height={300} />
                        <Image src="/img/Incidents2.png" alt="incident on map" width={600} height={300} />
                    </div>
                </div>
            </div>

            <div className="py-16 mx-10 lg:mx-auto max-w-5xl">
                <p className="text-3xl  font-bold mb-5">Track and filter all incidents.</p>
                <p className="lg:pr-40">Easily find the incident you are looking for, whether using the filters or simply searching. To mark an open incident as closed, click on the incident, write down the case notes, and close the incident.</p>
                <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 -ml-5">
                    <Image src="/img/OpenCases.png" alt="map" width={600} height={300} />
                    <Image src="/img/OpenIncReport.png" className="lg:-mt-2" alt="incident on map" width={600} height={400} />
                </div>
            </div>

            <div className="py-16 mx-10 lg:mx-auto max-w-5xl lg:pr-44">
                <p className="leading-3 font-bold mb-3">Personal Reflection</p>
                <p className="text-3xl font-bold leading-[2.5rem]">
                    In the future, spending more time understanding the process of operations, either through user testing or comparative analysis.
                </p>
                <p className="mt-5">Going into the design process, none of us were well versed in what a dispatcher needs in order to successfully track and attend to an incident. When doing research, there wasn&apos;t much information regarding the dispatching process, forcing us to make decisions based on what we thought the dispatcher might need. If we had more resources and time, holding interviews with dispatchers would have helped us better understand what to include in the tool through methods such as affinity mapping.</p>
            </div>

            <div className="">
                <hr className="landing" />
                <div className="mx-auto max-w-5xl py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="justify-items-center lg:justify-items-start lg:place-content-center">
                            <p className="text-4xl font-bold">Keep in touch!</p>
                            <div className="flex">
                                <div className="flex justify-start items-center py-2">
                                    <Link className="hover:underline" href="mailto:kira.b@outlook.com">Email</Link>
                                    <ArrowUpRightIcon className="w-5 h-5 ml-2" />
                                </div>
                                <div className="flex justify-start items-center py-2 pl-5">
                                    <Link className="hover:underline" target="_blank" href="https://www.linkedin.com/in/kira-brodsky-90a11a275/">LinkedIn</Link>
                                    <ArrowUpRightIcon className="w-5 h-5 ml-2" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10 lg:mt-0">
                            <Image className="dr" src="/img/footer.png" alt="Rxpert home page" width={200} height={200} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={" grid justify-center"}>
                <p className="text-[#999999] pb-3">made @ home</p>
            </div>
        </main >
    )
}