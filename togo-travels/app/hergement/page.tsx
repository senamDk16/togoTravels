import BaseLayoutPage from "../components/baseLayoutPage";
import Card from "../components/card";
import ContactSection from "../components/contact";
import FooterService from "../components/footer";
import Header from "../components/header";
import Reveal from "../components/reveal";
import { CardProps } from "../enums/cardProprs";



export default function Hergement(){

    const cardProps:CardProps[] = [{
        image: "/hotel.webp",
        title: "chambre salon",
        description: "une chanbre salon calme"
    },
    {
        image: "/hotel.webp",
        title: "chambre salon",
        description: "une chanbre salon calme"
    },
    {
        image: "/hotel.webp",
        title: "chambre salon",
        description: "une chanbre salon calme"
    },
    {
        image: "/hotel.webp",
        title: "chambre salon",
        description: "une chanbre salon calme"
    },
    {
        image: "/hotel.webp",
        title: "chambre salon",
        description: "une chanbre salon calme"
    },
    {
        image: "/hotel.webp",
        title: "chambre salon",
        description: "une chanbre salon calme"
    },
]

    return(
        <div className="font-sans text-gray-900">
            <BaseLayoutPage>
                <section id="contact" className=" py-5 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-2 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4">
                        {
                        
                            cardProps.map((item, key) => (
                                <Reveal key={key}> 
                                    <Card key={key} image={item.image} title={item.title} description={item.description} />
                                </Reveal>
                                
                            ))
                        }
                    </div>
                </div>
                </section>                
            </BaseLayoutPage>
            

            
        </div>
    )
}