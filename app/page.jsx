'use client'
import Container from "./components/Container"
import NavBar from "./components/NavBar"
import ProjectCard from "./components/ProjectCardList"
import { ProjectCards } from "./components/ProjectCardList"
import { DescriptionPill } from "./components/ProjectCardList"
import { jakarta } from "./layout"
import { Footer } from "./components/Footer"
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
// import { useState } from "react"

import Link from "next/link"
import { source } from "./layout"
import { useEffect, useState } from "react"
import { color, motion } from "framer-motion"
import { Cursor } from "./components/Cursor"


const projects = [{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" },
{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" },
{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" }
]

export function Hero() {

  // const[isHovered, setIsHovered] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  const bgColor = "bg-[#E9E8F6]"

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
    <section>
      <div className="">
        {/* <motion.div className="cursor"
        variants={variants}
        animate={cursorVariant} 
        transition={{type:"smooth", duration: 0}}
      ></motion.div> */}


        <div className={"h-screen grid content-between overflow-x-hidden " + bgColor}>
          <NavBar color={"bg-[#f6e8ee]" + bgColor} />
          <div className="mx-auto max-w-5xl lg:pr-44">
            <div>
              <p className="text-center mx-20 lg:mx-0 lg:text-left text-5xl font-bold leading-[3.5rem]">
                Hello! I’m Kira, a junior 👩‍🎓  at the University of Washington studying Informatics. Interface design is my passion 💡
              </p>
            </div>
            <div>
              <div className="flex justify-center lg:justify-start items-center mt-20 py-2">
                <Link className="hover:underline" href="/personal">About me</Link>
                <ArrowUpRightIcon className="w-5 h-5 ml-2" />
              </div>
              <p className="leading-3 text-center lg:text-left">Make what your heart desires.</p>
            </div>
          </div>
          <hr className="landing" />
        </div>

        <div className={bgColor} id="work">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 py-20">
              <div className="pr-0 lg:pr-10 col-span-1 place-content-center">
                <p className="text-4xl font-bold text-center lg:text-left">Patient case creation made easier.</p>
                <p className="text-xl font-bold mt-14 text-center lg:text-left">RxPert</p>
                <p className="mt-3 text-sm text-center lg:text-left">A tool meant to help professors develop patient cases for their curriculums </p>
              </div>
              <div className="col-span-2 flex justify-center">
                <Link href="/work/rxpert">
                  <Image className="dr" src="/img/newHero.png" alt="Rxpert home page" width={700} height={500} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={bgColor}>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 py-20">
              <div className="col-span-2 lg:flex justify-center hidden ">
                <Link href="/work/protothon">
                  <Image className="dr" src="/img/newSFD-go-digital.png" alt="Protothon" width={700} height={500} />
                </Link>
              </div>
              <div className="pl-0 lg:pl-10 col-span-1 place-content-center">
                <p className="text-4xl font-bold text-center lg:text-left">Track and dispatch with ease.</p>
                <p className="text-xl font-bold mt-14 text-center lg:text-left">Protothon</p>
                <p className="mt-3 text-sm text-center lg:text-left">A web app designed for resource and event tracking for the Seattle Fire Department </p>
              </div>
              <div className="col-span-2 flex justify-center lg:hidden">
                <Link href="/work/protothon">
                  <Image className="dr" src="/img/newSFD-go-digital.png" alt="Protothon" width={700} height={500} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={bgColor}>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 py-20">
              <div className="pr-0 lg:pr-10 col-span-1 place-content-center">
                <p className="text-4xl font-bold text-center lg:text-left">Listen. Share. Repeat.</p>
                <p className="text-xl font-bold mt-14 text-center lg:text-left">Jam Sesh</p>
                <p className="mt-3 text-sm text-center lg:text-left">A tool meant to help professors develop patient cases for their curriculums </p>
              </div>
              <div className="col-span-2 flex  justify-center ">
                <Link href="/work/jamsesh">
                  <Image className="dr" src="/img/newJamSesh.png" alt="Jam Sesh" width={700} height={500} />
                </Link>
              </div>
            </div>
          </div>
          <hr className="landing" />
        </div>

        <div className={bgColor}>
          <div className="mx-auto max-w-5xl py-20">
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

        <div className={bgColor + " grid justify-center"}>
          <p className="text-[#999999] pb-3">made @ home</p>
        </div>

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
      </div>
    </section>
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
      {/* <Container> */}
      {/* <ProjectCard /> */}
      {/* <ProjectCards projects={projects} /> */}
      {/* <hr /> */}
      {/* </Container> */}
      {/* <Footer /> */}
    </main>
  )
}
