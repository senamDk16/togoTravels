"use client"
import Image from "next/image";

const HeroSection = () => {

  const scrollToSectionService = () => {
    const section = document.getElementById("services")

    section?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSectionContact = () => {
    const section = document.getElementById("contact")

    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (<section id="home" className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <Image src="/bannier.webp" width={140} height={140} alt="image font" className="w-full h-full object-cover" />
      {/* <img src="./images/bannier.webp" className="w-full h-full object-cover" alt="Bannière Togo" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Explorez le <span className="text-orange-500">Togo</span> autrement.
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
          Togo Travels vous ouvre les portes d’un pays riche en paysages, en saveurs et en loisirs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transform hover:-translate-y-1 transition-all shadow-lg"
            onClick={scrollToSectionService}
          >
            Découvrir nos offres
          </button>
          <button className="px-8 py-4 bg-white/10 text-white border border-white/30 backdrop-blur-md rounded-lg font-bold hover:bg-white/20 transition-all"
            onClick={scrollToSectionContact}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  </section>)
}

export default HeroSection;