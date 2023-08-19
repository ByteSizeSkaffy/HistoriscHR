import React from 'react';
import {useState,useRef} from 'react';
import "./Marker.css"
import PictureSlider from './PictureSlider';
import MarkerIMG from "./images/Marker.png";
import Loader from "./3DLoader";
import {data} from "./images/Pictures/FileData"
import image1 from './images/Pictures/2023.jpg';

//NIET OP DE AFBEELDINGEN LETTEN

type MarkerProps={
    source:Array<any>;
    className:string;
    x:string;
    y:string;
    model:string
    size:{
        width: number;
        height: number;
    };
}

const Marker: React.FC<MarkerProps> = ({className,source,x,y,size,model}) => {
    const greatRef=useRef<HTMLDivElement>(null);
    const MarkerRef=useRef<HTMLImageElement>(null);
    const [rerender, setReRender] = useState(false);
    const [visible,setVisible] = useState(true);
    const fix = ()=> {setReRender((rerender)=>!rerender);}
//flamingo original: https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb
    function ShowMaps(){
        setVisible(!visible);
        greatRef.current?.classList.toggle("background");
        document.body.classList.toggle("scroll");
        MarkerRef.current?.classList.toggle("hidden");
    }
    return(
        <div className='decoyMapContainer'>
            
            <img className='DecoyMap' src={image1}></img>
            <img className={className} src={MarkerIMG} alt={"dispenser"} onClick={ShowMaps} ref={MarkerRef} style={{left:x,top:y}}/>
            
            
            <div className="great" ref={greatRef}>
            <p className={visible? "Back hidden":"Back"} onClick={ShowMaps}>X</p>
                <PictureSlider source={source} visible={visible}></PictureSlider>
                <Loader visible={visible}modelpath={model}></Loader>
            </div>
        </div>
    )
    return(
        <div className="great" ref={greatRef}>
            <div className="pos" style={{width:size.width,height:size.height}} onResize={fix}>
                <img className={className} src={MarkerIMG} alt={"dispenser"} onClick={ShowMaps} ref={MarkerRef} style={{left:x,top:y}}/>
                <p className={visible? "Back hidden":"Back"} onClick={ShowMaps}>X</p>
                <PictureSlider source={source} visible={visible}></PictureSlider>
                <Loader visible={visible}modelpath={model}></Loader>
            </div>
        </div>
    )
}

export default Marker;
export type {};