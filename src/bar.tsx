import image1 from './images/maps/1936.jpg';
import image2 from './images/maps/1920.jpg';
import image3 from './images/maps/1903.jpg';
import App from './App';
import {useRef,useState} from "react";
import './app.css';

function Bar(){
    const [bar,setbar] =useState(image1);
    const barRef=useRef<HTMLInputElement>(null);
    const source=[image1,image2,image3];
    function handleSlide(){
        console.log(barRef.current!.valueAsNumber);
        setbar(source[barRef.current!.valueAsNumber]);
    }

    return <div className="mapgrid4" >      
        <img className="main" src={bar} alt="loading...." id="test" />
        <h3 className='maptitle'> bartest</h3>
        <div className="slidecontainer">
            <input className="slider" type="range" min="0" max="2" ref={barRef} onInput={() => handleSlide()}/>
        </div>
    </div>
}

export default Bar;