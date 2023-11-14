import mapaLasGrutas from "../assets/img/plano-lg.png"
import pdfFile from "../assets/pdf/planolasgrutas.pdf"

function MapaLasGrutas() {
    return(
        <div className="bg-primario">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="bg-terciario w-full">
                    <h2 className="pt-10 pb-10 lg:text-4xl md:text-4xl text-3xl text-center text-secundario font-principal">
                        Información de Las Grutas
                    </h2>
                </div>
                <span className="mt-16 text-secundario pb-1">(click en la imágen para descargar)</span>
                <a href={pdfFile} target="_blank" rel="noreferrer">
                    <img className="w-auto h-96 px-3" src={mapaLasGrutas} alt="mapa-las-grutas"/>
                </a>
            </div>

            
        </div>
    )
}

export default MapaLasGrutas