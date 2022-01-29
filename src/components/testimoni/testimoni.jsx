import React from 'react';

const Testi = (props) => {
    return (
        <div className="container px-4 grid gap-9 w-10/12 mx-auto lg:w-1/3">
            <img src={props.image} alt="avatar" className='w-16 rounded-full mx-auto' />
            <p className='font-barlow text-base text-very-dark-grayish-blue'>{props.testi}</p>
            <div className="nama grid gap-1">
            <h3 className='font-fraunces text-lg font-bold text-very-dark-desaturated-blue'>{props.name}</h3>
            <p className='font-barlow text-base text-grayish-blue'>{props.pos}</p>
            </div>
        </div>
    )
}

export default Testi;