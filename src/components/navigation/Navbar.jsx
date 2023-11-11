import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return(
        <>
        <nav className="shadow-md fixed hidden md:block top-0 px-2 sm:px-4 w-full z-50 py-6 bg-secundario">
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
        </div>
        </nav>
        </>
    )
}

export default Navbar