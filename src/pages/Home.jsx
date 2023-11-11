import Servicios from "../components/home/Servicios"
import HeroSection from "../components/home/HeroSection"
import MapaLasGrutas from "../components/home/MapaLasGrutas"
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"
import Layout from "../hocs/Layout"
import Galeria from "../components/home/Galeria"
import MapaGoogle from "../components/home/MapaGoogle"


function Home() {
    return(
        <Layout>
            <Navbar />
            <div className="pt-44">
                <HeroSection />
                <Servicios />
                <Galeria />
                <MapaLasGrutas />
                <MapaGoogle />
            </div>
            
            <Footer />
        </Layout>
    )
}

export default Home