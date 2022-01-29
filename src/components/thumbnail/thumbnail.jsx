import React from "react";

const Thumbnail = (props) => {
    return(
        <div className="container w-full px-8 py-20 text-center lg:px-24 lg:py-40 lg:max-h-screen lg:text-left">
            <h1 className="font-fraunces text-4xl mb-5 lg:text-5xl lg:mb-10 text-very-dark-desaturated-blue">{props.title}</h1>
            <p className="font-barlow text-base mb-10 text-very-dark-grayish-blue">{props.text}</p>
            <h4 className="learn-more font-fraunces font-bold text-base cursor-pointer">LEARN MORE</h4>
        </div>
    )
}

export default Thumbnail;