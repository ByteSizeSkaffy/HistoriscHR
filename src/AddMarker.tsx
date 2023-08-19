import React from 'react';
import image1 from './images/Pictures/2023.jpg';
import "./Addmarker.css"
import {useRef,useState} from "react";
import MarkerIMG from "./images/Marker.png";
import PictureSlider from './PictureSlider';
import Loader from './3DLoader';
import * as fs from "fs";
import thedata from "./MarkerInfo.json"


function AddMarker(){
    const [visible,setVisible] = useState(true);
    const [adding,setAdd]=useState(false)
    const OpenPhotoWindow = ()=> {setAdd((adding)=>!adding)}
    const vis = ()=> {setVisible(true)}
    const [rerender, setReRender] = useState(false);
    const [nameValue,setnameValue] = useState('')
    const [sourceList, setSource] = useState([{"path":"","year":""}]);

    function addtoSource(){
        var image=value
        if (image!=null){
            var tempList=sourceList
            if (sourceList[0].path===""){tempList[0]={"path":image,"year":"1999"}}
            else{tempList.push({"path":image,"year":"1999"})}
            console.log(tempList)
            setSource(tempList)
        }
    }
    const refresh = ()=> {setReRender((rerender)=>!rerender);}
    const [MrkXValue,setMrkXV]=useState("20")
    const Xupdate = (e: React.ChangeEvent<HTMLInputElement>) => setMrkXV(e.target.value);
    const [MrkYValue,setMrkYV]=useState("10")
    const Yupdate = (e: React.ChangeEvent<HTMLInputElement>) => setMrkYV(e.target.value);

    function photoRender(){
        const returnList:JSX.Element[]=[]
        sourceList.forEach(image => {
            returnList.push(<img className="previewImage"src={image.path}></img>)
        });
        return (returnList)
    }

    

    const fileRef = useRef<HTMLInputElement>(null)
    function handleImgDisplay(){
        console.log("yes")
        console.log(fileRef.current?.value)
        console.log(sourceList)

        const dataObj=
        {"name":nameValue,
        "source":sourceList,
        "x":`${MrkXValue}%`,
        "y":`${MrkYValue}%`,
        "model":"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb"}
        
        console.log(dataObj)
        
        console.log(thedata)
        
        
    }
    function preview(){
        setVisible(!visible)
    }
    const [value,setValue] = useState('')
    const Oninput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const OnNameinput = (e: React.ChangeEvent<HTMLInputElement>) => setnameValue(e.target.value);
    return(
        <div>

            <div className='grid'>
                <div className='dragbox'>
                <img className="stuff" src={image1}></img>
                <img src={MarkerIMG} draggable="false" className='smaller' style={{top:`${MrkYValue}%`,left:`${MrkXValue}%`}}></img>
                
                </div>
                <div className={!visible?'inputBox hidden':"inputBox"}>
                    Name:
                    <input value={nameValue} onInput={OnNameinput}></input>
                    X-Coördinate:
                    <input type='number' value={MrkXValue} onInput={Xupdate} step="0.5" defaultValue={20} className='X'max="99" min="0"></input>
                    Y-Coördinate:
                    <input type='number' value={MrkYValue} onInput={Yupdate} step="1" defaultValue={10}className='Y'max="95" min="0"></input>
                    
                    <button onClick={OpenPhotoWindow}>addphoto</button>
                    <p></p>
                    <input type='submit' onSubmit={handleImgDisplay} onClick={handleImgDisplay} title='Add Marker' value="Add Marker"></input>
                    <button onClick={preview}>Preview</button>
                </div>
                <div className={visible? 'previewContainer hidden':"previewContainer"}>
                    <p className={visible? "Back hidden":"Back"} onClick={vis}>X</p>
                    <PictureSlider source={sourceList} visible={visible}></PictureSlider>
                    <Loader visible={visible}modelpath={"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb"}></Loader>
                </div>
                <div className={adding?'addBox':" hiddenaddBox"}>
                    Year the picture was taken in: 
                    <div className='yearBox'><input type="number"></input></div>
                    
                    Link to the file: 
                    <div className='linkBox'><input ref={fileRef} value={value} onInput={Oninput} name="Photos" ></input></div>
                    Pictures:
                    <div className='imageBox'>
                        {photoRender()}
                    </div>
                    <button onClick={() => {addtoSource();refresh()}}>Add</button>
                </div>
                
            </div>
        </div>
    )
}

export default AddMarker