'use client'

import React, { useEffect, useRef, useState } from "react"


const Reveal = ({children}:{children:React.ReactElement})=>{
    const ref = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(()=>{
        if(!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setShow(true),
            { threshold: 0.3}
        )

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])


    return(
        <div
            ref = {ref}
            className={`transition-all duration-700 ${show? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {children}
        </div>
    )
} 


export default Reveal