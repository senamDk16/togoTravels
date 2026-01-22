import Image from "next/image"


const AboutSection = ()=> (
    <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 relative">
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-10"></div>
                    <Image
                        
                        src="/about.jpeg"
                        width={120}
                        height={120}
                        alt="Culture Togo"
                        className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                    />
                    <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg hidden sm:block">
                        <p className="text-orange-600 font-bold text-xl">10+ ans</p>
                        <p className="text-gray-600 text-xs">D'expertise locale</p>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <h2 className="text-orange-600 font-semibold tracking-widest uppercase text-sm mb-2">Notre Histoire</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Passionnés par la beauté de notre
                        terre</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Togo Travels est né d'une volonté simple : faire découvrir les trésors cachés du Togo. Des
                        montagnes de Kpalimé aux plages de sable fin d'Aného, nous vous accompagnons pour une immersion
                        totale.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <div className="bg-orange-100 p-1 rounded-full text-orange-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span className="font-medium">Guides locaux certifiés</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="bg-orange-100 p-1 rounded-full text-orange-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span className="font-medium">Expériences authentiques et durables</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default AboutSection