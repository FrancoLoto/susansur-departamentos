import { Link, useNavigate } from 'react-router-dom'

export default function CTA() {
    const navigate = useNavigate();

    return (

        <div className="">
            <div className="mx-auto max-w-full pt-9 px-4 sm:px-6 lg:flex md:flex lg:items-center md:items-center lg:justify-between md:justify-between md:px-8 lg:px-8 bg-primario">
                <h2 className="ml-8 lg:text-3xl font-bold tracking-tight text-gray-900">
                    <span className="block lg:text-3xl md:text-2xl text-2xl text-quinto py-1">¿Quieres reservar?</span>
                    <span className="block lg:text-3xl md:text-2xl text-2xl text-secundario ">Ponete en contacto con nosotros.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 md:mr-4 mr-8 ml-8">
                    <div className="inline-flex rounded-md shadow">
                        <Link
                        to="/contacto"
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/contacto');
                            window.scrollTo(0, 0);
                          }}
                        className="items-center rounded-md border border-transparent bg-quinto hover:bg-sexto px-6 md:px-4 py-3 text-white shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                        Contactar
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Link
                        to="/sobre-mi"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/sobre-mi');
                            window.scrollTo(0, 0);
                          }}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-secundario px-6 md:px-4 py-3 text-base font-medium text-white hover:bg-cuarto"
                        >
                        Aprende más
                        </Link>
                    </div>
                </div>
            </div>
        </div>
 )

}