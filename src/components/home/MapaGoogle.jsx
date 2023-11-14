

function MapaGoogle({ ubiRef }) {
    return(
        <div>
            <div className="bg-terciario w-full" ref={ubiRef}>
                <h2 className="pt-10 pb-10 lg:text-4xl md:text-4xl text-3xl text-center text-secundario font-principal">
                    Ubicación
                </h2>
            </div>
            <div>
                <iframe title="mapa-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773.7574512922521!2d-65.09640515806774!3d-40.81455600183735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95fbccd4cd46dfd9%3A0xf854bf505bbce5df!2sSierra%20Paileman%20%26%20Treneta%2C%20Las%20Grutas%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1680275680283!5m2!1ses!2sar" className="w-full h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    
                </iframe>
            </div>
        </div>
    )
}

export default MapaGoogle