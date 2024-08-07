import NavBar from "@/app/components/NavBar"
import Image from "next/image"

export default function Jamsesh1() {
    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <div>
                        <h1 className="md:fixed bottom-32 -left-20 project-name-page inline-block md:-rotate-90 mx-10 md:mx-0 mt-20 mb-2 md:mb-0 md:mt-0">JAM SESH</h1>
                        {/* <div className="grid grid-rows-8">
                        <hr className="row-start-2 row-end-6 rotate-90 projects-hr" />
                    </div> */}
                        <hr className="d-none md:fixed w-[31rem] md:-rotate-90 bottom-[17rem] -left-36  projects-hr mb-5 md:mb-0 mx-10 md:mx-0" />
                        <p className="md:fixed bottom-6 left-32 md:w-60 lg:w-80 mx-10 md:mx-0 mb-10 md:mb-0">Design a platform that allows users to simultaneously share their music while uncovering what their friends are listening to. The platform will also allow for music taste analyses between users, showing them who their most compatible and least compatible friend is, music wise.</p>
                    </div>
                </div>
                <div className="lg:-ml-8 lg:mr-8 mx-10 md:mx-0">
                    <h2 className="mb-5 strong">Onboarding</h2>
                    <div className="grid grid-cols-3 mb-10">
                        <Image className="drop-shadow-md" src="/img/Onboarding1.png" alt="onboarding 1" width={200} height={300} />
                        <Image className="drop-shadow-md" src="/img/Onboarding2.png" alt="onboarding 2" width={200} height={300} />
                        <Image className="drop-shadow-md" src="/img/Onboarding3.png" alt="onboarding 3" width={200} height={300} />
                    </div>
                    <h2 className="mb-5 strong">Login</h2>
                    <div className="grid grid-cols-3 mb-10">
                        <Image className="drop-shadow-md" src="/img/LogSign.png" alt="log in/sign up" width={200} height={300} />
                        <Image className="drop-shadow-md" src="/img/Login.png" alt="log in" width={200} height={300} />
                        <Image className="drop-shadow-md" src="/img/Signup.png" alt="sign up" width={200} height={300} />
                    </div>
                    <h2 className="mb-5 strong">Profile</h2>
                    <div className="grid grid-cols-3 mb-10">
                        <Image src="/img/ProfileGIF2.gif" alt="log in/sign up" width={200} height={300} />
                        <Image className="drop-shadow-md" src="/img/Profile1.png" alt="log in" width={200} height={300} />
                        <Image className="drop-shadow-md" src="/img/Profile2.png" alt="sign up" width={200} height={300} />
                    </div>
                </div>
                {/* <h1 className="project-name-page inline-block -rotate-90 text-end">JAM SESH</h1> */}
                {/* <div className="grid grid-cols-8 h-svh">
                <div className="col-span-1">
                    <h1 className="project-name -rotate-90">SFD GO DIGITAL</h1>
                    <hr className="rotate-90"/>
                </div>
                <div className="col-span-7 scroll-auto">
                    <p>HELOOOOO</p>
                    

                </div>
            </div> */}
            </div>
        </div>
    )
}