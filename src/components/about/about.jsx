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
            <div className="menu flex justify-center gap-8 md:w-1/2 mx-auto font-barlow text-base mb-16">
                <p className="text-footer-text">About</p>
                <p className="text-footer-text">Services</p>
                <p className="text-footer-text">Projects</p>
            </div>
            <div className="sosmed flex justify-center gap-6">
                <img src={fb} alt="" className="bg-blend-darken"/>
                <img src={ig} alt="" />
                <img src={tw} alt="" />
                <img src={pt} alt="" />
            </div>
        </div>
    )
}

export default About;