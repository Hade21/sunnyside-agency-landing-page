import React from "react";
import logo from '../../images/logo.svg';
import fb from '../../images/icon-facebook.svg';
import ig from '../../images/icon-instagram.svg';
import tw from '../../images/icon-twitter.svg';
import pt from '../../images/icon-pinterest.svg'

const About = () => {
    return(
        <div className="wrapper bg-footer py-16">
            <img src={logo} alt="" className="mx-auto mb-7"/>
            <div className="menu flex justify-center gap-8 lg:w-1/2 w-full mx-auto font-barlow text-base mb-16">
                <p className="menu-text text-footer-text cursor-pointer">About</p>
                <p className="menu-text text-footer-text cursor-pointer">Services</p>
                <p className="menu-text text-footer-text cursor-pointer">Projects</p>
            </div>
            <div className="sosmed flex justify-center gap-6">
                <img src={fb} alt="facebook" className="cursor-pointer" />
                <img src={ig} alt="instagram" className="cursor-pointer" />
                <img src={tw} alt="twitter" className="cursor-pointer" />
                <img src={pt} alt="pinterest" className="cursor-pointer" />
            </div>
        </div>
    )
}

export default About;