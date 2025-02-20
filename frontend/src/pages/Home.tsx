import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-blue-500 h-full flex flex-col">
      {/* El contenido principal se encierra en un contenedor que crece para llenar el espacio disponible */}
      <div className="flex-grow container mx-auto px-4 pt-20">
        {/* Línea horizontal sin márgenes verticales excesivos */}
        <hr className="border-t border-gray-300" />

        {/* Sección principal: dos columnas */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          {/* Columna izquierda: Texto */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-white leading-tight">
              A Shift To Something With More Potential!
            </h1>
          </div>
          {/* Columna derecha: Imagen grande de ItzGalaxy */}
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img src="ItzGalaxy_CLR.png" alt="ItzGalaxy" className="w-full max-w-md" />
          </div>
        </div>

        <hr className="border-t border-gray-300" />

        {/* Sección inferior: Icono de Resources y texto */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          {/* Columna izquierda: Icono de Lucide grande */}
          <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <Link to="/resources" className="text-white hover:text-blue-200">
              <Book size={200} />
            </Link>
          </div>
          {/* Columna derecha: Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-5xl font-bold text-white leading-tight">Looking For Something?</p>
            <Link to="/resources" className="text-5xl font-bold text-white leading-tight">
              Check Out The Resources Page.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
