import NavBar from "../../components/NavBar"
import { ProjectCards } from "../../components/ProjectCardList"
import Image from "next/image"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Footer } from "../../comnpmponents/Footer"
import ScrollSection from "../../components/ScrollSection"
import { Cursor } from "../../components/Cursor"

const projects = [{ title: "SFD Go Digital", description: "Design a platform for the Seattle Fire Department to easily track incidents and dispatch the proper resources.", image: "/img/SFD-go-digital.png", subtext: "Protothon", link: "/work/protothon" },
{ title: "SFD Go Digital", description: "Design a platform for the Seattle Fire Department to easily track incidents and dispatch the proper resources.", image: "/img/SFD-go-digital.png", subtext: "Protothon", link: "/work/protothon" },
{ title: "SFD Go Digital", description: "Design a platform for the Seattle Fire Department to easily track incidents and dispatch the proper resources.", image: "/img/SFD-go-digital.png", subtext: "Protothon", link: "/work/protothon" },
{ title: "SFD Go Digital", description: "Design a platform for the Seattle Fire Department to easily track incidents and dispatch the proper resources.", image: "/img/SFD-go-digital.png", subtext: "Protothon", link: "/work/protothon" }
    // { title: "Jam Sesh", description: "A social platform designed for sharing music with your friends.", image: "/img/JamSesh.png", subtext: "Personal", link: "/work/jamsesh" },
    // { title: "RxPert", description: "AI chat bot patient meant to serve as practice for pharmacy students.", image: "/img/Hero.png", subtext: "Startup", link: "/work/rxpert" },
    // { title: "RxPert", description: "AI chat bot patient meant to serve as practice for pharmacy students.", image: "/img/Hero.png", subtext: "Startup", link: "/work/rxpert" },
]

// const projects = [{ title: "SFD Go Digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", image: "/img/SFD-go-digital.png" }]

function Projects() {

    return (
        // <div className="flex justify-end ">

        <div className="">
            <div className="px-2">
                <ProjectCards projects={projects} />
            </div>

        </div>
    )
    {/* <div className="mt-32 md:col-span-2">
                <Container>
                    <h2 className="mb-1 strong">Updates</h2>
                    <hr className="mb-5 projects-hr" />

                    <div className="grid grid-rows-3 ">
                        <div>
                            <div className="grid grid-cols-3">
                                <h2 className="mb-5 col-span-1">06.11</h2>
                                <p className="mb-5 col-span-2">Began working on a website layout for a charity organization with Caffeinated Design Studio .</p>
                            </div>

                        </div>

                        <div>
                            <hr className="mb-3" />
                            <div className="grid grid-cols-3">
                                <h2 className="mb-5 col-span-1">06.03</h2>
                                <p className="mb-5 col-span-2">Accepted the position of Director of Design for UX@UW.</p>
                            </div>

                        </div>

                        <div>
                            <hr className="mb-3" />
                            <div className="grid grid-cols-3">
                                <h2 className="mb-5 col-span-1">04.24</h2>
                                <p className="mb-5 col-span-2">Accepted UX internship position with Caffeinated Design Studio.</p>
                            </div>

                        </div>
                    </div>

                    <h2 className="mb-1 mt-5 strong">Current Jam</h2>
                    <hr className="mb-5 projects-hr" />
                    <Link href="https://open.spotify.com/track/1QLkBt3jkRxjKUfdvAwIJr?si=6af037dd80004200" className="grid grid-cols-8">
                        <div className="col-span-2">
                            <p className=" project-title">{"I'm the Best"}</p>
                            <p className="subtext mt-1">Little Big </p>
                        </div>
                        <div className="col-span-6">
                            <ArrowUpRightIcon className="h-6 w-6" />
                        </div>
                    </Link>
                </Container>

            </div> */}


    // </div>


}

export default function Work() {
    return (
        <main>
            <div className="grid content-between overflow-hidden">
                <div className="fixed top-0 z-50">
                    <NavBar />
                </div>
                {/* <Cursor/> */}
                {/* <Projects /> */}
                {/* <Container>
                    <div className="flex space-x-10 scroll-pl-60 snap-x overflow-x-auto projects-scroll">
                        <Link href="work/jamsesh" className="flex-shrink-0">
                            <div className="flex-shrink-0 grid justify-items-center">
                                <Image className=" snap-center" src="/img/jamsesh.png" alt="main profile" width={500} height={300} />
                                <h2 className="project-title mt-5 ">Jam Sesh</h2>
                                <p className="mt-2">App to share music with your friends.</p>
                            </div>
                        </Link>
                        <Link href="work/jamsesh" className="flex-shrink-0">
                            <div className="flex-shrink-0 grid justify-items-center">
                                <Image className=" snap-center" src="/img/Hero.png" alt="main profile" width={500} height={300} />
                                <h2 className="project-title mt-5 ">Jam Sesh</h2>
                                <p className="mt-2">App to share music with your friends.</p>
                            </div>
                        </Link>
                        <Link href="work/jamsesh" className="flex-shrink-0">
                            <div className="flex-shrink-0 grid justify-items-center">
                                <Image className=" snap-center" src="/img/SFD-go-digital.png" alt="main profile" width={500} height={300} />
                                <h2 className="project-title mt-5 ">Jam Sesh</h2>
                                <p className="mt-2">App to share music with your friends.</p>
                            </div>
                        </Link>
                    </div>
                </Container> */}
                <ScrollSection />
                <div className="fixed bottom-0 z-50">
                    <Footer />
                </div>
            </div >
        </main >
    )
}