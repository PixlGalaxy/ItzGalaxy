import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col">

      <div className="flex-grow pt-20 container mx-auto px-4">
        {/* Línea horizontal separadora */}
        <hr className="border-t border-gray-300 my-4" />

        {/* Sección principal: dos columnas */}
        <div className="flex flex-col md:flex-row items-center justify-between my-8">
          {/* Columna izquierda: Texto */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-white leading-tight">
              A Shift To Something With More Potential!
            </h1>
          </div>
          {/* Columna derecha: Imagen grande de ItzGalaxy */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src="ItzGalaxy_CLR.png" alt="ItzGalaxy" className="w-full max-w-md" />
          </div>
        </div>

        {/* Otra línea horizontal */}
        <hr className="border-t border-gray-300 my-4" />

        {/* Sección inferior: Icono de Resources y texto */}
        <div className="flex flex-col md:flex-row items-center justify-between my-8">
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
      <Footer />

    </div>
  );
};

export default Home;
