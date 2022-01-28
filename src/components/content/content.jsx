import React from "react";
import Thumbnail from "../thumbnail/thumbnail.jsx";
import Card from "../side-byside/side-byside.jsx";
import Testi from "../testimoni/testimoni.jsx";
import Emily from '../../images/image-emily.jpg';
import Jennie from '../../images/image-jennie.jpg';
import Thomas from '../../images/image-thomas.jpg';


const Content = () => {
    return(
        <div className="top-wrapper">
            <div className="wrapper flex md:justify-center">
                <div className="left md:w-1/2">
                <Thumbnail
                    title='Transform your brand'
                    text='We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.'
                    />
                </div>
                <div className="right md:w-1/2 bg-desktop-transform"></div>
            </div>
            <div className="wrapper flex md:justify-center">
                <div className="left md:w-1/2 bg-desktop-stand-out"></div>
                <div className="right md:w-1/2">
                <Thumbnail
                    title='Stand out to the right audience'
                    text='Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we’ll build and extend your brand in digital places.'
                    />
                </div>
            </div>
            <div className="wrapper flex justify-center h-108">
                <div className="background md:w-1/2 bg-desktop-graphic-design relative">
                    <Card 
                        title='Graphic design'
                        text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
                        />
                </div>
                <div className="background md:w-1/2 bg-desktop-photography relative">
                    <Card
                        title='Photography'
                        text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
                        />
                </div>
            </div>
            <div className="testi-wrapper py-20">
                <div className="section-title font-fraunces text-2xl text-center font-bold tracking-widest text-grayish-blue">CLIENT TESTIMONIAL</div>
                <div className="card-wrapper flex justify-center w-10/12 mx-auto mt-16">
                <Testi
                    image={Emily}
                    testi='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
                    name='Emily R.'
                    pos='Marketing Director'
                    />
                <Testi
                    image={Thomas}
                    testi='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
                    name='Thomas S.'
                    pos='Chief Operting Officer'
                    />
                <Testi
                    image={Jennie}
                    testi='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
                    name='Jennie F.'
                    pos='Bussiness Owner'
                    />  
                </div>
            </div>
        </div>
    )
}

export default Content;