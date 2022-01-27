import React from "react";

const Thumbnail = (props) => {
    return(
        <div className="container w-full px-24 py-44 text-left">
            <h1 className="font-fraunces text-5xl mb-10">{props.title}</h1>
            <p className="font-barlow text-base mb-10 text-very-dark-grayish-blue">{props.text}</p>
            <h4 className="font-fraunces font-bold text-base">LEARN MORE</h4>
        </div>
    )
}

export default Thumbnail;