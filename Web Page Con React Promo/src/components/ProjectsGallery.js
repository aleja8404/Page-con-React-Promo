import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Residencial Las Acacias",
    type: "Residencial",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Centro Comercial Plaza Mayor",
    type: "Comercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Torre Empresarial Benedetti",
    type: "Oficinas",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    title: "Condominio Vista al Mar",
    type: "Residencial",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    title: "Remodelación Hotel Central",
    type: "Remodelación",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    title: "Parque Industrial Norte",
    type: "Industrial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const ProjectsGallery = () => {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(project => project.type === filter);

  const projectTypes = ["Todos", ...new Set(projects.map(project => project.type))];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una muestra de nuestro trabajo y dedicación
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full transition-all ${filter === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {type}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-blue-300 font-medium">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;