

function Servicios({ serviceRef }) {
    return(
        <div className="bg-primario pb-20"> 
            <div>
                <div className=" bg-terciario" ref={serviceRef}>
                    <h2 className="pt-10 pb-10 lg:text-4xl md:text-4xl text-3xl text-center text-secundario font-principal">
                        Disfrute de su estadía en Las Grutas
                    </h2>
                </div>

                <div className="mx-32 pt-36 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-12 lg:pl-14 md:pl-16">
                    <div className="lg:pt-8 md:pt-10">
                        <span className="text-terciario lg:text-3xl md:text-3xl text-2xl font-principal text-center md:text-left mx-16">Planta Baja</span>
                        <ul className="pt-8 lg:pb-0 md:pb-14 space-y-4 text-left text-gray-500 lg:text-2xl md:text-2xl text-xl">
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Comedor amplio totalmente equipado (heladera, microondas).</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Sillones con TV y cable.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Amplio garage cerrado.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Patio interno con parrilla individual.</span>
                            </li>
                            <li className="flex items-center space-x-3 pb-10">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Baño de servicio.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:pb-12 md:pb-20 pb-4">
                        <span className="text-terciario lg:text-3xl md:text-3xl text-2xl font-principal mx-16">Planta Alta</span>
                        <ul className="pt-8 space-y-4 text-left text-gray-500 lg:text-2xl md:text-2xl text-xl">
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Dormitorio con cama matrimonio, placard, ventiladores de techo y de pie.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Balcón terraza.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Amplio dormitorio con dos camas simples.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-secundario" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span className="pl-2 font-secundaria">Baño amplio totalmente equipado.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios