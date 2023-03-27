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

    function ShowMaps(){
        OldRef.current?.classList.toggle("hidden");
        MidRef.current?.classList.toggle("hidden");
        NewRef.current?.classList.toggle("hidden");
    }
    if (visible){
        return(
            <div>
                <img className={className} src={MarkerIMG} alt='Dispenser' onClick={ShowMaps}/>
                <img className="OldImg hidden" src={ImageOld} alt="loading" ref={OldRef}/>
                <img className="MidImg hidden" src={ImageMiddle} alt="loading" ref={MidRef}/>
                <img className="NewImg hidden" src={ImageNew} alt="loading" ref={NewRef}/>
            </div>
        )
    }
    else {return <div className="Test"/>;}
}

export default Marker;
export type {};