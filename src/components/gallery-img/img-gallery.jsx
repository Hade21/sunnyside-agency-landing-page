import React from "react";

const Gallery = () => {
    return (
        <div className="wrapper flex justify-center">
            <div className="milkbottels md:bg-desktop-gallery-milkbottles bg-cover md:w-1/4 h-96"></div>
            <div className="orange md:bg-desktop-gallery-orange bg-cover md:w-1/4 h-96"></div>
            <div className="cone md:bg-desktop-gallery-cone bg-cover md:w-1/4 h-96"></div>
            <div className="sugarcubes md:bg-desktop-gallery-sugarcubes bg-cover md:w-1/4 h-96"></div>
        </div>
    )
}

export default Gallery;