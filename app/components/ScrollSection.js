'use client'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { react, useEffect, useRef } from "react"
import Link from "next/link";
import Image from "next/image";

function ScrollSection() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-200vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true
            }

        })

        return () => {
            pin.kill()
        }

    }, [])

    return (
        <section className="scroll-section-outer">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section">
                        <Link href="work/rxpert" className="">
                            <div className="grid justify-items-center">
                                <Image className="" src="/img/Hero.png" alt="main profile" width={500} height={300} />
                                <h2 className="project-title mt-5 ">RxPert</h2>
                                <p className="mt-2">Patient case generator for professors</p>
                            </div>
                        </Link>
                    </div>
                    <div className="scroll-section">
                        <Link href="work/jamsesh" className="">
                            <div className="grid justify-items-center">
                                <Image className="" src="/img/jamsesh.png" alt="main profile" width={500} height={300} />
                                <h2 className="project-title mt-5 ">Jam Sesh</h2>
                                <p className="mt-2">App to share music with your friends.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="scroll-section">
                        <Link href="work/protothon" className="">
                            <div className=" grid justify-items-center">
                                <Image className="" src="/img/SFD-go-digital.png" alt="main profile" width={500} height={300} />
                                <h2 className="project-title mt-5 ">Protothon</h2>
                                <p className="mt-2">Web app for the Seattle Fire Department</p>
                            </div>
                        </Link>
                    </div>
                    <div className="scroll-section">
                        {/* <Link href="work/protothon" className=""> */}
                            <div className=" grid justify-items-center">
                                <Image className="" src="/img/Project4.png" alt="main profile" width={500} height={300} />
                                <h2 className="project-title mt-5 ">Project 4</h2>
                                <p className="mt-2">Soon to come</p>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollSection