import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ serviceRef, galeryRef, ubiRef }) {
    const [toggleMenu, setToggleMenu] = useState(false)

    const navigate = useNavigate();

    const navIconHandler = e => {
        e.preventDefault()
        setToggleMenu(!toggleMenu)
    }

    const executeScroll = ref => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return(
        <>
        <nav className="shadow-md fixed hidden md:block top-0 px-2 sm:px-4 w-full z-50 py-4 bg-secundario mt-10">
            <div className="flex items-center justify-between mx-auto px-8 sm:px-24">
                <Link 
                  to="/"
                  className="hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    window.scrollTo(0, 0);
                  }}
                >
                <span className="cursor-pointer items-center mx-4 my-4 text-5xl transition ease-in-duration-100">
                    <span className="font-logo text-white">Susansur</span>
                </span>
                </Link>

                <ul className='flex '>
                        <li 
                          className='lg:text-2xl md:text-xl font-secundaria cursor-pointer mx-3 my-5 text-white border-b-2 border-transparent hover:border-terciario transition duration-300 ease-in-out'
                          onClick={() => executeScroll(serviceRef)}
                        >
                            Servicios
                        </li>
                        <li 
                          className='lg:text-2xl md:text-xl font-secundaria cursor-pointer mx-3 my-5 text-white border-b-2 border-transparent hover:border-terciario transition duration-300 ease-in-out'
                          onClick={() => executeScroll(galeryRef)}
                        >
                            Galería
                        </li>
                        <li 
                          className='lg:text-2xl md:text-xl font-secundaria cursor-pointer mx-3 my-5 text-white border-b-2 border-transparent hover:border-terciario transition duration-300 ease-in-out'
                          onClick={() => executeScroll(ubiRef)}
                        >
                            Ubicación
                        </li>
                    </ul> 
            </div>
        </nav>


        {/* Mobile Navbar */}
        <nav className="bg-secundario md:hidden block fixed top-0 px-2 sm:px-4 w-full z-50 py-2.5">
        <div className='flex items-center justify-between mx-auto px-8 sm:px-24'>
            <Link 
                  to="/"
                  className="hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    window.scrollTo(0, 0);
                  }}
            >
                <span className="cursor-pointer items-center mx-4 my-4 text-4xl transition ease-in-duration-100">
                    <span className="font-logo text-white">Susansur</span>
                </span>
            </Link>

            <svg
                onClick={navIconHandler}
                className='cursor-pointer w-8 h-8 text-white hover:text-primario my-4 mr-5'
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
            >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>


            <div className={toggleMenu ? '' : 'hidden'}>
                    <div className=' bg-primario cursor-pointer mt-8'>
                        <div className="text-xl font-secundaria block px-4 py-3 text-terciario  hover:text-secundario transition" onClick={() => executeScroll(serviceRef)}>Servicios</div>
                        <div className="text-xl font-secundaria block px-4 py-3 text-terciario  hover:text-secundario transition" onClick={() => executeScroll(galeryRef)}>Galería</div>
                        <div className="text-xl font-secundaria block px-4 py-3 text-terciario  hover:text-secundario transition" onClick={() => executeScroll(ubiRef)}>Ubicación</div>
                    </div>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar