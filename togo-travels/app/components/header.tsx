'use client'

interface ItemMenu{
    url: string,
    label:string
}

import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSectionContact = () => {
    const section = document.getElementById("contact")

    section?.scrollIntoView({ behavior: "smooth" })
  }

    const itemMenu:ItemMenu[] = [
        {
            url : "/",
            label: "Accieul"
        },
        {
            url: "/hergement",
            label: "Hergement"
        },
        {
            url: "/resto",
            label: "Restarant"
        },
        {
            url: "/game",
            label: "Loisir"
        }
    ]

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="shrink-0 flex items-center">
                        <Image
                            src={"/logo.jpeg"}
                            alt="logo togo travel"
                            width={60}
                            height={60}
                            
                        />
                        {/* <span className="text-orange-600 font-extrabold text-xl tracking-tighter">
                            TOGO <span className="text-gray-800">TRAVELS</span>
                        </span> */}
                    </div>

                    <nav className="hidden md:flex space-x-8 items-center">
                        {
                            itemMenu.map((item) => (
                                <a key={item.label} href={item.url} className="text-gray-600 hover:text-orange-600 font-medium transition-colors">{item.label}</a>
                            ))
                        }
                        <button className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-md"
                            onClick={scrollToSectionContact}
                        >
                            Réserver
                        </button>
                    </nav>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
                        {
                            itemMenu.map((item) => (
                                <a key={item.label} href={item.url} className="block text-gray-600 hover:text-orange-600 font-medium">{item.label}</a>
                            ))
                        }
                </div>
            )}
        </header>
    )

}

export default Header;