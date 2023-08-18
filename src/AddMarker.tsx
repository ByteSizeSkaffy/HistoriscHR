import React from 'react';
import image1 from './images/Pictures/2023.jpg';
import "./Addmarker.css"
import {useRef,useState} from "react";
import MarkerIMG from "./images/Marker.png";
import Draggable, {DraggableCore} from "react-draggable";

function AddMarker(){

    const [rerender, setReRender] = useState(false);
    const refresh = ()=> {setReRender((rerender)=>!rerender);}
    const MrkXRef=useRef<HTMLInputElement>(null)
    function handleXcoOrd(){
        if (MrkXRef!=null && typeof(MrkXRef.current?.valueAsNumber)==="number"){
            return(MrkXRef.current?.valueAsNumber/10)
        }
    }
    const MrkYRef=useRef<HTMLInputElement>(null)
    function handleYcoOrd(){
        if (MrkYRef!=null && typeof(MrkYRef.current?.valueAsNumber)==="number"){
            return(MrkYRef.current?.valueAsNumber/10)
        }
    }
    return(
        <div>
            <div className='grid'>
                <div className='dragbox'>
                <img className="stuff" src={image1}></img>
                <img src={MarkerIMG} draggable="false" className='smaller' style={{top:`${MrkYRef.current?.valueAsNumber}%`,left:`${MrkXRef.current?.valueAsNumber}%`}}></img>
                
                </div>
                <div className='inputBox'>
                <input type='number' ref={MrkXRef} onInput={refresh} step="0.25" className='X'max="99" min="0"></input>
                <input type='number' ref={MrkYRef} onInput={refresh} step="0.5" className='Y'max="95" min="0"></input>
                <input type='file'></input>
                <input type='submit'></input>
                </div>
                
            </div>
        </div>
    )
}

export default AddMarker