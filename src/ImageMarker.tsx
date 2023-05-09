import React, { RefObject } from 'react';
import {useState,useRef,useEffect} from 'react';
import MarkerIMG from "./images/Marker.png";
import "./Marker.css"
import GRN from "./images/GRNdispenser.png"

//NIET OP DE AFBEELDINGEN LETTEN

type MarkerProps={
    source:Array<string>;
    className:string;
    visible:boolean;
    x:string;
    y:string;
    size:{
        width: number;
        height: number;
    };
}

const Marker: React.FC<MarkerProps> = ({visible,className,source,x,y,size}) => {
    const OldRef=useRef<HTMLImageElement>(null);
    const MidRef=useRef<HTMLImageElement>(null);
    const NewRef=useRef<HTMLImageElement>(null);
    const ContainerRef=useRef<HTMLDivElement>(null);
    const SlideRef=useRef<HTMLInputElement>(null);
    const greatRef=useRef<HTMLDivElement>(null);
    const MarkerRef=useRef<HTMLImageElement>(null);
    const [rerender, setReRender] = useState(false);
    const fix = ()=> {setReRender((rerender)=>!rerender);}
    
    function mapRenderLogic(SlideRef:React.RefObject<HTMLInputElement>){
        const threshhold = 300/source.length
        let index=0
        if(SlideRef.current!=undefined){
            //let index = Math.floor((SlideRef.current.valueAsNumber / 301) * (source.length));
            let index = SlideRef.current.valueAsNumber;
            return <img className='Img' src={source[index]}></img>
        }
        return <img className='Img' src={source[index]}></img>
    };

    /*deprecated
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
        return(<div></div>)
    }*/

    function ShowMaps(){
        ContainerRef.current?.classList.toggle("hidden");
        greatRef.current?.classList.toggle("background");
        //added intro for bezier animation
        document.body.classList.toggle("scroll");
        MarkerRef.current?.classList.toggle("hidden");

    }
    if (visible){
        return(
            <div className="great" ref={greatRef}>
                <div style={{width:size.width,height:size.height}}>
                    <img className={className} src={MarkerIMG} alt={"dispenser"} onClick={ShowMaps} ref={MarkerRef} style={{left:x,top:y}}/>
                    <div className="dispenserContainer hidden" ref={ContainerRef}>
                        <p className="Back" onClick={ShowMaps}>X</p>
                        {mapRenderLogic(SlideRef)}
                        
                        <div className="slideContainer">
                            <input className='Slide' type="range" defaultValue={0} min={0} max={source.length-1} ref={SlideRef} onInput={fix}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {return <div className="Test"/>;}
}

export default Marker;
export type {};