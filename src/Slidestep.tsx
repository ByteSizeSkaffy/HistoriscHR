import App from './App';
import image1 from './images/maps/1936.jpg';
import image2 from './images/maps/1920.jpg';
import image3 from './images/maps/1903.jpg';
import {useRef,useState} from "react";
import './app.css';

function SlideStep(){
    const [map, setMap] = useState(image1);
    //Make variable to store the element
    //const varname=useRef<HTML[type]Element>(null)
    const MapRef=useRef<HTMLImageElement>(null)
    //
    const SlideRef=useRef<HTMLInputElement>(null)

    function SetClicked(ref:React.RefObject<HTMLImageElement>){
        if (ref.current?.className=="firstmap"){
            ref.current?.setAttribute("class","firstmapclicked")
            //use varname.current? to access the element (almost Identical to document.getElementByID)
            SlideRef.current?.classList.remove("hidden")
            //DO NOT FORGET THE ?, IT WILL BREAK OTHERWISE
        }
        else{ 
            ref.current?.setAttribute("class","firstmap")
            SlideRef.current?.classList.add("hidden")
        }
    }
    const MapOverlayRef=useRef<HTMLImageElement>(null)
    const MapThreeRef=useRef<HTMLImageElement>(null)
    function MapLogic(){
        if((Number(SlideRef.current?.valueAsNumber)<100)){
            MapOverlayRef.current?.classList.add("overlay")
            MapRef.current?.classList.remove("overlay")
        }
        else if (Number(SlideRef.current?.valueAsNumber)>=100 && Number(SlideRef.current?.valueAsNumber)<200){
            MapOverlayRef.current?.classList.remove("overlay")
            MapRef.current?.classList.add("overlay")
            MapThreeRef.current?.classList.add("overlay")
        }
        else if ((Number(SlideRef.current?.valueAsNumber)>=200 && (Number(SlideRef.current?.valueAsNumber)<=300))){
            MapThreeRef.current?.classList.remove("overlay")
            MapOverlayRef.current?.classList.add("overlay")
        }

    }
    
    //put ref={varname} in an element attribute list to Copy that element into the ref
    //Make sure the [type] of the element is the same as the [type] in the useRef<HTML[type]Element
    //<[type] className="Example" ref={varname}> <[type]/>
    return (<div className='mapgrid'>
        <div className="MapOverlayContainer">
            <img className="firstmapclicked overlay MapOverlay" src={image2} ref={MapOverlayRef} onClick={()=> SetClicked(MapOverlayRef)}></img>
        </div>
        <div className="MapOverlayContainer">
            <img className="firstmapclicked overlay MapOverlay" src={image3} ref={MapThreeRef} onClick={()=> SetClicked(MapThreeRef)}></img>
        </div>
        
        <img className="firstmap" src={map} onClick ={()=> SetClicked(MapRef)} alt="loading...." ref={MapRef}/>
        <div className="slideContainer">
            <input className='Slide hidden' type="range" defaultValue={1} min={1} max={300} ref={SlideRef} onInput={MapLogic}/>
        </div>
        <div className='maptitle'> 1936 </div>
        
    </div>)
}

export default SlideStep