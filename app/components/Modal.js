import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const MODAL_STYLES = {
    position: 'fixed',
    top: '25%',
    left: '25%',
    transform: 'translate(-5%, -25%)',
    // backgroundColor: '#FFF',
    // padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
}

export default function Modal(props) {

    const { open, children, onClose, color, title, description, github, linkName, url } = props;

    if (!open) return null;

    return (
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-white mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
                </div>
                {children}
                <div className={"p-10 rounded-b-xl flex justify-between " + color}>
                    <div className="grid grid-cols-4 w-[600px] justify-between">
                        <div className="col-span-3">
                            <p className="text-white text-sm ">{description} </p>
                            <p className="text-white text-3xl font-bold mt-2">{title}</p>
                        </div>
                        <div className="content-end justify-items-end -mr-16 ">
                            <div className="flex  items-center ">
                                <Link className="hover:underline text-white text-xl" target="_blank" href={github}>Github</Link>
                                <ArrowUpRightIcon className="w-5 h-5 ml-2 text-white" />
                            </div>
                            <div className="flex  items-center ">
                                <Link className="hover:underline text-white text-xl" target="_blank" href={url}>{linkName}</Link>
                                <ArrowUpRightIcon className="w-5 h-5 ml-2 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="pl-10 grid grid-cols-1 text-white">
                        <p className="text-white">hello</p> 
                        <p className="text-white">hello</p> 
                    </div> */}

                </div>

            </div>
        </div>
    )
}