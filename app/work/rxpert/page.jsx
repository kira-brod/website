'use client'
import NavBar from "@/app/components/NavBar"
import Container from "@/app/components/Container"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/app/components/Footer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import EmblaCarousel from "@/app/components/EmblaCarousel"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

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
        <main className="overflow-x-hidden bg-[#E7EFF6]">
            <div className={"h-screen grid content-between overflow-x-hidden "}>
                <div className="">
                    <NavBar project={true} scrolled={scrolled} color="bg-[#E7EFF6]" />
                </div>

                <div className="mx-10 lg:mx-auto mt-14 lg:mt-0 max-w-5xl lg:pr-44">
                    <div>
                        <p className="leading-3  mb-3">Designer | Four members | April 2024 - Present | Figma</p>
                        <p className=" text-5xl font-bold leading-[3.5rem]">
                            A digital tool designed to aid professors in generating patient cases.
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-4">
                        <p className=" col-span-2">RxPert is a tool meant for professors to use for patient case generating.  A usual patient case takes between one to two hours to create but with the help of RxPert, professors are able to put in a few key pieces of information and have their case be generated for them.</p>
                    </div>
                </div>
                <hr className="landing" />
            </div>

            <div className="py-20 mx-10 lg:mx-auto max-w-5xl lg:pr-44">
                <p className="leading-3 font-bold  mb-3">Problem</p>
                <p className=" lg:mx-0  text-3xl font-bold leading-[2.5rem]">
                    Current pharmacy professors are spending hours on creating cases or simply reusing old ones because they don&apos;t have the time.
                </p>
                <p className="mt-5 ">Originally, I was introduced to the idea of a patient simulator by three students who were looking for a UX designer to design the tool. This would&apos;ve been meant for students who wanted practice with patient interaction. I jumped on the idea because I believed in the purpose of the tool, as well as getting the opportunity to create something new. After doing some informal surveying and talking to professors, we found that there was more of a market for a patient case generator, thus switching courses with our product.</p>
            </div>

            <div className="diving-in py-20 grid grid-cols-1 mx-10 lg:mx-auto max-w-5xl  md:px-0 md:grid-cols-3 ">
                <div className="grid content-center  mr-0 md:mr-10 col-span-1">
                    <div>
                        <h2 className="pb-5 text-3xl mr-0 lg:mr-10">Goals for Generator</h2>
                    </div>
                </div>
                <div className="place-content-center mt-14 md:mt-0 mr-0 md:ml-10 lg:mr-10 col-span-2">
                    <h2 className="pb-5 text-3xl">Case Generation</h2>
                    <p className="pb-12">Professors will be able to generate on-paper cases based on their selected topic, learning objectives, and level. </p>
                    <h2 className="pb-5 text-3xl">Editable Display</h2>
                    <p className="pb-12">Intuitive flow to edit the case, whether it be through chat or the case editor for specific parts.</p>
                    <h2 className="pb-5 text-3xl">Integration</h2>
                    <p className="">For the future, we are interested in making cases interactable where students can talk with the patient in the case.</p>
                </div>
            </div>

            <div className="mx-10 lg:mx-auto max-w-5xl py-20 ">
                <div className="lg:pr-44 pr-0">
                    <p className="mb-5  font-bold">User Testing Findings</p>
                    <p className="mb-5">After ensuring that there was interesting in the product, we jumped right into designing it. Our goal was to have a functioning prototype that the professors could use and then give feedback on. We are actively user testing and listed below are some of the main concerns at the moment.</p>
                    <p className="mb-5">We initially had the chat and form be on the left side for the case generating, where the professor could pick whether they wanted to use the form, or chat with the AI directly to create the case.</p>
                    <p className="text-3xl font-bold mb-5">We quickly noticed that the professors had not realized they were able to switch tabs.</p>
                    <p className="mb-5">After doing some research, we realized that other digital tools don&apos;t give there users different options of doing one task. We decided that we would stick with the form for case generating and chat for case editing after the case has been generated.</p>
                </div>
                <div className="grid grid-cols-1 mt-20 lg:grid-cols-3">
                    <div className="grid justify-items-center lg:justify-items-start -ml-5 col-span-1">
                        <Link target="_blank" href="https://leetcare.notion.site/01-Dr-Suchy-11f12020111d80e99be2d07cacb59fd3">
                            <Image className="place-self-center" src="/img/Suchy.png" alt="main profile" width={600} height={700} />
                        </Link>
                        {/* <p className="justify-center ml-5 mr-32">This is an example of one of the user interviews we have conducted, click to read more</p> */}
                    </div>
                    <div className="col-span-2 lg:ml-16 place-content-center">
                        <p className="mb-5">Feel free to click on the Dr. Suchy user testing file for an example of one of our testing sessions.</p>
                        <ul className="list-disc ml-4">
                            <li>Cases take 1-2 hours to create</li>
                            <li>30 min if editing a pre-existing case</li>
                            <li>Uncertainty with relying on AI for racial/cultural competency as well as integrating diverse scenarios</li>
                            <li>Form can be overwhelming but generating through chat may feel like a lot of typing</li>
                            <li>Stick with form generation and use chat for editing</li>
                            <li>Questions for the case are basic, tune model </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-10 lg:mx-auto max-w-5xl py-20">
                <h2 className="pb-3 text-3xl">User Flow</h2>
                <p className="pb-10 mr-0 lg:mr-60">It was important for us to understand how a professor would navigate through our product and creating a user flow allowed us to connect the different interfaces together smoothly.</p>
                <Image className=" drop-shadow-2xl" src="/img/flow.png" alt="design system" width={1100} height={1100} />
            </div>

            <div className="mx-10 lg:mx-auto max-w-5xl py-20">
                <h2 className="text-3xl">Lo-Fi and System Design</h2>
                <div className="grid grid-cols-1 lg:grid-cols-9 place-content-start">
                    <div className="col-span-5 -ml-5">
                        <Image src="/img/lofi.png" alt="lofi" width={600} height={300} />
                    </div>
                    <div className="col-span-4 -ml-5">
                        <Image src="/img/DS-rxpert.png" alt="design system" width={500} height={300} />
                    </div>
                </div>
            </div>

            <div className="mx-10 lg:mx-auto max-w-5xl py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-2 -ml-5">
                        <Image src="/img/dash.png" alt="dashboard rxpert" width={600} height={300} />
                    </div>
                    <div className="col-span-1 mt-10 lg:mt-0 place-content-center">
                        <p className="text-3xl mb-5 font-bold">Access everything you need from one screen.</p>
                        <p>Whether you want to generate, edit, or view a case, the dashboard provides quick and easy access for all the desired tasks.</p>
                    </div>
                </div>
            </div>

            <div className="mx-10 lg:mx-auto max-w-5xl py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-2 flex -ml-5 lg:hidden justify-end">
                        <Image src="/img/generator.png" alt="dashboard" width={600} height={300} />
                    </div>
                    <div className="mt-10 col-span-1 place-content-center">
                        <p className="text-3xl mb-5 font-bold">Fill out the form and generate your case.</p>
                        <p>Input the case information and  have it be available to use within a few seconds.</p>
                    </div>
                    <div className="col-span-2 -ml-5 lg:flex justify-end hidden">
                        <Image src="/img/generator.png" alt="dashboard" width={600} height={300} />
                    </div>
                </div>
            </div>

            <div className="mx-10 lg:mx-auto max-w-5xl py-20">
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
            </div>



            <div className="py-20 mx-10 lg:mx-auto max-w-5xl">
                <p className="text-3xl  font-bold">Edit your case with the help of AI.</p>
                <p>Click the icon in the corner after the case is generated and edit it till you are happy with the result.</p>
                <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 -ml-5">
                    <Image src="/img/chat1.png" alt="dashboard" width={600} height={300} />
                    <Image src="/img/chat2.png" alt="dashboard" width={600} height={300} />
                </div>
            </div>





            <div className="diving-in py-20 grid grid-cols-1 mx-10  lg:mx-auto max-w-5xl md:px-0 md:grid-cols-2 justify-items-center">
                <div className="grid content-center mr-0 md:mr-14">
                    <div className="">
                        <h2 className="pb-5 text-3xl">Future with RxPert</h2>
                        <p className="pb-3">We are looking forward to release RxPert out to the public within the next couple months.</p>
                        <p className="mt-10">We are currently refining the user experience of creating and editing the case. We want to ensure that it is intuitive for professors.</p>
                    </div>
                </div>
                <div className="place-content-center mt-14 md:mt-0 mr-0 lg:mr-10">
                    <h2 className="pb-5 text-3xl">Users/User Testing</h2>
                    <p className="pb-3">After some discussion with one of the pharmacy professors at UW, they offered to test run RxPert for Fall Quarter 2024. This will be our first official user and we are excited to see RxPert come to life.</p>
                    <p className="pb-12">After finals season, we will be sending out surveys to professors to track how they edit cases. We will also be providing them with a case to edit, being able to see what changes the most often versus what doesn&apos;t change at all.</p>
                    <h2 className="pb-5 text-3xl">Optimization</h2>
                    <p className="">It is always important to keep testing your design and updating it for better usability. As new interfaces will continue to roll out, we will continue to test them and work the feedback into our design.</p>
                </div>
            </div>

            <div className="py-20 mx-10 lg:mx-auto max-w-5xl lg:pr-44">
                <p className="leading-3  mb-3">Personal Reflection</p>
                <p className="text-3xl font-bold leading-[2.5rem]">
                    Taking time to understand the user, not only about how they navigate the platform, but who they are as a person.
                </p>
                <p className="mt-5">One of our biggest struggles for this project has been user testing. The professors’ priority is their class and they often have little time to give elsewhere. From the limited user testing that has been conducted, we often find ourselves needing to make decisions on the user experience by way of extrapolating based on what was said by the professor. By getting to know the professors outside of their classroom selves, I believe that that would help us gain more insight on their thought processes since introspection can often be flawed.</p>
            </div>

            <div className="">
                <hr className="landing" />
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

            <div className={" grid justify-center"}>
                <p className="text-[#999999] pb-3">made @ home</p>
            </div>



















            {/* <div className="hero-text grid grid-cols-1 lg:grid-cols-3 mt-2 mx-auto space-y-8 max-w-6xl pt-8 px-4 pb-4 md:px-0 md:pb-0">
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
            </div> */}
            {/* mx-auto space-y-8 max-w-6xl pt-8 px-4 pb-4 md:px-0 md:pb-0 */}
            {/* <div className="inspiration  py-20 grid grid-cols-1  bg-[#0B1338]">
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
            </div> */}
            {/* <div className="inspiration mx-auto space-y-8 max-w-6xl px-4  md:px-0 md:pb-0 pb-20 grid grid-cols-1">
                <div className="text-center py-20 grid justify-center">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Process</h2>
                    <h2 className="pb-5">User Flow</h2>
                    <Image className=" drop-shadow-2xl" src="/img/flow.png" alt="design system" width={1100} height={1100} />
                </div>
            </div>
            <hr className=" rxpert-hr" />
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
            </div> */}
            {/* <div className="py-20">
                <div className="design-system mx-auto  max-w-6xl  px-4 pb-4 md:px-0 md:pb-0 grid grid-cols-1  md:grid-cols-2 justify-items-center">
                    <div className="justify-center mt-14 md:mt-0 md:ml-5 lg:ml-0">
                        <Image className="place-self-center" src="/img/chat-og.png" alt="main profile" width={300} height={500} />
                        <Image className="place-self-center" src="/img/chat.png" alt="design system" width={700} height={700} />
                    </div>
                    <div className="place-content-center ml-0 md:ml-10 mt-10 md:mt-0">
                        <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2>
                        <h2 className="pb-5">Chat Screen</h2>
                        <p className="pb-3">Our design started off with developing a chat screen where two thirds of the area would be taken up by that chat and the other third will have information about the patient, the rubric, and the grading based off that rubric.</p>
                        <p>Our initial design had the rubric design be more reminiscent of an actual rubric but we were having trouble figuring out how to do that and decided to go with Markdown instead. Comparing the two design ideas, I think that this one turned out sleeker.</p>
                    </div>
                </div>
            </div> */}
            {/* <div className="py-20 bg-[#DDE5EC]">
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
            </div> */}
            {/* <div className="py-20">
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
            </div> */}
            {/* <div className="inspiration py-20 grid grid-cols-1 justify-items-center bg-[#0B1338]">
                <div className="mt-14 md:mt-0 md:ml-5 lg:ml-0 place-content-center">
                    <div className="mx-auto max-w-6xl px-4 pb-4 md:px-0 md:pb-0">
                        <h2 className="pb-1 text-[#8DA7BE] text-sm">Revised Goals</h2>
                        <div className="mx-auto max-w-6xl px-4 pb-4 md:px-0 md:pb-0">
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
            </div> */}
            {/* <div className="inspiration mx-auto max-w-6xl px-4 md:px-0  py-20 grid grid-cols-1 justify-items-center">
                <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2>
                <h2 className="pb-3">Profile Page</h2>
                <p className="pb-5 md:px-24 text-center">Initially we had  a different profile design where one’s profile would link to a new page. After some discussion we redesigned the profile to have it be a pop-up and when a user wanted to edit their profile, then they would be directed to a new page.</p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Image className="place-self-center" src="/img/portfolio1.png" alt="main profile" width={700} height={700} />
                    <Image className="place-self-center" src="/img/portfolio2.png" alt="main profile" width={700} height={700} />
                </div>
            </div>
            <div className="py-20">
                <Image className="" src="/img/homebuffer.png" alt="design-buffer homepage" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div> */}
            {/* <div className="design-system mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1  md:grid-cols-2 justify-items-center">
                <div className="justify-center md:ml-5 lg:ml-0">
                    <Image className="place-self-center" src="/img/chat-og.png" alt="main profile" width={300} height={500} />
                    <Image className="place-self-center" src="/img/dashboard.png" alt="design system" width={700} height={700} />
                </div>
                <div className="place-content-center mt-10 md:mt-0 ml-0 md:ml-10">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2>
                    <h2 className="pb-5">Dashboard</h2>
                    <p className="pb-3">Our design started off with developing  a chat screen where two thirds of the area would be taken up by that chat and the other third will have information about the patient, the rubric, and the grading based off that rubric.</p>
                    <p>Our initial design had the rubric design be more reminiscent of an actual rubric but we were having trouble figuring out how to do that and decided to go with Markdown instead. Comparing the two design ideas, I think that this one turned out sleeker.</p>
                </div>
            </div> */}
            {/* <div className="bg-[#DDE5EC]">
                <div className="inspiration mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1 justify-items-center">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2>
                    <h2 className="pb-3">Create Case Page</h2>
                    <p className="pb-5 md:px-24 text-center">We wanted to ensure that the Create Case page had a sleek and clean design that was easy to follow with instructions for the users. Once the user has filled out all the necessary information, their case would be generated on the right.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Image className="place-self-center" src="/img/generate-case.png" alt="main profile" width={700} height={700} />
                        <Image className="place-self-center" src="/img/generated.png" alt="main profile" width={700} height={700} />
                    </div>
                </div>
            </div> */}
            {/* <div className="design-system  mx-auto max-w-6xl px-4 md:px-0  py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="place-content-center ml-0 md:mr-10">
                    <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2>
                    <h2 className="pb-5">Edit Generated Case</h2>
                    <p className="pb-3">We wanted the generated cases to be editable for professors, allowing them to tweak any details to fit their goal.</p>
                    <p>For the coding side of things, it was communicated to me that it would be easier to edit if the different parts of the case were broken up, hence the cards for every section.</p>
                </div>
                <div className="justify-center mt-14 md:mt-0 md:ml-5 lg:ml-0">
                    <Image className="place-self-center" src="/img/editCase.png" alt="edit case page" width={700} height={700} />
                </div>
            </div> */}
            {/* <div className="bg-[#DDE5EC]"> */}
            {/* <div className="inspiration py-20 grid grid-cols-1  mx-auto max-w-6xl px-4 md:px-0 justify-items-center"> */}
            {/* <h2 className="pb-1 text-[#8DA7BE] text-sm">Design</h2> */}
            {/* <h2 className="pb-3">RxPert Tutorial</h2> */}
            {/* <p className="pb-10 md:px-24 text-center">After two of our team members conducted user testing with one of the University of Washington’s pharmacy professors, they noticed that the professor struggled to figure out what to do after the case was generated. After a team discussion we decided that having a tutorial would be beneficial for out users.</p> */}
            {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="diving-in py-20 grid grid-cols-1   mx-auto max-w-6xl px-4 md:px-0 md:grid-cols-2 justify-items-center"> */}
            {/* <div className="grid content-center mr-0 md:mr-10">
                    <div>
                        <h2 className="pb-1 text-[#8DA7BE] text-sm">Reflection</h2>
                        <h2 className="pb-5">Future with RxPert</h2>
                        <p className="pb-3">We are looking forward to release RxPert out to the public within the next couple months.</p>
                    </div>
                </div> */}
            {/* <div className="place-content-center mt-14 md:mt-0 mr-0 md:ml-10 lg:mr-10">
                    <h2 className="pb-5">Users</h2>
                    <p className="pb-12">After some discussion with one of the pharmacy professors at UW, they offered to test run RxPert for Fall Quarter 2024. This will be our first official user and we are excited to see RxPert come to life.</p>
                    <h2 className="pb-5">Optimization</h2>
                    <p className="pb-12">It is always important to keep testing your design and updating it for better usability. As new interfaces will continue to roll out, we will continue to test them and work the feedback into our design.</p>
                </div> */}
            {/* </div> */}
            {/* <Footer /> */}
        </main >
    )
}