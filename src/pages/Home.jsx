import Servicios from "../components/home/Servicios"
import HeroSection from "../components/home/HeroSection"
import MapaLasGrutas from "../components/home/MapaLasGrutas"
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"
import Layout from "../hocs/Layout"
import Galeria from "../components/home/Galeria"
import MapaGoogle from "../components/home/MapaGoogle"
import Header from "../components/navigation/Header"
import CTA from "../components/home/CallToAction"
import { useRef } from "react"
import WidgetClima from "../components/home/WidgetClima"


function Home() {
    const serviceRef = useRef(null)
    const galeryRef = useRef(null)
    const ubiRef = useRef(null)

    return(
        <Layout>
            <Header />
            <Navbar serviceRef={serviceRef} galeryRef={galeryRef} ubiRef={ubiRef}/>
            <div className="pt-44">
                <HeroSection />
                <Servicios serviceRef={serviceRef}/>
                <Galeria galeryRef={galeryRef}/>
                <CTA />
                <MapaLasGrutas />
                <WidgetClima />
                <MapaGoogle ubiRef={ubiRef}/>
                <div className="pb-12 bg-primario">
                <CTA/>
                </div>
            </div>
            
            <Footer />
        </Layout>
    )
}

export default Home