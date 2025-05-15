import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Méndez",
    role: "CEO, Inversiones Méndez",
    content: "Promotora Benedetti superó nuestras expectativas en el desarrollo de nuestro complejo de oficinas. Profesionales de primera.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Ana Rodríguez",
    role: "Directora, Colegio Los Pinos",
    content: "El trabajo de remodelación de nuestras instalaciones fue impecable. Cumplieron con todos los plazos y presupuestos.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Luis Fernández",
    role: "Propietario, Residencial Vista Hermosa",
    content: "La calidad de construcción de mi vivienda es excepcional. Recomiendo a Benedetti sin dudarlo para cualquier proyecto.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonios de quienes han confiado en nosotros
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center mb-8">
              <img 
                src={testimonials[currentTestimonial].avatar} 
                alt={testimonials[currentTestimonial].name} 
                className="w-16 h-16 rounded-full object-cover mr-6"
              />
              <div>
                <h3 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h3>
                <p className="text-blue-400">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8">
              "{testimonials[currentTestimonial].content}"
            </p>
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-blue-500' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-all"
          >
            &lt;
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-all"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;