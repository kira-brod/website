'use client'
import NavBar from "../../components/NavBar"
import Image from "next/image"
// import { Footer } from "@/app/components/Footer"
import { useState, useEffect } from "react"


export default function JamSesh() {

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
        <div className="overflow-x-hidden">
            <div className="">
                <NavBar project={true} scrolled={scrolled} color="bg-white" />
            </div>
            <div className="hero-text grid grid-cols-1 lg:grid-cols-3 mx-auto space-y-8 max-w-6xl pt-8 px-4 pb-4 md:px-0 md:pb-0 mt-2">
                <div className="col-span-2">
                    <div className="grid grid-rows-2">
                        <div className="py-10">
                            <p className="text-6xl">A social platform designed for sharing music with your friends.</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <h2 className="pb-5">About</h2>
                                <p>Jam Sesh is a platform that allows users to simultaneously share their music while uncovering what their friends are listening to. The platform will also allow for music taste analyses between users, showing them who their most compatible and least compatible friend is, music wise.</p>
                            </div>
                            <div className="ml-20">
                                <h2 className="pb-5">Role</h2>
                                <p className="pb-10">Designer</p>
                                <h2 className="pb-5">Dates</h2>
                                <p className="pb-10">Jan 2024 - Feb 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buffer bg-[#320F55] shadow-inner">
                <Image className="shadow-inner" src="/img/Design-buffer.png" alt="design-buffer" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="inspiration mx-auto max-w-6xl px-4 md:px-0  py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="justify-center">
                    <Image className="place-self-center" src="/img/Airbuds.png" alt="airbuds app cover" width={400} height={300} />
                </div>
                <div className="mt-14 md:mt-0 md:ml-5 lg:ml-0 place-content-center">
                    <h2 className="pb-1 text-[#9381FF] text-sm">Context</h2>
                    <h2 className="pb-5">Inspiration</h2>
                    <p className="pb-3">As an avid music lover, I wanted to find a way to share my current song rotation without needing to post it on my story or notes on Instagram. </p>
                    <p className="pb-3">I was always a fan of the Friend Activity tab on Spotify but wanted to design an interface whose focus was on sharing music rather than it being an additional feature.</p>
                    <p>When I was discussing this with my friends, they shows me an app called Airbuds which tracks your music, shares what you are listening to, and shows who else is listening to the same artists as you. After I downloaded the app, I used it a bit but I was not a fan of the UI and felt like that impacted my user experience. I ended up hearing the same feedback from some friends which inspired me to design my own music sharing interface. </p>
                </div>
            </div>
            <div className="buffer bg-[#9381FF] shadow-inner">
                <Image className="shadow-inner" src="/img/Mask.png" alt="design-buffer" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            {/* <div className="inspiration px-32 py-20 grid grid-cols-1 md:grid-cols-1">                
                <div className="mt-14 md:mt-0 md:ml-5 lg:ml-0 place-content-center">
                    <h2 className="pb-1 text-[#9381FF] text-sm">Problem</h2>
                    <h2 className="pb-5">Assesing the Interface</h2>
                    <p className="pb-3">As an avid music lover, I wanted to find a way to share my current song rotation without needing to post it on my story or notes on Instagram. </p>
                    <p className="pb-3">I was always a fan of the Friend Activity tab on Spotify but wanted to design an interface whose focus was on sharing music rather than it being an additional feature.</p>
                    <p>When I was discussing this with my friends, they shows me an app called Airbuds which tracks your music, shares what you are listening to, and shows who else is listening to the same artists as you. After I downloaded the app, I used it a bit but I was not a fan of the UI and felt like that impacted my user experience. I ended up hearing the same feedback from some friends which inspired me to design my own music sharing interface. </p>
                    <div className="grid grid-cols-3 mt-10 justify-items-center">
                        <div>
                            <h2>Notifications</h2>
                        </div>
                        <div>
                            <h2>Notifications</h2>
                        </div>
                        <div>
                            <h2>Notifications</h2>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="design-system mx-auto max-w-6xl px-4 md:px-0  py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="place-content-center">
                    <h2 className="pb-5">Design System</h2>
                    <p className="pb-3">During the process of my past designs, I have come to notice that I like to change the  way the design looks based on how I think it should look like on that display, without consulting what the rest of the design looks like.</p>
                    <p className="pb-3">To ensure that that doesn’t happen this time, I wanted to incorporate a design system that I can follow to make sure I have a consistent design.</p>
                    <p>I found this both very useful but also very challenging to create. When I don’t have a visual for the layout, I find it difficult to figure out what spacing, components, or buttons that I would like to use. I did find myself adding to the components category throughout the design but even then, the system was helpful for keeping me on track with my design.</p>
                </div>
                <div className="justify-center mt-14 md:mt-0 md:ml-5 lg:ml-0">
                    <Image className="place-self-center" src="/img/Design-System.png" alt="design system" width={400} height={300} />
                </div>
            </div>
            <hr className=" jamsesh-hr" />
            <div className="diving-in mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="justify-center">
                    <Image className="place-self-center" src="/img/Main-profile.png" alt="main profile" width={400} height={300} />
                </div>
                <div className="place-content-center mt-14 md:mt-0 md:ml-5 lg:ml-0">
                    <h2 className="pb-5">Diving In</h2>
                    <p className="pb-3">I started off by making three onboarding screens for when a user was to download the app. I enjoyed this part a lot because I got to mix in the graphics that I made to make the interface more interesting.</p>
                    <p>After finishing the onboarding and the login, I moved on to the profile page. This proved to be a challenge and I went through a few redesigns along the way. I struggled with figuring out how to display an individual’s song of the day as well as their shared statistics. In the end, after many iterations, I ended up with a version that I was happy with but could see it changing in the future.</p>
                </div>
            </div>
            <div className=" bg-[#320F55]">
                <div className="mx-auto max-w-6xl px-4 md:px-0">
                    <div className="home py-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
                        <div className="place-content-center mr-10">
                            <h2 className="pb-5 text-white">Home Page Design</h2>
                            <p className="pb-3 text-white">After completing the profile page, I moved on to the general home page where users would be able to see what their friends are listening to. Just as the profile page, this home page saw a lot of redesigns.  </p>
                            <p className="pb-3 text-white">Initially, I wanted to display songs based off their genre with an image of the album and the record peaking out from behind it. I played around with different card designs and settled on one without the vinyl with just the album cover.</p>
                            <p className="text-white">Last minute, I was thinking about the app BeReal and how the pictures are displayed one by one and decided to try that route. After generating the design, I liked it more than I thought and decided to stick with it. Still not sure on how I feel about the stark white navbar so that is subject to change in the future.</p>
                        </div>
                        <div className="justify-center grid grid-cols-2 mt-14 md:mt-0 md:ml-5 lg:ml-0">
                            <div>
                                <p className=" text-white">Original</p>
                                <Image className="place-self-center" src="/img/HomeOG.png" alt="home og" width={300} height={300} />
                            </div>
                            <div>
                                <p className="text-white ">Updated</p>
                                <Image className="place-self-center" src="/img/HomeNew.png" alt="home new" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="diving-in mx-auto max-w-6xl px-4 md:px-0 py-20 grid grid-cols-1 md:grid-cols-2  justify-items-center">
                <div className="justify-center">
                    <Image className="place-self-center" src="/img/Song-posting.png" alt="song posting" width={400} height={300} />
                </div>
                <div className="place-content-center mt-14 md:mt-0 md:ml-5 lg:ml-0">
                    <h2 className="pb-5">Song Interface</h2>
                    <p className="pb-3">For having users select songs, I wanted the interface to be a bit more interactive than just a list of songs, such as on Instagram, where all the songs are clumped together in a long queue. </p>
                    <p className="pb-3">I enjoy when apps have personal recommendations and can find it helpful when the music is split up by genre. This could easily help someone choose what song to post, especially if they can’t figure out what to pick.</p>
                </div>
            </div>
            {/* comment */}
            {/* <Footer /> */}
        </div>
    )
}