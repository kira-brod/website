'use client'
import NavBar from "../components/NavBar"
// import ProjectCard from "../components/ProjectCardList"
// import { ProjectCards } from "../components/ProjectCardList"
// import { DescriptionPill } from "../components/ProjectCardList"
// import { jakarta } from "./layout"
import { Footer } from "../components/Footer"
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Clock from "../components/Clock"
// import { useState } from "react"
//test

import Link from "next/link"
import { source } from "./layout"
import { useEffect, useState } from "react"
import { color, motion } from "framer-motion"
import { Cursor } from "../components/Cursor"
import Shuffle from '../components/Shuffle'
import ScrambledText from '../components/ScrambledText'


const projects = [{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" },
{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" },
{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" }
]

function Hero() {

  // const[isHovered, setIsHovered] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  const bgColor = "bg-[#FFFFFF]"

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



  useEffect(() => {

    const mouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // size was 32 so want half
      y: mousePosition.y - 16
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75, // size was 150 so want half
      y: mousePosition.y - 75,
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    // <div className={inter.className}>
    <section className="overflow-x-hidden">
      <NavBar />
      <div className="overflow-x-hidden">
        {/* <motion.div className="cursor"
        variants={variants}
        animate={cursorVariant} 
        transition={{type:"smooth", duration: 0}}
      ></motion.div> */}



        <div className={"overflow-hidden h-dvh " + bgColor}>
          <div className="h-full mx-10 xl:mx-auto max-w-6xl py-5">
            <div className="pt-16">
              <ScrambledText
                className="mb-20 max-w-[16ch] md:max-w-[14ch] scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Hi I&apos;m Kira - a curious designer that loves to create
              </ScrambledText>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3" id="work">
                <Link href="/work/rxpert" className="h-64">
                  <div className="relative overflow-hidden group h-full rounded-lg">
                    <Image className="w-full h-full object-cover transition duration-300" src="/img/Proj1.png" alt="dashboard" width={600} height={600} />
                    <div className="absolute inset-0 flex flex-col justify-end opacity-0 transition duration-300 group-hover:opacity-100">
                      <video
                        className="w-full h-full object-cover transition duration-300"
                        src="/img/Proj1 video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                </Link>

                <Link href="/work/palantir" className="h-64">
                  <div className="relative overflow-hidden group h-full rounded-lg">
                    <Image className="w-full h-full object-cover transition duration-300" src="/img/Proj2.png" alt="dashboard" width={600} height={600} />
                    <div className="absolute inset-0 flex flex-col justify-end opacity-0 transition duration-300 group-hover:opacity-100">
                      <video
                        className="w-full h-full object-cover transition duration-300"
                        src="/img/Proj2 video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                </Link>

                <Link href="/work/capstone" className="h-64">
                  <div className="relative overflow-hidden group h-full rounded-lg">
                    <Image className="w-full h-full object-cover transition duration-300" src="/img/Proj3.png" alt="dashboard" width={600} height={600} />
                    <div className="absolute inset-0 flex flex-col justify-end opacity-0 transition duration-300 group-hover:opacity-100">
                      <video
                        className="w-full h-full object-cover transition duration-300"
                        src="/img/Proj3 video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                </Link>
              </div>


            </div>
          </div>
        </div>


        {/* <div className="mt-3 mx-10 mb-10 " id="work">
            <div className="mx-10 xl:mx-auto mt-20 max-w-6xl">
              <p className="title-text text-[50px] leading-normal">My Work</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/work/rxpert">
                  <div className="relative overflow-hidden group">
                    <Image className="w-full h-auto transition duration-300 group-hover:brightness-50" src="/img/Proj1.png" alt="dashboard" width={600} height={600} />
                    <div className="absolute inset-0 flex flex-col items-left justify-end mb-10 ml-10 opacity-0 transition duration-300 group-hover:opacity-100">
                      <h3 className="text-white text-6xl font-medium title-text mb-3">RxPert</h3>
                      <p className="text-white text-sm mr-20">A digital tool designed to act as a virtual pharmacy patient to help students better prepare for patient actor tests.</p>
                    </div>
                  </div>
                </Link>
                <Link href="/work/palantir">
                  <div className="relative overflow-hidden group">
                    <Image className="w-full h-auto transition duration-300 group-hover:brightness-50" src="/img/Proj2.png" alt="dashboard" width={600} height={600} />
                    <div className="absolute inset-0 flex flex-col items-left justify-end mb-10 ml-10 opacity-0 transition duration-300 group-hover:opacity-100">
                      <h3 className="text-white text-6xl font-medium title-text mb-3">Product Design Internship</h3>
                      <p className="text-white text-sm mr-20">Select project from my time at Palantir</p>
                    </div>
                  </div>
                </Link>
                <Link href="/work/capstone">
                  <div className="relative overflow-hidden group">
                    <Image className="w-full h-auto transition duration-300 group-hover:brightness-50" src="/img/Proj3.png" alt="dashboard" width={600} height={600} />
                    <div className="absolute inset-0 flex flex-col items-left justify-end mb-10 ml-10 opacity-0 transition duration-300 group-hover:opacity-100">
                      <h3 className="text-white text-6xl font-medium title-text mb-3">Amazon Capstone</h3>
                      <p className="text-white text-sm mr-20">IT support slack bot that uses diagnostics data</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div> */}


        {/* <hr className="landing" /> */}
      </div>



      <div className={"grid grid-cols-1 " + bgColor}>
        {/* <div className={ bgColor}>
            <Link href="/work/palantir">
              <div className={"rounded-3xl ml-1" + bgColor}>
                <Image className="dr rounded-3xl justify-self-center" src="/img/Gotham small.png" alt="Gotham" width={1210} height={1210} />
              </div>
            </Link>
          </div> */}

        {/* Images recently used */}

        {/* <div className={"grid grid-cols-1  lg:grid-cols-2 pt-2 " + bgColor} id="work">
            <Link href="/work/rxpert">
              <div className="rounded-3xl mr-1">
                <Image className="dr rounded-3xl justify-self-end" src="/img/Rxpert.png" alt="Rxpert " width={600} height={500} />
              </div>
            </Link>
            <Link href="/work/palantir">
              <div className="rounded-3xl ml-1 mt-5 lg:mt-0">
                <Image className="dr rounded-3xl" src="/img/Gotham small.png" alt="Protothon" width={600} height={500} />
              </div>
            </Link>
          </div> */}


      </div>

      {/* <div className={bgColor} id="work">
          <Link href="/work/rxpert">
            <div className="mx-10 md:ml-10 xl:mx-auto max-w-5xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 py-20">
                <div className="pr-0 lg:pr-10 col-span-1 place-content-center">
                  <p className="text-4xl font-bold text-center lg:text-left">Patient case creation made easier.</p>
                  <p className="text-xl font-bold mt-14 text-center lg:text-left">RxPert</p>
                  <p className="mt-3 text-sm text-center lg:text-left">A tool meant to help professors develop patient cases for their curriculums </p>
                </div>
                <div className="col-span-2 flex justify-center">

                  <Image className="dr" src="/img/rxpertCover.png" alt="Rxpert " width={700} height={500} />

                </div>
              </div>
            </div>
          </Link>
        </div> */}





      {/* <div className={bgColor}>
        
          <div className="mx-auto max-w-5xl py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
              <p className="text-4xl font-bold text-black">Keep in touch!</p>
              <div className="flex">
                <div className="flex justify-start items-center py-2">
                  <Link className="hover:underline text-black" href="mailto:kira.b@outlook.com">Email</Link>
                  <ArrowUpRightIcon className="w-5 h-5 ml-2 text-black" />
                </div>
                <div className="flex justify-start items-center py-2 pl-5">
                  <Link className="hover:underline text-black" target="_blank" href="https://www.linkedin.com/in/kira-brodsky-90a11a275/">LinkedIn</Link>
                  <ArrowUpRightIcon className="w-5 h-5 ml-2 text-black" />
                </div>
              </div>
              
            </div>
          </div>
        </div> */}

      {/* <div className={bgColor + " grid justify-center"}>
          <p className="text-[#999999] pb-3">made @ home</p>
        </div> */}

      {/* <Footer /> */}



      {/* OG WEBSITE FRONT */}

      {/* <div className="h-screen grid content-between"> */}
      {/* <NavBar /> */}
      {/* <Cursor/> */}
      {/* <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className=" grid grid-cols-1 justify-items-center"> */}
      {/* <div  className="grid justify-items-center "> */}
      {/* <h1 className={source.className + "text-white"}><strong className={jakarta.className}>Make</strong> what</h1> */}
      {/* <h1>your heart desires</h1> */}
      {/* </div> */}
      {/* <div className="flex place-content-center"> */}
      {/* <h1 className="variant place-content-center">Make what</h1> */}
      {/* <h1 className={source.className}>your <strong className={jakarta.className}>heart </strong>desires</h1> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="grid place-content-center explore"> */}
      {/* <Link href="/work"> */}
      {/* <button className={'rounded-full button text-2xl space-x-2'}> */}
      {/* <div className="flex justify-start items-center px-6 py-2"> */}
      {/* Explore */}
      {/* <ArrowRightIcon className="w-5 h-5 ml-2" /> */}
      {/* </div> */}
      {/* </button> */}
      {/* </Link> */}
      {/* </div> */}
      {/* <Footer /> */}
      {/* </div> */}
    </section >
  )
}

export default function Home() {
  // bg-[#FF7ECC]
  return (
    <main>
      {/* <header className=" pb-10 lg: pb-0"> */}
      {/* <NavBar /> */}
      <Hero />
      {/* </header> */}
      {/* <ProjectCard /> */}
      {/* <ProjectCards projects={projects} /> */}
      {/* <hr /> */}
      {/* <Footer /> */}
    </main>
  )
}
