import React from "react";
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';

const Navbar = () => {
    return(
        <nav className="z-10 flex justify-between items-center px-12 py-6 text-sm relative top-0 left-0">
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className="right text-white flex justify-end">
                <ul className="font-barlow md:flex justify-end gap-8 items-center hidden">
                    <li className="menu-text cursor-pointer">About</li>
                    <li className="menu-text cursor-pointer">Services</li>
                    <li className="menu-text cursor-pointer">Project</li>
                    <li className="font-fraunces text-sm px-6 py-3 bg-white-pallete text-very-dark-desaturated-blue rounded-full cursor-pointer" id="contact">CONTACT</li>
                </ul>
                <img src={hamburger} alt="hamburger-menu" className="h-fit my-auto md:hidden cursor-pointer"/>
            </div>
        </nav>
    )
}
export default Navbar;