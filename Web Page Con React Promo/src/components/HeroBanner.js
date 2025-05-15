import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Construcción" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Promotora I. Benedetti SAS
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl animate-fade-in-up">
          Construyendo sueños, edificando realidades
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
          Conoce más
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;