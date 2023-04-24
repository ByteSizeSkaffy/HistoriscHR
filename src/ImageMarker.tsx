import React from 'react';
import {useState,useRef,useEffect} from 'react';
import MarkerIMG from "./images/Marker.png";
import "./Marker.css"

//NIET OP DE AFBEELDINGEN LETTEN

type MarkerProps={
    ImageOld:string;
    ImageMiddle:string;
    ImageNew:string;
    className:string;
    visible:boolean;
    leftProp:string;
    heightProp:string;
}

const Marker: React.FC<MarkerProps> = ({visible,className,ImageOld, ImageMiddle, ImageNew,leftProp,heightProp}) => {
    const OldRef=useRef<HTMLImageElement>(null);
    const MidRef=useRef<HTMLImageElement>(null);
    const NewRef=useRef<HTMLImageElement>(null);
    const ContainerRef=useRef<HTMLDivElement>(null);
    const SlideRef=useRef<HTMLInputElement>(null);
    const greatRef=useRef<HTMLDivElement>(null);
    const MarkerRef=useRef<HTMLImageElement>(null);

    
    function MapLogic(){
        if((Number(SlideRef.current?.valueAsNumber)<100)){
            OldRef.current?.classList.remove("opaque")
            MidRef.current?.classList.add("opaque")
        }
        else if (Number(SlideRef.current?.valueAsNumber)>=100 && Number(SlideRef.current?.valueAsNumber)<200){
            OldRef.current?.classList.add("opaque")
            MidRef.current?.classList.remove("opaque")
            NewRef.current?.classList.remove("opaque")
        }
        else if ((Number(SlideRef.current?.valueAsNumber)>=200 && (Number(SlideRef.current?.valueAsNumber)<=300))){
            MidRef.current?.classList.add("opaque")
            
        }
    }

    function ShowMaps(){
        ContainerRef.current?.classList.toggle("hidden");
        greatRef.current?.classList.toggle("background");
        //added intro for bezier animation
        MarkerRef.current?.classList.toggle("hidden");
        MarkerRef.current?.classList.toggle("intro");

    }
    if (visible){
        return(
            <div className="great" ref={greatRef}>
                <img className={className} src={MarkerIMG} alt={"dispenser"} onClick={ShowMaps} ref={MarkerRef} style={{left:leftProp,top:heightProp}}/>
                <div className="dispenserContainer hidden" ref={ContainerRef}>
                    <p className="Back" onClick={ShowMaps}>X</p>
                    <img className="New Img" src={ImageNew} alt="loading" ref={NewRef}/>
                    <img className="Mid Img" src={ImageMiddle} alt="loading" ref={MidRef}/>
                    <img className="Old Img" src={ImageOld} alt="loading" ref={OldRef}/>
                    
                    <div className="slideContainer">
                        <input className='Slide' type="range" defaultValue={1} min={1} max={300} ref={SlideRef} onInput={MapLogic}/>
                    </div>
                </div>
            </div>
        )
    }
    else {return <div className="Test"/>;}
}

export default Marker;
export type {};