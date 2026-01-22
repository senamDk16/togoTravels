import BaseLayoutPage from "../components/baseLayoutPage";
import Card from "../components/card";
import { CardProps } from "../enums/cardProprs";


export default function Restorant() {

    const cardProps: CardProps[] = [{
        image: "/food.webp",
        title: "chambre salon",
        description: "une chanbre salon calme"
    }]

    return (
        <BaseLayoutPage>
            <section id="contact" className=" py-5 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-2 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4">
                        {
                            cardProps.map((item, key) => (
                                <Card key={key} image={item.image} title={item.title} description={item.description} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </BaseLayoutPage>
    )
}