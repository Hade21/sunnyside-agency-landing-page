import React from "react";
import Navbar from '../navbar/navbar.jsx';
import arrowDown from '../../images/icon-arrow-down.svg';


const Header = () => {
    return (
        <header className="bg-header-mobile lg:bg-header-desktop w-full relative bg-cover bg-center pb-16">
            <Navbar/>
            <h1 className="text-white-pallete text-4xl font-fraunces my-16 tracking-widest">WE ARE CREATIVES</h1>
            <img src={arrowDown} alt="arrow-down" className="mx-auto lg:mb-32 pb-16" />
        </header>
    )
}
export default Header;