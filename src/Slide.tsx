import image1 from './images/maps/1936.jpg';
import image2 from './images/maps/1920.jpg';
import image3 from './images/maps/1903.jpg';
import App from './App';
import {useRef,useState} from "react";
import './app.css';
import userEvent from '@testing-library/user-event';

function Slide(){
    const SlideRef=useRef<HTMLInputElement>(null)
    const imgMain=useRef<HTMLImageElement>(null)
    const imgAlt=useRef<HTMLImageElement>(null)

    function DoOpacity(){
        const OPC:number=SlideRef.current!.valueAsNumber/100
        if(OPC>0.9){
            imgMain.current!.style.opacity=`${1-OPC}`
        }
        else{
            imgMain.current!.style.opacity="1"
        }
        imgAlt.current!.style.opacity=`${OPC}`
    }

    return <div className='mapgrid4'>
        <img className="main" src={image2} alt="loading...." id="slideTest" ref={imgMain}></img>
        <img className='Bap' src={image1} alt="loading" id='slideAlt' ref={imgAlt}></img>
        <h3>SlideTest</h3>
        <div className="slidecontainer">
            <input className="slider" type="range" min="0" max="100" ref={SlideRef} onInput={DoOpacity}/>
        </div>
    </div>
}

export default Slide;