import React from "react";
import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as Fb} from '../../images/icon-facebook.svg';
import {ReactComponent as Ig} from '../../images/icon-instagram.svg';
import {ReactComponent as Tw} from '../../images/icon-twitter.svg';
import {ReactComponent as Pt} from '../../images/icon-pinterest.svg'


class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colorFb: '#2c7566',
            colorIg: '#2c7566',
            colorTw: '#2c7566',
            colorPt: '#2c7566'
        }
    }

    render() {
        return(
            <div className="wrapper bg-footer py-16">
             <Logo fill="#2c7566" className="mx-auto mb-8" />
             <div className="menu flex justify-center gap-8 lg:w-1/2 w-full mx-auto font-barlow text-base mb-16">
                 <p className="hover:text-white-pallete text-footer-text cursor-pointer">About</p>
                 <p className="hover:text-white-pallete text-footer-text cursor-pointer">Services</p>
                 <p className="hover:text-white-pallete text-footer-text cursor-pointer">Projects</p>
             </div>
             <div className="sosmed flex justify-center gap-6">
                <Fb  onMouseEnter={() => this.setState({colorFb: '#FFFFFF'})} onMouseLeave={() => this.setState({colorFb : "#2c7566"})} fill={this.state.colorFb} className="cursor-pointer" />
                 <Ig  onMouseEnter={() => this.setState({colorIg: '#FFFFFF'})} onMouseLeave={() => this.setState({colorIg : "#2c7566"})} fill={this.state.colorIg} className="cursor-pointer" />
                 <Tw  onMouseEnter={() => this.setState({colorTw: '#FFFFFF'})} onMouseLeave={() => this.setState({colorTw : "#2c7566"})} fill={this.state.colorTw} className="cursor-pointer" />
                 <Pt  onMouseEnter={() => this.setState({colorPt: '#FFFFFF'})} onMouseLeave={() => this.setState({colorPt : "#2c7566"})} fill={this.state.colorPt} className="cursor-pointer" />
             </div>
         </div>
        )
    }
}


export default About;