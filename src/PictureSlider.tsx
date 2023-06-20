import React from 'react';
import {useState,useRef} from 'react';
import "./Marker.css"


type PictureProps={
    source:Array<any>;
    visible:boolean;
}

const PictureSlider: React.FC<PictureProps> = ({source,visible}) => {
    const ContainerRef=useRef<HTMLDivElement>(null);
    const SlideRef=useRef<HTMLInputElement>(null);
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

    return(
        <div className={visible? "dispenserContainer hidden":"dispenserContainer"} ref={ContainerRef}>
            {mapRenderLogic(SlideRef)}
            
            <div className="slideContainer">
                <input className='Slide' type="range" defaultValue={0} min={0} list='markings' max={source.length-1} ref={SlideRef} onInput={fix} 
                style={{background: "repeating-linear-gradient(90deg, #000, #000 1px, transparent 1px, transparent "+95/(source.length-1)+"%)"}}/>
            </div>
            
        </div>
            
    )
}

export default PictureSlider;
export type {};