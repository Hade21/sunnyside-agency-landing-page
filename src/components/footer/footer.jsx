import React from "react";
import Gallery from "../gallery-img/img-gallery.jsx";
import About from "../about/about.jsx";

const Footer = () => {
    return(
        <div className="footer">
            <div className="img-gallery">
                <Gallery />
                <About />
            </div>
        </div>
    )
}

export default Footer;