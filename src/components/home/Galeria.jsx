import React, { useState } from "react";
import imagen1 from "../assets/img/galeria/imagen1.jpg"
import imagen2 from "../assets/img/galeria/imagen2.jpg"
import imagen3 from "../assets/img/galeria/imagen3.jpg"
import imagen4 from "../assets/img/galeria/imagen4.jpg"
import imagen5 from "../assets/img/galeria/imagen5.jpg"
import imagen6 from "../assets/img/galeria/imagen6.jpg"
import imagen7 from "../assets/img/galeria/imagen7.jpg"


const imagenes = [
    {
        name: 'imagen1',
        imageUrl: imagen1,
    },
    {
        name: 'imagen2',
        imageUrl: imagen2,
    },
    {
        name: 'imagen3',
        imageUrl: imagen3,
    },
    {
        name: 'imagen4',
        imageUrl: imagen4,
    },
    {
        name: 'imagen5',
        imageUrl: imagen5,
    },
    {
        name: 'imagen6',
        imageUrl: imagen6,
    },
    {
        name: 'imagen7',
        imageUrl: imagen7,
    },
]

function Galeria() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
    }

    return(
        <>
        <div className="bg-terciario">
            <h2 className="pt-10 pb-10 text-4xl text-center text-secundario font-principal">
                Galería
            </h2>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden md:h-96 md:mx-4 lg:mx-2 lg:h-screen">
                    {imagenes.map((imagen, index) => (
                    <div
                      key={index}
                      className={`${index === currentIndex ? 'block': 'hidden'} duration-700 ease-in-out`}
                      data-carousel-item
                    >
                        <img src={imagen.imageUrl} className="absolute block w-full h-56 md:h-96 lg:h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    ))}
                    
                </div>
                
               
                <button 
                  type="button" 
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
                  data-carousel-prev
                  onClick={handlePrevClick}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button 
                  type="button" 
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                  onClick={handleNextClick}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
        </>
    )
}

export default Galeria