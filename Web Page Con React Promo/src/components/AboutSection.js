import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h2>
            <p className="text-lg text-gray-600 mb-6">
              Promotora I. Benedetti SAS es una empresa líder en el sector de la construcción, con más de 20 años de experiencia en el desarrollo de proyectos inmobiliarios de alta calidad.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha posicionado como referentes en el mercado.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 px-6 py-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800">+100</h3>
                <p className="text-blue-600">Proyectos completados</p>
              </div>
              <div className="bg-green-100 px-6 py-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800">20+</h3>
                <p className="text-green-600">Años de experiencia</p>
              </div>
              <div className="bg-orange-100 px-6 py-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800">50+</h3>
                <p className="text-orange-600">Clientes satisfechos</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Oficinas Benedetti" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">Nuestras instalaciones</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;