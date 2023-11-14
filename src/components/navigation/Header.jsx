import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"

function Header() {
    return(
        <>
        <div className="flex fixed w-full top-0 z-50 bg-terciario pt-2 pb-4 justify-end">
            <a href="https://google.com/maps/place/Sierra+Paileman+%26+Treneta,+Las+Grutas,+R%C3%ADo+Negro/@-40.8146043,-65.0981267,17z/data=!3m1!4b1!4m6!3m5!1s0x95fbccd4cd46dfd9:0xf854bf505bbce5df!8m2!3d-40.8146084!4d-65.095938!16s%2Fg%2F11gdm8ztph?hl=es" target="_blank" rel="noreferrer" className="flex text-primario hover:text-secundario">
                <span className="pt-1 pr-3"><FaMapMarkerAlt/></span>
                <span className="mr-6">Treneta y Sierra Paileman, Las Grutas</span>
            </a>
            <a href="https://wa.me/5492920609034" target="_blank" rel="noreferrer" className="text-primario hover:text-secundario pr-4 flex">
                <span className="pt-1 pr-3"><BsFillTelephoneForwardFill/></span>
                <span>+5492920609034</span>
            </a>

        </div>

        {/* Mobile Header */}
        <div className=" bg-terciario md:hidden block fixed top-0 px-2 sm:px-4 w-full z-50 py-2.5">
            <a href="https://google.com/maps/place/Sierra+Paileman+%26+Treneta,+Las+Grutas,+R%C3%ADo+Negro/@-40.8146043,-65.0981267,17z/data=!3m1!4b1!4m6!3m5!1s0x95fbccd4cd46dfd9:0xf854bf505bbce5df!8m2!3d-40.8146084!4d-65.095938!16s%2Fg%2F11gdm8ztph?hl=es" target="_blank" rel="noreferrer" className="flex text-primario hover:text-secundario">
                <span className="pt-1 pr-3"><FaMapMarkerAlt/></span>
                <span className="mr-6">Treneta y Sierra Payleman, Las Grutas</span>
            </a>
            <a href="https://wa.me/5492920609034" target="_blank" rel="noreferrer" className="text-primario hover:text-secundario pr-4 flex">
                <span className="pt-1 pr-3"><BsFillTelephoneForwardFill/></span>
                <span>+5492920609034</span>
            </a>
        </div>
        </>
    )
}

export default Header