import React from 'react';
import image1 from './images/Pictures/2023.jpg';
import "./Addmarker.css"
import {useRef} from "react";
import MarkerIMG from "./images/Marker.png";
import Draggable, {DraggableCore} from "react-draggable";

function AddMarker(){

    const DragRef=useRef<HTMLImageElement>(null);
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', event.currentTarget.id);
    }
    
    return(
        <div>
            <div className='grid'>
                <img className="stuff" src={image1}></img>
                <input type="file"></input>
                <Draggable>
                    <img src={MarkerIMG} ref={DragRef} draggable="false" className='smaller'></img>
                </Draggable>
            </div>
        </div>
    )
}

export default AddMarker