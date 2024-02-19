import  whatsAppIcon from "../assets/icons/whatsapp-icon.svg"

export default function CTA() {


    return (

        <div className="">
            <div className="mx-2 max-w-full pt-6 lg:flex md:flex lg:items-center md:items-center lg:justify-between md:justify-between bg-primario">
                <h2 className="ml-8 font-bold">
                    <span className="block lg:text-3xl md:text-2xl text-2xl text-quinto py-1">¿Queres visitar Las Grutas?</span>
                    <span className="block lg:text-3xl md:text-2xl text-2xl text-secundario ">¡Reserva tu escapada a la playa hoy mismo!</span>
                </h2>
                <div className="mt-6 flex lg:mt-0 lg:flex-shrink-0 md:mr-4 lg:mr-12 mx-8">
                    <a
                      href="https://wa.me/5492920609034"
                      type="button"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center rounded-2xl border border-transparent bg-quinto hover:bg-sexto px-6 py-3 text-white shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-quinto focus:ring-2 focus:ring-offset-2"
                    >
                        <img src={whatsAppIcon} alt="whatsapp-icon" className='h-8 w-8'/>
                        <span className="pl-3 font-principal text-2xl">Reservar</span>
                    </a>
                </div>
            </div>
        </div>
 )

}