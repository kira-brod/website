'use client'
import Container from "./components/Container"
import NavBar from "./components/NavBar"
import ProjectCard from "./components/ProjectCardList"
import { ProjectCards } from "./components/ProjectCardList"
import { DescriptionPill } from "./components/ProjectCardList"
import { jakarta } from "./layout"
import { Footer } from "./components/Footer"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
// import { useState } from "react"

import Link from "next/link"
import { source } from "./layout"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Cursor } from "./components/Cursor"


const projects = [{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" },
{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" },
{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" }
]

export function Hero() {

  // const[isHovered, setIsHovered] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');


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
    <div>
      {/* <motion.div className="cursor"
        variants={variants}
        animate={cursorVariant} 
        transition={{type:"smooth", duration: 0}}
      ></motion.div> */}
      <div className="h-screen grid content-between">
        <NavBar />
        {/* <Cursor/> */}
        <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className=" grid grid-cols-1 justify-items-center">
          <div  className="grid justify-items-center ">
            <h1 className={source.className}><strong className={jakarta.className}>Make</strong> what</h1>
            {/* <h1>your heart desires</h1> */}
          </div>
          <div className="flex place-content-center">
            {/* <h1 className="variant place-content-center">Make what</h1> */}
            <h1 className={source.className}>your <strong className={jakarta.className}>heart </strong>desires</h1>
          </div>
        </div>
        <div className="grid place-content-center explore">
          <Link href="/work">
            <button className={'rounded-full button text-2xl space-x-2'}>
              <div className="flex justify-start items-center px-6 py-2">
                Explore
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </div>
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
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
