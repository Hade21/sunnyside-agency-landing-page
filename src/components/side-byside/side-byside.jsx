import React from "react";

const Card = (props) => {
    return(
        <div className="wrapper absolute  text-center bottom-9">
            <div className="floating md:w-1/2 mx-auto">
                <h1 className="text-graphic-design-text font-fraunces text-2xl font-bold mb-6">{props.title}</h1>
                <p className="text-graphic-design-text font-barlow text-base">{props.text}</p>
            </div>
        </div>
    )
}

export default Card;