import React from "react";
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';

const Navbar = () => {
    return(
        <nav className="z-10 flex justify-between items-center px-12 py-6 text-sm relative top-0 left-0">
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className="right lg:text-white flex justify-end">
                <img src={hamburger} alt="hamburger-menu" className="h-fit my-auto md:hidden cursor-pointer peer" tabIndex={0} />
                <ul className="font-barlow lg:flex flex-col lg:flex-row lg:justify-end lg:gap-8 lg:items-center peer-focus:bg-white-pallete peer-focus:w-3/4 peer-focus:absolute peer-focus:right-11 peer-focus:top-24  peer-focus:text-very-dark-grayish-blue peer-focus:text-lg peer-focus:flex hidden">
                    <li className="menu-text cursor-pointer p-4 lg:p-0">About</li>
                    <li className="menu-text cursor-pointer p-4 lg:p-0">Services</li>
                    <li className="menu-text cursor-pointer p-4 lg:p-0">Project</li>
                    <li className="font-fraunces text-sm px-6 py-3 w-fit mx-auto m-4 bg-yellow-pallete lg:bg-white-pallete text-very-dark-desaturated-blue rounded-full cursor-pointer hover:bg-blue-300 hover:text-white-pallete" id="contact">CONTACT</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;