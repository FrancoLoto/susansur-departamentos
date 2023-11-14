import  whatsAppIcon from "../assets/icons/whatsapp-icon.svg"

export default function CTA() {


    return (

        <div className="">
            <div className="mx-auto max-w-full pt-9 px-4 sm:px-6 lg:flex md:flex lg:items-center md:items-center lg:justify-between md:justify-between md:px-8 lg:px-8 bg-primario">
                <h2 className="ml-8 lg:text-3xl font-bold tracking-tight text-gray-900">
                    <span className="block lg:text-3xl md:text-2xl text-2xl text-quinto py-1">¿Quieres reservar?</span>
                    <span className="block lg:text-3xl md:text-2xl text-2xl text-secundario ">Ponete en contacto con nosotros.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 md:mr-4 lg:mr-12 mr-8 ml-8">
                    <div className="inline-flex rounded-md shadow">
                        <a
                        href="https://wa.me/5492920609034"
                        type="button"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center rounded-md border border-transparent bg-sexto hover:bg-quinto lg:px-8 md:px-6 px-6 py-3 text-white shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-quinto focus:ring-2 focus:ring-offset-2"
                        >
                        <img src={whatsAppIcon} alt="whatsapp-icon" className='h-6 w-6'/>
                        <span className="pl-4">Reservar</span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
 )

}