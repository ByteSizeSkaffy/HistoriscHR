import React from 'react';
import {useState,useRef,useEffect} from 'react';
import "./Marker.css"

//NIET OP DE AFBEELDINGEN LETTEN

type PictureProps={
    source:Array<any>;
    visible:boolean;
}

const PictureSlider: React.FC<PictureProps> = ({source,visible}) => {
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
    return(
        <div className={visible? "dispenserContainer hidden":"dispenserContainer"} ref={ContainerRef}>
            {mapRenderLogic(SlideRef)}
            
            <div className="slideContainer">
                <input className='Slide' type="range" defaultValue={0} min={0} max={source.length-1} ref={SlideRef} onInput={fix}/>
            </div>
            
        </div>
            
    )
}

export default PictureSlider;
export type {};