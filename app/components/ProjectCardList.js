import Image from "next/image"
import Link from "next/link";

export function DescriptionPill(props) {

    const text = props.text;

    return (
        <div className="inline-block justify-start items-center outline outline-1 px-4 py-2 space-x-2 outline-gray-300 rounded-full">
            <p>{text}</p>
        </div>
    )
}
export default function ProjectCard(props) {
    // Use flex col and flex row

    // const { title, description, image, subtext, link } = props;
    // ${index % 2 != 0 ? "mr-6" : "mr-0"}

    return (
        // <div className="snap-center">
        //     <Link href={link}>
        //         <Image src={image} alt={title} width={400} height={300} />
        //     </Link>
        //     <p className="mt-3 project-title">{title}</p>
        //     <p className="subtext mt-1">{subtext}</p>
        //     <p className="my-5">{description}</p>
        //     {/* <hr className="projects-hr mb-5" /> */}
        // </div>
        <div className="snap-center">
            <Link href="work/jamsesh">
                {/* <Image src="/img/Main-profile.png" alt="sdfsf" width={400} height={300} /> */}
            </Link>
            <p className="mt-3 project-title">sfsdfssdf</p>
            <p className="subtext mt-1">sdfsdf</p>
            <p className="my-5">sdfsd sdf sd fsdfsdf sdf sdfslds dosdfhsdf sofis </p>
            {/* <hr className="projects-hr mb-5" /> */}
        </div>
    )
}

// export default function ProjectCard(props) {
//     // Use flex col and flex row

//     const { title, description, image } = props;
//     // ${index % 2 != 0 ? "mr-6" : "mr-0"}

//     return (
//         <div className='grid grid-cols-1 mb-6 mr-3 ml-3'>
//             <div className="justify-between">
//                 <div className="inline-block">
//                     <h2 className="text-5xl inline-block text-[#989595] font-semibold mb-3 text-x">{title}</h2>
//                 </div>
//                 {/* <h2 className="text-5xl inline-block text-gray-400 font-semibold mb-3">{title}</h2> */}
//                 <div className="grid grid-cols-3 inline-block text-xs">
//                     <DescriptionPill text={"protothon"} />
//                     <DescriptionPill text={"team"} />
//                 </div>
//             </div>
//             <Image className="rounded-xl shadow-xl" src={image} alt={title} width={900} height={900} />
//             <p className="mt-4 text-black leading-5 mb-5">{description}</p>
//             <hr />
//         </div>
//     )
// }

export function ProjectCards(props) {

    const projectArray = props.projects;


    const projectCardsArray = projectArray.map((project, index) => {
        return <ProjectCard key={index} image={project.image} title={project.title} description={project.description} subtext={project.subtext} link={project.link} />
    })

    return (
        <div className="flex h-screen space-x-10 snap-x overflow-x-scroll">
            {/* {projectCardsArray} */}
            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
            <Image className="place-self-center" src="/img/jamsesh.png" alt="main profile" width={600} height={300} />
            <Image className="place-self-center" src="/img/Hero.png" alt="main profile" width={600} height={300} />
            <Image className="place-self-center" src="/img/SFD-go-digital.png" alt="main profile" width={600} height={300} />
        </div>
    )
}