import Image from "next/image"
import { CardProps } from "../enums/cardProprs"


const Card = ({image, title, description}:CardProps)=>(
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={title}
                    width={120}
                    height={120}
                />
                {/* <img
                    src={image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={title}
                /> */}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
)

export default Card