'use client'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"



export function Cursor() {

    // const[isHovered, setIsHovered] = useState(false);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // const [cursorVariant, setCursorVariant] = useState('default')

    useEffect(() => {

        const mouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16, // size was 32 so want half
            y: mousePosition.y - 16
        }
    }

    return (
        <motion.div className="cursor"
            variants={variants} 
            animate="default"
            transition={{type:"tween", ease: "backOut", duration: 0}}
            ></motion.div>
    )
}


