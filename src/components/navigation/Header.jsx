import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"

function Header() {
    return(
        <>
        <div className="hidden md:block fixed w-full top-0 z-50 bg-terciario pt-2 pb-4">
            <div className="flex justify-end">
                <a href="https://google.com/maps/place/Sierra+Paileman+%26+Treneta,+Las+Grutas,+R%C3%ADo+Negro/@-40.8146043,-65.0981267,17z/data=!3m1!4b1!4m6!3m5!1s0x95fbccd4cd46dfd9:0xf854bf505bbce5df!8m2!3d-40.8146084!4d-65.095938!16s%2Fg%2F11gdm8ztph?hl=es" target="_blank" rel="noreferrer" className="flex text-primario hover:text-secundario">
                    <span className="pt-1 pr-3"><FaMapMarkerAlt/></span>
                    <span className="mr-6">Treneta y Sierra Paileman, Las Grutas</span>
                </a>
                <a href="https://wa.me/5492920609034" target="_blank" rel="noreferrer" className="text-primario hover:text-secundario pr-4 flex">
                    <span className="pt-1 pr-3"><BsFillTelephoneForwardFill/></span>
                    <span>+5492920609034</span>
                </a>
            </div>
        </div>

        {/* Mobile Header */}
        <div className="bg-terciario md:hidden lg:hidden xl:hidden fixed z-50 flex top-0 w-full pt-0.5 pb-0.5">
            <div className="flex items-center">
                <a href="https://google.com/maps/place/Sierra+Paileman+%26+Treneta,+Las+Grutas,+R%C3%ADo+Negro/@-40.8146043,-65.0981267,17z/data=!3m1!4b1!4m6!3m5!1s0x95fbccd4cd46dfd9:0xf854bf505bbce5df!8m2!3d-40.8146084!4d-65.095938!16s%2Fg%2F11gdm8ztph?hl=es" target="_blank" rel="noreferrer" className="text-primario hover:text-secundario inline-flex p-1">
                    <span className="ml-4"><FaMapMarkerAlt className="h-3 w-3"/></span>
                    <span className="text-xs ml-2">Treneta y Sierra Payleman, Las Grutas</span>
                </a>
                <a href="https://wa.me/5492920609034" target="_blank" rel="noreferrer" className="text-primario hover:text-secundario inline-flex">
                    <span className="ml-8"><BsFillTelephoneForwardFill className="h-3 w-3"/></span>
                    <span className="text-xs ml-2">+5492920609034</span>
                </a>
            </div>
        </div>
        </>
    )
}

export default Header