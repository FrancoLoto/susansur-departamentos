import heroimage from "../assets/img/frente-dpto.jpeg"

function HeroSection() {
    return(
        <main>
            <div className="relative">
                <div className="lg:pt-40 lg:pb-56 md:pt-24 md:pb-36 pt-10 pb-20 sm:pb-28">
                    <h1 className="lg:text-8xl text-center font-bold font-logo tracking-tight pb-3 text-white text-5xl md:text-7xl sm:text-7xl">Susansur Departamentos</h1>
                    <p className="text-center text-white lg:text-2xl text-l font-principal pb-4">Contamos con dos hermosos deptos, altura 4ta bajada, a 50 mts del mar. Excelente ubicación!</p>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-28rem)] -z-10 transform-gpu overflow-hidden bg-white  lg:top-[calc(100%-42rem)] sm:top-[calc(100%-30rem)]">
                    <img src={heroimage} alt="home-hero-img" className='w-screen h-screen object-cover'/>
                </div>
            </div>
        </main>
    )
}

export default HeroSection