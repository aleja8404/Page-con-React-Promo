import React, { useState } from 'react';

const services = [
  {
    title: "Construcción Residencial",
    description: "Diseño y construcción de viviendas unifamiliares y multifamiliares con los más altos estándares de calidad.",
    icon: "🏠"
  },
  {
    title: "Desarrollo Comercial",
    description: "Edificios comerciales, oficinas y espacios corporativos adaptados a tus necesidades empresariales.",
    icon: "🏢"
  },
  {
    title: "Remodelaciones",
    description: "Transformamos espacios existentes para darles nueva vida y funcionalidad.",
    icon: "🔨"
  },
  {
    title: "Consultoría",
    description: "Asesoramiento experto en todos los aspectos de tu proyecto de construcción.",
    icon: "📋"
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para cada etapa de tu proyecto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`p-6 rounded-xl transition-all duration-300 ${activeService === index ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{services[activeService].title}</h3>
          <p className="text-lg text-gray-600">{services[activeService].description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;