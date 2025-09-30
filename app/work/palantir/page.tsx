"use client"
import PasswordProtected from "../../../components/PasswordProtected";
import Image from "next/image"
import Link from "next/link"
// import { Footer } from "@/app/components/Footer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowUpRightIcon, ChatBubbleBottomCenterIcon, ChatBubbleOvalLeftEllipsisIcon, FaceSmileIcon, ListBulletIcon } from "@heroicons/react/24/outline"
import NavBar from "../../../components/NavBar";



export default function ProjectsPage() {

  const [scrolled, setScrolled] = useState(0);
      const [slide1, setSlide1] = useState(true);
      const [slide2, setSlide2] = useState(false);
      const [slide3, setSlide3] = useState(false);
  
      const bgcolor = "#0F2263"
  
      const scrollToTarget = () => {
          const targetElement = document.getElementById('conclusion');
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' }); 
          }
      };
  
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
    <PasswordProtected>
      <main className="overflow-x-hidden bg-[#0B1338] ">
                  <div className="">
                      <NavBar project={true} scrolled={scrolled} color="bg-[#0B1338]" />
                  </div>
                  <div className={" grid content-between overflow-x-hidden max-w-7xl xl:mx-auto "}>
                      <div className="grid grid-cols-1 justify-items-center mt-32">
                          <p className="text-5xl font-bold text-white mb-2  z-10">Palantir</p>
                          <p className="text-white mb-5 z-10 text-sm">June - September 2025</p>
                          <p className="text-white text-xl mx-80 text-center z-10">Purpose of capturing a new user and solidifying a clear use case for the overflight feature on Palantir&apos;s satellite product.</p>
                          {/* <Image className="-mt-24 " src="/img/hero rxpert.png" alt="dashboard" width={1200} height={1200} /> */}
                          <button onClick={scrollToTarget} className="bg-[#524DD9] text-white px-4 py-2 mt-10 rounded-lg">Jump to Conclusion</button>
                      </div>
      
                      <div className="grid grid-cols-2 mt-28 justify-items-center place-items-center bg-[#524DD9] py-16">
                          <div>
                              <p className="text-[#c9c8fe] font-bold text-xl">Definitions</p>
                              <p className="text-white mt-2" >Core vocab used throughout the project</p>
                          </div>
      
                          <div className="space-y-10 mr-36">
                              <div>
                                  <p className=" text-xl font-bold text-[#c9c8fe]">Overflight</p>
                                  <p className="text-white mt-2">The flight of an aircraft, in this case a satellite, over a certain location on the ground.</p>
                              </div>
                              <div>
                                  <p className=" text-xl font-bold text-[#c9c8fe]">Space Support Request (SSR)</p>
                                  <p className="text-white mt-2">A formal request, usually submitted by a field commander, for a specific space-based capability or effect of a satellite when the current space support is insufficient.</p>
                              </div>
                              <div>
                                  <p className=" text-xl font-bold text-[#c9c8fe]">Confliction</p>
                                  <p className="text-white mt-2">When a request is submitted with the same location, time frame, and sensor capability as an existing request.</p>
                              </div>
                          </div>
      
                      </div>
      
                      <div className="grid grid-cols-1 justify-items-center mt-28 ">
                          <p className="text-white text-center text-2xl font-bold">Workflow</p>
                          <Image className="mt-5 " src="/img/Workflow.png" alt="dashboard" width={1000} height={500} />
                          <div className="grid grid-cols-2 justify-items-center  mt-20">
                              <div className="ml-36">
                                  <p className="text-lg text-white font-bold">Deconfliction</p>
                                  <p className="mt-5 text-white">Deconfliction is happening in the tactical units (there is no communication to the coordinating body about what space support requests are assigned to what satellite)</p>
                              </div>
                              <div className="mr-36">
                                  <p className="text-lg text-white font-bold">Lack of Alerting</p>
                                  <p className="mt-5 text-white">Consistent checks from the coordinating body to make sure the satellites are on track (wasting the coordinating body time)</p>
                              </div>
                          </div>
                      </div>
      
      
      
                      <div className=" mt-28 bg-[#524DD9] py-16">
                          <p className="text-white text-xl mx-96 text-center z-10">How does our product fit into this?</p>
                          <p className="text-white text-3xl font-bold mx-64 text-center z-10 mt-5">By building out a workflow for the coordinating body, we have the potential of gaining tactical units as a user for our overflight feature given the coordinating body&apos;s satisfaction.</p>
                      </div>
      
                      <div className="grid grid-cols-1 justify-items-center mt-28 ">
                          <p className="text-white text-center text-2xl font-bold">Phases of Adoption</p>
                          <div className="grid grid-cols-3 justify-items-center  mt-20 mx-36 space-x-7">
                              <div className="">
                                  <p className="text-lg text-white font-bold">Phase 1</p>
                                  <p className="mt-5 text-white">Platform for receiving space support requests exists within Palantir.</p>
                              </div>
                              <div className="">
                                  <p className="text-lg text-white font-bold">Phase 2</p>
                                  <p className="mt-5 text-white">Space support request triaging and alerting exists in one place (diagrammed below).</p>
                              </div>
                              <div className="">
                                  <p className="text-lg text-white font-bold">Phase 3</p>
                                  <p className="mt-5 text-white">Satellite product owns overflights and has recruited tactical units as users.</p>
                              </div>
                          </div>
                      </div>
      
      
                      <div className="mt-28 grid grid-cols-1 justify-items-center ">
                          <p className="text-white text-center text-2xl font-bold">Main flow</p>
                          <p className="text-white text-center mt-1">Consists of the triaging and assignment of SSRs</p>
                          <Image className="mt-5 " src="/img/main flow.png" alt="dashboard" width={1000} height={500} />
                      </div>
      
                      <div className="mt-28 grid grid-cols-1 justify-items-center ">
                          <p className="text-white text-center text-2xl font-bold">Deconfliction</p>
                          <p className="text-white text-center mt-1">Consists of identifying what SSRs to assign to a satellite</p>
                          <Image className="mt-5 " src="/img/deconfliction.png" alt="dashboard" width={1000} height={500} />
                      </div>
      
                      <div className="mt-28 grid grid-cols-1 justify-items-center ">
                          <p className="text-white text-center text-2xl font-bold">Alerting</p>
                          <p className="text-white text-center mt-1">CConsists of alerting for poor overflights</p>
                          <Image className="mt-5 " src="/img/alerting.png" alt="dashboard" width={1000} height={500} />
                      </div>
      
                      <div className=" mt-28 mb-10" id="conclusion">
                          <p className="text-white text-xl mx-96 text-center z-10">Current Project State</p>
                          <p className="text-white text-3xl font-bold mx-64 text-center z-10 mt-5">This project was a vision mock of what can become of Palantir&apos;s satellite product in the future. It was successful in getting the team to start working on implementing SSRs within the product.</p>
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
                  </div>
              </main >
    </PasswordProtected>
  );
}

// 'use client'
// import React, { useState } from 'react';
// import Link from "next/link"

// export default function Login() {
//     const [text, setText] = useState('');
//     const [submitted, setSubmitted] = useState('');
//     const [state, setState] = useState('hidden')

//     const password = "123hello"



//     const handleChange = (event) => {
//         setText(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Submitted text:', text);
//         setSubmitted(text);

//         if (text == password) {
//             setState("");
//         }

//         // You can send this data to an API or perform other actions
//     };

//     return (
//         <div className='mx-auto max-w-5xl'>
//             <h1 className="flex justify-center mt-20">Enter Password</h1>

//             <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center mt-10'>
//                 <textarea
//                     id="myTextarea"
//                     value={text}
//                     onChange={handleChange}
//                     rows="3" // Optional: specify default height
//                     cols="50" // Optional: specify default width
//                     className='border'
//                 />
//                 <button type="submit" className='mt-5' >Submit</button>
//             </form>

//             <p>{submitted}</p>

//             <Link href="/work/palantir/projects" className = {state}>
//                 <p>Link to project</p>
//             </Link>
//         </div>


//     )
// }