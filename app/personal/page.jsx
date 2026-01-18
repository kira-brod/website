'use client'
import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Modal from "../../components/Modal";

export default function Personal() {

    const [scrolled, setScrolled] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const handleClicktoOpen = () => {
        setIsOpen(true);
        console.log(isOpen);
    };

    const handleToClose = () => {
        setIsOpen(false);
    }


    const open = () => {
        setIsOpen1(true);

    };

    const handleToClose1 = () => {
        setIsOpen1(false);
    }

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
        <div className="bg-[#0B1338] ">
            <div className={" grid content-between overflow-x-hidden "}>
                <div className="">
                    <NavBar project={true} scrolled={scrolled} color="bg-[#0B1338] " />
                </div>

                <div className="  mt-20  mx-10">
                    <div className="mx-10 mt-44 lg:mx-auto lg:mt-0 max-w-5xl ">
                        <div className="grid grid-cols-1 md:ml-0 lg:ml-10 xl:ml-0 md:grid-cols-2">
                            <div className="content-end">
                                <Image src="/img/nyc.jpg" className="rounded-lg" alt="under construction sign" width={400} height={400} />
                            </div>
                            <div className="">
                                <div>
                                    <p className=" text-5xl mt-10 font-bold leading-[3.5rem] text-white">
                                        More Me!
                                    </p>
                                </div>
                                <div className="mt-10 mb-20 grid grid-cols-1 lg:grid-cols-4">
                                    <div className="col-span-4">
                                        <p className="mb-5 text-white">My name is Kira and I am currently a senior at the University of Washington, studying informatics. In my spare time, I serve as the president of the biggest UX club on campus (UX@UW), hosting events every Thursday! I am also a Figma Campus Leader, which involves hosting Figma related events for students.</p>
                                        <p className="mb-5 text-white">My passion for product design leaks through to other areas in my life! I love all things arts and crafts. From crocheting and knitting to studying abroad in London for art history, I am a sucker for a good piece of art.</p>
                                        <p className="text-white">I also go bouldering :)</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white"><strong>Design:</strong> Figma, Adobe XD, Adobe Illustrator, Miro, Blender</p>
                                    <p className="text-white"><strong>Programming:</strong> Proficiency in R, basics in JavaScript, CSS, HTML, and Java</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr className="landing" /> */}

            </div>


            <div className=" mx-10   mb-20  max-w-5xl ">

                <Modal open={isOpen} onClose={handleToClose} color={"bg-[#350090]"} title={"WINFO (Women in Informatics) Hackathon ‘25"} description={"Design and Front-end | Three members | Jan 25th"} github={"https://github.com/laurakhot/Hackathon-wi25"} linkName={"Video"} url={"https://drive.google.com/file/d/1id3jnPgUOMXm6BNQX9rwDgT-p8w8CxFl/view?usp=drive_link"}>
                    <Image src="/img/HackathonSlide.png" className="rounded-t-xl" alt="alt vision slide" width={750} height={750} />
                </Modal>

                <Modal open={isOpen1} onClose={handleToClose1} color={"bg-[#725B51]"} title={"INFO 340: Client-side Development"} description={"Design, Front-end, Filter/Upload features | Four members | SP '24"} github={"https://github.com/info340b-sp24/project-color-analysis"} linkName={"Website"} url={"https://info340-ced4a.web.app/"}>
                    <Image src="/img/info340.png" className="rounded-t-xl" alt="alt vision slide" width={750} height={750} />
                </Modal>


                <p className="text-3xl  mt-16  font-bold text-white">Additional Projects</p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 ">
                    <button onClick={handleClicktoOpen}>
                        <div className="bg-[#BD9BF9] h-80 rounded-lg p-7 pt-20 content-end">
                            {/* <Image src="/img/altvisionlogo.png" className="ml-7 mb-7 " alt="alt vision logo" width={250} height={250} /> */}
                            <div className="justify-items-start border-b pb-5 border-black mb-10 ">
                                <p className="font-bold text-4xl">alt vision</p>
                                <p>Accessibility made easy.</p>
                            </div>
                            <div className="justify-items-end">
                                <div className=" bg-black p-2 rounded-md ">
                                    <ArrowUpRightIcon className="w-6 h-6 bg-black text-white" />
                                </div>
                            </div>
                        </div>
                    </button>
                    <button onClick={open}>
                        <div className="bg-[#dbae96] h-80 rounded-lg p-7 content-end">
                            {/* <Image src="/img/ColorAura.png" className="ml-7 mb-7 " alt="under construction sign" width={250} height={250} /> */}
                            <div className="justify-items-start border-b pb-5  border-black mb-10 ">
                                <p className="font-bold text-4xl">ColorAura</p>
                                <p>Products that work for you.</p>
                            </div>
                            <div className="justify-items-end">
                                <div className=" bg-black p-2 rounded-md ">
                                    <ArrowUpRightIcon className="w-6 h-6 bg-black text-white" />
                                </div>
                            </div>
                        </div>
                    </button>


                </div>
                {/* <hr className="card"/> */}
            </div>

            {/* <div className="grid h-screen place-content-center grid-cols-1">
                <Image src="/img/construction.png" className="place-self-center" alt="under construction sign" width={400} height={400} />

            </div> */}
            {/* <div className="grid grid-cols-3 pt-20 gap-3 mx-3">
                <div className="col-span-2 bg-purple-300 rounded-md">
                    <p>hi</p>
                    <p>hi</p>
                    <p>hi</p>
                </div>
                <div className="col-span-1 bg-pink-400 rounded-md">

                </div>
            </div> */}

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
                            <div className="flex justify-start items-center py-2 pl-5">
                                <Link className="hover:underline text-white" target="_blank" href="/Resume Updated.pdf">Resume</Link>
                                <ArrowUpRightIcon className="w-5 h-5 ml-2 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <hr className="landing" />
                <div className="mx-auto md:ml-10 xl:mx-auto max-w-5xl py-16">
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
                            <Image className="dr" src="/img/icon.png" alt="Rxpert home page" width={200} height={200} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={" grid justify-center"}>
                <p className="text-[#999999] pb-3">made @ home</p>
            </div> */}
        </div >
    )
}