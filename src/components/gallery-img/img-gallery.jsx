import React from "react";

const Gallery = () => {
    return (
        <div className="wrapper grid grid-cols-2 grid-rows-2 lg:flex lg:justify-center">
            <div className="milkbottels bg-mobile-gallery-milkbottles lg:bg-desktop-gallery-milkbottles bg-cover w-full h-48 lg:w-1/4 lg:h-96"></div>
            <div className="orange bg-mobile-gallery-orange lg:bg-desktop-gallery-orange bg-cover w-full h-48 lg:w-1/4 lg:h-96"></div>
            <div className="cone bg-mobile-gallery-cone lg:bg-desktop-gallery-cone bg-cover w-full h-48 lg:w-1/4 lg:h-96"></div>
            <div className="sugarcubes bg-mobile-gallery-sugarcubes lg:bg-desktop-gallery-sugarcubes bg-cover w-full h-48 lg:w-1/4 lg:h-96"></div>
        </div>
    )
}

export default Gallery;