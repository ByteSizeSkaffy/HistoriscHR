import React from 'react';
import {useState,useRef,useEffect} from 'react';
import MarkerIMG from "./images/Marker.png";
import "./Marker.css"


type MarkerProps={
    ImageOld:string;
    ImageMiddle:string;
    ImageNew:string;
    className:string;
    visible:boolean;
}

const Marker: React.FC<MarkerProps> = ({visible,className,ImageOld, ImageMiddle, ImageNew}) => {
    const OldRef=useRef<HTMLImageElement>(null);
    const MidRef=useRef<HTMLImageElement>(null);
    const NewRef=useRef<HTMLImageElement>(null);
    const ContainerRef=useRef<HTMLDivElement>(null);
    const SlideRef=useRef<HTMLInputElement>(null)
    
    function MapLogic(){
        if((Number(SlideRef.current?.valueAsNumber)<100)){
            OldRef.current?.classList.add("hidden")
            MidRef.current?.classList.remove("hidden")
        }
        else if (Number(SlideRef.current?.valueAsNumber)>=100 && Number(SlideRef.current?.valueAsNumber)<200){
            OldRef.current?.classList.remove("hidden")
            MidRef.current?.classList.add("hidden")
            NewRef.current?.classList.add("hidden")
        }
        else if ((Number(SlideRef.current?.valueAsNumber)>=200 && (Number(SlideRef.current?.valueAsNumber)<=300))){
            NewRef.current?.classList.remove("hidden")
            OldRef.current?.classList.add("hidden")
        }
    }

    function ShowMaps(){
        OldRef.current?.classList.toggle("hidden");
        MidRef.current?.classList.toggle("hidden");
        NewRef.current?.classList.toggle("hidden");
    }
    if (visible){
        return(
            <div className="dispenserContainer" ref={ContainerRef}>
                <img className={className} src={MarkerIMG} alt={"dispenser"} onClick={ShowMaps}/>
                <img className="Old Img hidden" src={ImageOld} alt="loading" ref={OldRef}/>
                <img className="Mid Img hidden" src={ImageMiddle} alt="loading" ref={MidRef}/>
                <img className="New Img hidden" src={ImageNew} alt="loading" ref={NewRef}/>
                <div className="slideContainer">
                    <input className='Slide hidden' type="range" defaultValue={1} min={1} max={300} ref={SlideRef} onInput={()=>{}}/>
                </div>
            </div>
        )
    }
    else {return <div className="Test"/>;}
}

export default Marker;
export type {};