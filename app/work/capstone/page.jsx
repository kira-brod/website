"use client"
import PasswordProtected from "../../../components/PasswordProtected";
import Image from "next/image"
import Link from "next/link"
// import { Footer } from "@/app/components/Footer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowUpRightIcon, ChatBubbleBottomCenterIcon, ChatBubbleOvalLeftEllipsisIcon, FaceSmileIcon, ListBulletIcon } from "@heroicons/react/24/outline"
import NavBar from "../../../components/NavBar";

export default function Capstone() {

    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <main className="bg-[#0B1338]">
                <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1338]">
                    <NavBar project={true} scrolled={scrolled} color="bg-[#0B1338]" />
                </div>

                <div className="pt-20 px-8 md:px-32 lg:px-64">
                    <p className="text-white text-xl text-center z-10">Problem</p>
                    <p className="text-white text-3xl font-bold text-center z-10 mt-5">
                        How might we support Amazonians through proactive measures so that an unexpected hardware failure can be avoided or mitigated.
                    </p>
                    <p className="text-white text-center text-sm italic mt-5">
                        Goal: Offer Amazonians a chance to take preemptive measures if problems are self-serviceable or navigate them to the proper help
                    </p>
                </div>

                <div className="mt-28 px-8 md:px-32 lg:px-64">
                    <p className="text-white text-xl text-center z-10">Process</p>
                    <ol className="list-decimal list-outside text-white mt-5 pl-6">
                        <li className="mt-5">
                            We started off by understanding our problem space and the resources that we had at hand. Going in to the project, we knew we had access to a variety of computer telemetry data and had an initial idea of using that data to predict an issue a computer is having.
                        </li>
                        <li className="mt-5">
                            We then conducted research with two user groups, IT support engineers and Amazonians, both through surveys and interviews. We found that Amazonians felt that a lot of their time was being wasted troubleshooting and not knowing whether an issue is self-serviceable or not. IT support engineers were frustrated because they had to meet handling quota, people coming in with issues that were self-serviceable, and needing to context gather on the spot.
                        </li>
                        <li className="mt-5">
                            After our research, we began narrowing in on an idea of a prediction model that would take user device data and predict what is happening to their computer. This would mean that whenever a user is experiencing an issue, they would be able to press a button and run the prediction model. After the prediction comes out, users will be given a root cause prediction with articles to follow if the problem is self-serviceable or who to go to for help if the issue is not self-serviceable. We also were leaning towards a kiosk as our form factor which would host this interaction.
                        </li>
                        <li className="mt-5">
                            We then had a meeting with our stakeholders and recognized that a Slack form factor may be more appropriate for our solution, as well as attempting to make a Slack bot that would send proactive messages regarding a potential issue a user may have.
                        </li>
                    </ol>
                </div>

                <div className="mt-28 px-8 md:px-32 lg:px-64 grid grid-cols-2">
                    <div>
                        <p className="text-white text-xl text-center z-10">My Contributions/Learnings</p>
                        <ul className="list-decimal list-outside text-white mt-5 pl-6">
                            <li className="mt-5">
                                Help the discovery and scoping of our project through drafting user surveys and interview scripts, to then helping conduct interviews
                            </li>
                            <li className="mt-5">
                                Ideation regarding product form - creating digital mocks of what our product can look like on different form factors, mainly slack.
                            </li>
                            <li className="mt-5">
                                Navigate the team through completing capstone assignments, making sure that they meet the rubric.
                            </li>
                            <li className="mt-5">
                                Project direction and validation should come from testing
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white text-xl text-center z-10">Team Contributions</p>
                        <ul className="list-decimal list-outside text-white mt-5 pl-6">
                            <li className="mt-5">
                                Scoping the project skill wise to ensure everything was doable based on the skill set we have as a team.
                            </li>
                            <li className="mt-5">
                                Completing Capstone assignments
                            </li>
                            <li className="mt-5">
                                Meetings and presentations with stakeholders regarding capstone progress.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-28  px-8 md:px-32 lg:px-64">
                    <p className="text-white text-xl text-center z-10">Takeaways</p>
                    <p className="text-white text-3xl font-bold text-center z-10 mt-5">
                        Validation is important throughout your whole design journey and prescribing a form factor too early may impede on your progress.
                    </p>
                </div>

                <div className="mt-28 px-8 md:px-32 lg:px-64">
                    <p className="text-white text-xl text-center z-10">Next Steps</p>
                    <ol className="list-decimal list-outside text-white mt-5 pl-6">
                        <li className="mt-5">
                            Refine the user experience of our Slack MVP through user testing.
                        </li>
                        <li className="mt-5">
                            Connect the front end with the back end and model to have a working product.
                        </li>
                    </ol>
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

            </main>
        </div>
    )
}