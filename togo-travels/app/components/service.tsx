

import services from "@/app/data/serviceData"
import ServiceCard from "./serviceCard"
const ServiceSection = ()=> (
<section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nos Services</h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
)

export default ServiceSection