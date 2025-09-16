'use client'
// import NavBar from "@/app/components/NavBar"
import Image from "next/image"
import Link from "next/link"
// import { Footer } from "@/app/components/Footer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowUpRightIcon, ChatBubbleBottomCenterIcon, ChatBubbleOvalLeftEllipsisIcon, FaceSmileIcon, ListBulletIcon } from "@heroicons/react/24/outline"
import NavBar from "../../components/NavBar"

export default function Rxpert() {

    const [scrolled, setScrolled] = useState(0);
    const [slide1, setSlide1] = useState(true);
    const [slide2, setSlide2] = useState(false);
    const [slide3, setSlide3] = useState(false);

    const bgcolor = "#0F2263"

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
        <main className="overflow-x-hidden bg-[#0B1338] ">
            <div className="">
                <NavBar project={true} scrolled={scrolled} color="bg-[#0B1338]" />
            </div>
            <div className={" grid content-between overflow-x-hidden max-w-7xl xl:mx-auto "}>
                <div className="grid grid-cols-1 justify-items-center mt-32">
                    <p className="text-5xl font-bold text-white mb-2  z-10">RxPert</p>
                    <p className="text-white mb-5 z-10 text-sm">April 2024 - Present</p>
                    <p className="text-white text-xl mx-80 text-center z-10">A digital tool designed to act as a virtual pharmacy patient to help students better prepare for patient actor tests.</p>
                    <Image className="-mt-24 " src="/img/hero rxpert.png" alt="dashboard" width={1200} height={1200} />

                    <div className=" mt-28">
                        <p className="text-white text-xl mx-96 text-center z-10">Problem</p>
                        <p className="text-white text-3xl font-bold mx-64 text-center z-10 mt-5">Lack of accessible real life patient practice leads students to fail their final exam which involves a mock pharmacy visit with a patient actor.</p>
                    </div>

                    <div className=" mt-28">
                        <p className=" text-2xl font-bold mx-44 text-center z-10 bg-gradient-to-r from-[#76ABFF] to-[#D563FF] bg-clip-text text-transparent">Common Pitfalls of Students</p>
                        <div className="flex justify-center space-x-3 mt-5">
                            <div className="flex justify-start items-center py-2 border-2 px-4 rounded-full">
                                <FaceSmileIcon className="w-5 h-5 mr-2 text-white" />
                                <p className=" text-white font-bold" href="mailto:kira.b@outlook.com">Empathy Statements</p>
                            </div>
                            <div className="flex justify-start items-center py-2 border-2 px-4 rounded-full">
                                <ListBulletIcon className="w-5 h-5 mr-2 text-white" />
                                <p className=" text-white font-bold" href="mailto:kira.b@outlook.com">Agenda Setting</p>
                            </div>
                            <div className="flex justify-start items-center py-2 border-2 px-4 rounded-full">
                                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 mr-2 text-white" />
                                <p className=" text-white font-bold" href="mailto:kira.b@outlook.com">Reflection Statements</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-28 justify-items-center place-items-center">
                    <ul className="grid grid-cols-1 mx-20">
                        <li onMouseEnter={() => {
                            setSlide1(true);
                            setSlide2(false);
                            setSlide3(false);
                        }} className={slide1 ? "bg-[#0F2263] border-[#0564FC]" : " "}>
                            <p className="font-bold text-white">Personlized Practice</p>
                            <p className="text-white mt-3">Students get to pick whether they want to work through a full patient visit or focus on specific parts to address their pitfalls.</p>
                        </li>
                        <li onMouseEnter={() => {
                            setSlide1(false);
                            setSlide2(true);
                            setSlide3(false);
                        }} className={slide2 ? "bg-[#0F2263] border-[#0564FC]" : " "}>
                            <p className="font-bold text-white">Oral Interaction</p>
                            <p className="text-white mt-3">Instead of limiting students to interacting with their patient through text, they can also interact with them through voice.</p>
                        </li>
                        <li onMouseEnter={() => {
                            setSlide1(false);
                            setSlide2(false);
                            setSlide3(true);
                        }} className={slide3 ? "bg-[#0F2263] border-[#0564FC]" : " "}>
                            <p className="font-bold text-white">Lesson Coordination</p>
                            <p className="text-white mt-3">Professors are able to digitize their skills lab for students to access wherever, as well as making additional practice scenarios for students.</p>
                        </li>
                    </ul>
                    <div className={slide1 ? "active" : " hidden"}>
                        <Image className=" " src="/img/slide 1.png" alt="dashboard" width={500} height={500} />
                    </div>
                    <div className={slide2 ? "active" : " hidden"}>
                        <Image className=" " src="/img/slide 2.png" alt="dashboard" width={500} height={500} />
                    </div>
                    <div className={slide3 ? "active" : " hidden"}>
                        <Image className=" " src="/img/slide 3.png" alt="dashboard" width={500} height={500} />
                    </div>
                </div>

                <div className=" mt-28">
                    <p className="text-white text-xl mx-96 text-center z-10">Challenge</p>
                    <p className="text-white text-3xl font-bold mx-64 text-center z-10 mt-5">How to balance the need for more practice with the hesitancy of AI adoption?</p>
                    <p className="mt-5 text-center text-white italic mx-80 ">&quot;Capstone practice is so much harder with AI, but if you do it in pieces and just have students practice that, then it&apos;s more doable in the short term&quot;</p>
                    <p className="mt-2 text-center text-white font-bold text-sm">Professor at the UW School of Pharmacy</p>
                </div>

                <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 place-items-center">
                    <Image className=" " src="/img/Subset.png" alt="dashboard" width={500} height={500} />
                    <div>
                        <p className="text-white text-2xl font-bold mx-20  z-10">AI evaluation tends to be better on smaller subsets of tasks.</p>
                        <p className="text-white text-2xl font-bold mx-20  z-10 mt-10">This allows students to practice the interaction parts they want, with a more accurate evaluation.</p>
                    </div>
                </div>


                <div className="bg-[#0B1338]">
                    {/* <hr className="landing" /> */}
                    <div className="mx-auto max-w-5xl py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                            <p className="text-4xl font-bold text-white">Keep in touch!</p>
                            <div className="flex">
                                <div className="flex justify-start items-center py-2">
                                    <Link className="hover:underline text-white" href="mailto:kira.b@outlook.com">Email</Link>
                                    <ArrowUpRightIcon className="w-5 h-5 ml-2 text-white" />
                                </div>
                                <div className="flex justify-start items-center py-2 pl-5">
                                    <Link className="hover:underline text-white" target="_blank" href="https://www.linkedin.com/in/kira-brodsky-90a11a275/">LinkedIn</Link>
                                    <ArrowUpRightIcon className="w-5 h-5 ml-2 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}
