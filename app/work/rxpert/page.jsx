'use client'
import NavBar from "@/app/components/NavBar"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/app/components/Footer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import EmblaCarousel from "@/app/components/EmblaCarousel"

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const SLIDES = [{ image: "/img/tutorial1.png" },
{ image: "/img/tutorial2.png" },
{ image: "/img/tutorial3.png" },
{ image: "/img/tutorial4.png" },
{ image: "/img/tutorial5.png" }]


export default function Rxpert() {

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
        <main className="overflow-x-hidden">
            <div className="">
                <NavBar project={true} scrolled={scrolled} />
            </div>
            <div className="hero-text grid grid-cols-1 lg:grid-cols-3 mt-2 mx-auto space-y-8 max-w-6xl pt-8 px-4 pb-4 md:px-0 md:pb-0">
                <div className="col-span-2">
                    <div className="grid grid-rows-2">
                        <div className="py-10">
                            <p className="text-6xl">A digital tool designed to aid professors in generating patient cases.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <h2 className="pb-5">About</h2>
                                <p>RxPert is a tool meant for professors to use for patient case generating.  A usual patient case takes between three to four hours to create but with the help of RxPert, professors are able to put in a few key pieces of information and have their case be generated for them.</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="ml-0 md:ml-20">
                                    <h2 className="pb-5">Role</h2>
                                    <p className="pb-10">Designer</p>
                                    <h2 className="pb-5">Dates</h2>
                                    <p className="pb-10">Apr 2024 - Present</p>
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
                <Image className="shadow-inner" src="/img/rxpertBanner.png" alt="design-buffer" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="py-20">
                <div className="inspiration mx-auto max-w-6xl  px-4 pb-4 md:px-0 md:pb-0 grid grid-cols-1 justify-items-center">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Context</h2>
                    <h2 className="pb-5">Problem</h2>
                    <p className="pb-3 md:px-24 text-center">Current pharmacy students at the University of Washington have struggled to pass their capstones, which are in-person tests with patient actors simulating a pharmacy setting. Since the only time students were able to mimic the pharmacy setting was during the capstones, they were not used to leading the interactions. Students were also given on-paper cases but only had a limited amount.</p>
                </div>
            </div>
            {/* mx-auto space-y-8 max-w-6xl pt-8 px-4 pb-4 md:px-0 md:pb-0 */}
            <div className="inspiration  py-20 grid grid-cols-1  bg-[#0B1338]">
                <div className="mt-14 md:mt-0 md:ml-5 lg:ml-0 place-content-center">
                    <div className="mx-auto max-w-6xl pt-8 px-4 pb-4 md:px-0 md:pb-0">
                        <h2 className="pb-1 text-[#8DA7BE] text-sm">Goals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center  ">
                            <div className="mr-16">
                                <h2 className="pb-5 text-white">Practice</h2>
                                <p className="text-white">Students are able to have simulated patient practice that mimics their capstones via chat. This will allow them to feel more prepared for the in-person capstones.</p>
                            </div>
                            <div className="mr-8">
                                <h2 className="pb-5 mt-10 md:mt-0 text-white" >Case Generation</h2>
                                <p className="text-white">Students will be able to generate on-paper cases based on their selected topic, learning objectives, and level. This will allow them to not be reliant on the limited number of cases given by professors.</p>
                            </div>
                            <div className="ml-0 md:ml-8">
                                <h2 className="pb-5 mt-10 md:mt-0 text-white" >Integration</h2>
                                <p className="text-white">Based on the generated case, students can turn their patient to life and interact with them via chat. This allows the students to target topics that they are struggling with by getting to interact with the patient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inspiration mx-auto space-y-8 max-w-6xl px-4  md:px-0 md:pb-0 pb-20 grid grid-cols-1">
                <div className="text-center py-20 grid justify-center">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Process</h2>
                    <h2 className="pb-5">User Flow</h2>
                    <Image className=" drop-shadow-2xl" src="/img/flow.png" alt="design system" width={1100} height={1100} />
                </div>
            </div>
            {/* <hr className=" rxpert-hr" /> */}
            <div className="bg-[#DDE5EC] py-20">
                <div className="diving-in grid grid-cols-1 mx-auto  max-w-6xl px-4 pb-4 md:px-0 md:pb-0  md:grid-cols-2 justify-items-center">
                    <div className="place-content-center  mr-0 mb-10 md:mb-0 md:mr-10 lg:mr-0">
                        <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2>
                        <h2 className="pb-5">Design System</h2>
                        <p className="pb-3">Before starting off any design, it is important to have a design system. For this project, there initially was no design system and the pages were being developed based on one another.</p>
                        <p>As the designing continued, we realized that it would be beneficial to have a design system, both for designing and implementing the design, allowing the front-end developer to not have to style each individual item.</p>
                    </div>
                    <div className="grid justify-items-center">
                        <Link href="https://leetcare.notion.site/02-Brandon-San-4939f286ec054b908a7f702016cea7f5">
                            <Image className="place-self-center" src="/img/DS-rxpert.png" alt="main profile" width={400} height={400} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-20">
                <div className="design-system mx-auto  max-w-6xl  px-4 pb-4 md:px-0 md:pb-0 grid grid-cols-1  md:grid-cols-2 justify-items-center">
                    <div className="justify-center mt-14 md:mt-0 md:ml-5 lg:ml-0">
                        {/* <Image className="place-self-center" src="/img/chat-og.png" alt="main profile" width={300} height={500} /> */}
                        <Image className="place-self-center" src="/img/chat.png" alt="design system" width={700} height={700} />
                    </div>
                    <div className="place-content-center ml-0 md:ml-10 mt-10 md:mt-0">
                        <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2>
                        <h2 className="pb-5">Chat Screen</h2>
                        <p className="pb-3">Our design started off with developing a chat screen where two thirds of the area would be taken up by that chat and the other third will have information about the patient, the rubric, and the grading based off that rubric.</p>
                        <p>Our initial design had the rubric design be more reminiscent of an actual rubric but we were having trouble figuring out how to do that and decided to go with Markdown instead. Comparing the two design ideas, I think that this one turned out sleeker.</p>
                    </div>
                </div>
            </div>
            <div className="py-20 bg-[#DDE5EC]">
                <div className="diving-in  py-20 grid mx-auto space-y-8 max-w-6xl pt-8 px-4 pb-4 md:px-0 md:pb-0 grid-cols-1 md:grid-cols-2 justify-items-center">
                    <div className="place-content-center mb-10 md:mb-0 mr-0 md:mr-10 ">
                        <h2 className="pb-5">User Testing</h2>
                        <p className="pb-3">When conducting user testing on this design, we figured out that the users mistook the evaluate button, meant to be clicked after the interaction was finished, as an send button.</p>
                        <p>No other specific design feedback was given, the rest was focused on bugs found during the testing as well as the order in which the case information was presented.</p>
                    </div>
                    <div className="grid justify-items-center">
                        <Link href="https://leetcare.notion.site/02-Brandon-San-4939f286ec054b908a7f702016cea7f5">
                            <Image className="place-self-center" src="/img/testing.png" alt="main profile" width={700} height={700} />
                        </Link>
                        <p className="justify-center">Click to read more</p>
                    </div>
                </div>
            </div>
            <div className="py-20">
                <div className="mx-auto max-w-6xl px-4 md:px-0 md:pb-0">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Context</h2>
                    <div className="design-system grid grid-cols-1 md:grid-cols-2 r">
                        <div className="">
                            <h2 className="pb-5 ">Change in Target and Concerns</h2>
                            <p className="">After two of our members visited a conference, there were a couple of professors who were really interested in the case generator and encouraged us to pursue that route. After having a whole team meeting, we agreed to shift gears and focus on the case generator with plans of including the chat bot in the future.  Some concerns that have risen from this is how often would professors need to make new cases. For this, two of my other team members will be interviewing a few professors to gather data.</p>
                        </div>
                        <div className="ml-0 md:ml-10">
                            <h2 className="pb-5 ">Similar Tools</h2>
                            <p className="">When doing research for this product, we stumbled upon YesChat Medical Case Generator. When comparing the two generators, ours goes more in depth about the patient and their history, while YesChat has more of an investigation on the patient which would not allow for the student to work through the case. ChatGPT also has a Case-Based  MCQ Generator but this one only has a brief description of the patient.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inspiration py-20 grid grid-cols-1 justify-items-center bg-[#0B1338]">
                <div className="mt-14 md:mt-0 md:ml-5 lg:ml-0 place-content-center">
                    <div className="mx-auto max-w-6xl px-4 pb-4 md:px-0 md:pb-0">
                        <h2 className="pb-1 text-[#8DA7BE] text-sm">Revised Goals</h2>
                        {/* <div className="mx-auto max-w-6xl px-4 pb-4 md:px-0 md:pb-0"> */}
                        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center ">
                            <div className="mr-16">
                                <h2 className="pb-5 text-white">Case Generation</h2>
                                <p className="text-white">Professors will be able to generate on-paper cases based on their selected topic, learning objectives, and level. This will allow professors to allot less time to case creation, and more time to curriculum development.</p>
                            </div>
                            <div className="mr-8">
                                <h2 className="pb-5 mt-10 md:mt-0 text-white" >Updating Display</h2>
                                <p className="text-white">For a better visual on the case editor page, our end goal is to have a display of the case on the right side of the screen and have it refresh as the professor is making edits.</p>
                            </div>
                            <div className="ml-0 md:ml-8">
                                <h2 className="pb-5 mt-10 md:mt-0 text-white" >Integration</h2>
                                <p className="text-white">For the future, we are still interested in making cases interactable. This would involve two different profiles, student and professor, where students will have digital access to professor cases and be able to interact with them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inspiration mx-auto max-w-6xl px-4 md:px-0  py-20 grid grid-cols-1 justify-items-center">
                {/* <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2> */}
                <h2 className="pb-3">Profile Page</h2>
                <p className="pb-5 md:px-24 text-center">Initially we had  a different profile design where one’s profile would link to a new page. After some discussion we redesigned the profile to have it be a pop-up and when a user wanted to edit their profile, then they would be directed to a new page.</p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Image className="place-self-center" src="/img/portfolio1.png" alt="main profile" width={700} height={700} />
                    <Image className="place-self-center" src="/img/portfolio2.png" alt="main profile" width={700} height={700} />
                </div>
            </div>
            <div className="py-20">
                <Image className="" src="/img/homebuffer.png" alt="design-buffer homepage" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="design-system mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1  md:grid-cols-2 justify-items-center">
                <div className="justify-center md:ml-5 lg:ml-0">
                    {/* <Image className="place-self-center" src="/img/chat-og.png" alt="main profile" width={300} height={500} /> */}
                    <Image className="place-self-center" src="/img/dashboard.png" alt="design system" width={700} height={700} />
                </div>
                <div className="place-content-center mt-10 md:mt-0 ml-0 md:ml-10">
                    {/* <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2> */}
                    <h2 className="pb-5">Dashboard</h2>
                    <p className="pb-3">Our design started off with developing  a chat screen where two thirds of the area would be taken up by that chat and the other third will have information about the patient, the rubric, and the grading based off that rubric.</p>
                    <p>Our initial design had the rubric design be more reminiscent of an actual rubric but we were having trouble figuring out how to do that and decided to go with Markdown instead. Comparing the two design ideas, I think that this one turned out sleeker.</p>
                </div>
            </div>
            <div className="bg-[#DDE5EC]">
                <div className="inspiration mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1 justify-items-center">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2>
                    <h2 className="pb-3">Create Case Page</h2>
                    <p className="pb-5 md:px-24 text-center">We wanted to ensure that the Create Case page had a sleek and clean design that was easy to follow with instructions for the users. Once the user has filled out all the necessary information, their case would be generated on the right.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Image className="place-self-center" src="/img/generate-case.png" alt="main profile" width={700} height={700} />
                        <Image className="place-self-center" src="/img/generated.png" alt="main profile" width={700} height={700} />
                    </div>
                </div>
            </div>
            <div className="design-system  mx-auto max-w-6xl px-4 md:px-0  py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="place-content-center ml-0 md:mr-10">
                    {/* <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2> */}
                    <h2 className="pb-5">Edit Generated Case</h2>
                    <p className="pb-3">We wanted the generated cases to be editable for professors, allowing them to tweak any details to fit their goal.</p>
                    <p>For the coding side of things, it was communicated to me that it would be easier to edit if the different parts of the case were broken up, hence the cards for every section.</p>
                </div>
                <div className="justify-center mt-14 md:mt-0 md:ml-5 lg:ml-0">
                    <Image className="place-self-center" src="/img/editCase.png" alt="edit case page" width={700} height={700} />
                </div>
            </div>
            <div className="bg-[#DDE5EC]">
                <div className="inspiration py-20 grid grid-cols-1  mx-auto max-w-6xl px-4 md:px-0 justify-items-center">
                    {/* <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2> */}
                    <h2 className="pb-3">RxPert Tutorial</h2>
                    <p className="pb-10 md:px-24 text-center">After two of our team members conducted user testing with one of the University of Washington’s pharmacy professors, they noticed that the professor struggled to figure out what to do after the case was generated. After a team discussion we decided that having a tutorial would be beneficial for out users.</p>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>
            </div>
            <div className="diving-in py-20 grid grid-cols-1   mx-auto max-w-6xl px-4 md:px-0 md:grid-cols-2 justify-items-center">
                <div className="grid content-center mr-0 md:mr-10">
                    <div>
                        <h2 className="pb-1 text-[#8DA7BE] text-sm">Reflection</h2>
                        <h2 className="pb-5">Future with RxPert</h2>
                        <p className="pb-3">We are looking forward to release RxPert out to the public within the next couple months.</p>
                    </div>
                </div>
                <div className="place-content-center mt-14 md:mt-0 mr-0 md:ml-10 lg:mr-10">
                    <h2 className="pb-5">Users</h2>
                    <p className="pb-12">After some discussion with one of the pharmacy professors at UW, they offered to test run RxPert for Fall Quarter 2024. This will be our first official user and we are excited to see RxPert come to life.</p>
                    <h2 className="pb-5">Optimization</h2>
                    <p className="pb-12">It is always important to keep testing your design and updating it for better usability. As new interfaces will continue to roll out, we will continue to test them and work the feedback into our design.</p>
                </div>
            </div>
            <Footer />
        </main >
    )
}