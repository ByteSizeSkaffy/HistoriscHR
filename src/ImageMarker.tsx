import React from 'react';
import {useState,useRef} from 'react';
import MarkerIMG from "./images/Marker.png";
import "./Marker.css"
import PictureSlider from './PictureSlider';

//NIET OP DE AFBEELDINGEN LETTEN

type MarkerProps={
    source:Array<any>;
    className:string;
    x:string;
    y:string;
    size:{
        width: number;
        height: number;
    };
}

const Marker: React.FC<MarkerProps> = ({className,source,x,y,size}) => {
    const greatRef=useRef<HTMLDivElement>(null);
    const MarkerRef=useRef<HTMLImageElement>(null);
    const [rerender, setReRender] = useState(false);
    const [visible,setVisible] = useState(true);
    const fix = ()=> {setReRender((rerender)=>!rerender);}

    function ShowMaps(){
        setVisible(!visible);
        greatRef.current?.classList.toggle("background");
        document.body.classList.toggle("scroll");
        MarkerRef.current?.classList.toggle("hidden");

    }
    return(
        <div className="great" ref={greatRef}>
            <div className="pos" style={{width:size.width,height:size.height}} onResize={fix}>
                <img className={className} src={MarkerIMG} alt={"dispenser"} onClick={ShowMaps} ref={MarkerRef} style={{left:x,top:y}}/>
                <p className={visible? "Back hidden":"Back"} onClick={ShowMaps}>X</p>
                <PictureSlider source={source} visible={visible}></PictureSlider>
                
            </div>
        </div>
    )
}

export default Marker;
export type {};