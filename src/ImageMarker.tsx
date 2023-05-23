import React, { RefObject } from 'react';
import {useState,useRef,useEffect} from 'react';
import MarkerIMG from "./images/Marker.png";
import "./Marker.css"

//NIET OP DE AFBEELDINGEN LETTEN

type MarkerProps={
    source:Array<any>;
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
    const ContainerRef=useRef<HTMLDivElement>(null);
    const SlideRef=useRef<HTMLInputElement>(null);
    const greatRef=useRef<HTMLDivElement>(null);
    const MarkerRef=useRef<HTMLImageElement>(null);
    const [rerender, setReRender] = useState(false);
    const fix = ()=> {setReRender((rerender)=>!rerender);}

    function mapRenderLogic(SlideRef:React.RefObject<HTMLInputElement>){
        let index=0
        if(SlideRef.current!=undefined){
            let index = SlideRef.current.valueAsNumber;
            return <div><img className='Img' src={source[index].path}></img><p className="InfoText">{source[index].year}</p></div>
        }
        return <div><img className='Img' src={source[index].path}></img><p className="InfoText">{source[index].year}</p></div>
    };

    function ShowMaps(){
        ContainerRef.current?.classList.toggle("hidden");
        greatRef.current?.classList.toggle("background");
        document.body.classList.toggle("scroll");
        MarkerRef.current?.classList.toggle("hidden");

    }
    if (visible){
        return(
            <div className="great" ref={greatRef}>
                <div className="pos" style={{width:size.width,height:size.height}} onResize={fix}>
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