'use client'

import React, { useState } from "react"


const ContactSection = () => {

    const [prenom, setPrenom] = useState("")
    const [nom, setNom ] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")



    const onSubmit = async ()=>{
        console.log("on click")
        const data = {
            nom: nom,
            prenom: prenom,
            email: email,
            message: message
        }
        const res = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })



         console.log(res.json())
    }

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">Nous contacter</h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Prêt pour l'aventure ?</h3>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Que vous ayez une question sur nos circuits ou besoin d'un voyage sur mesure, notre équipe est là pour vous répondre.</p>
                </div>

                <div className="bg-gray-900 rounded-[2rem] overflow-hidden  flex flex-col lg:flex-row border border-gray-800">

                    <div className="lg:w-2/5 bg-orange-600 p-8 sm:p-12 text-white flex flex-col justify-between">
                        <div>
                            <h4 className="text-2xl font-bold mb-6">Informations</h4>
                            <p className="text-orange-100 mb-10 leading-relaxed">Passez nous voir dans nos bureaux ou contactez-nous via ces canaux officiels.</p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-orange-200 text-xs uppercase font-bold tracking-wider">Appelez-nous</p>
                                        <p className="text-lg font-medium">+228 92 10 04 71</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-orange-200 text-xs uppercase font-bold tracking-wider">Localisation</p>
                                        <p className="text-lg font-medium">Boulevard du 13 Janvier, Lomé</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-orange-200 text-xs uppercase font-bold tracking-wider">Email</p>
                                        <p className="text-lg font-medium">togotravelsb@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex gap-4 mt-12">
                            <a href="#" className="bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all text-white">FB</a>
                            <a href="#" className="bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all text-white">IG</a>
                            <a href="#" className="bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all text-white">TW</a>
                        </div> */}
                    </div>

                    <div className="lg:w-3/5 p-8 sm:p-12 bg-white">
                        <form action="#" className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-700 mb-2">Votre Prénom</label>
                                    <input type="text" placeholder="Koffi" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                                        onChange={(e)=> setPrenom(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-700 mb-2">Votre Nom</label>
                                    <input type="text" placeholder="Mensah" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                                        onChange={(e)=> setNom(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700 mb-2">Adresse Email</label>
                                <input type="email" placeholder="koffi@exemple.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                                    onChange={(e)=> setEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea rows={5} placeholder="Comment pouvons-nous vous aider ?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all resize-none"
                                    onChange={(e)=> setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            <button className="w-full bg-orange-600 text-white font-extrabold py-5 rounded-xl hover:bg-orange-700 shadow-lg shadow-orange-200 transform active:scale-[0.98] transition-all"
                                onClick={onSubmit}
                                type={"button"}
                            >
                                Envoyer ma demande
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection