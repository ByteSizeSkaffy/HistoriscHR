import React from "react"
import {setDataStateEx} from "./Maps";

type MyProps = {
    // using `interface` is also ok
    message: string;
  };
type MyState = {
     Markers:{ name: string; source: { path: string; year: string; }[]; x: string; y: string; model: string; }[]
    };

class MarkerData extends React.Component<MyProps, MyState> {
    
    static state: MyState = {
        Markers: [
            {"name":"WitteHuis_Rotterdam",
            "source":[
                {"path":require("./images/Pictures/WTH_4100_1899.jpg"),"year":"1899"},
                {"path":require("./images/Pictures/WTH_4029.jpg"),"year":"1912"},
                {"path":require("./images/Pictures/WTH_4100_1940.jpg"),"year":"1940"},
                {"path":require("./images/Pictures/WTH_now.jpg"),"year":"2023"}
                ],
            "x":"45.5%",
            "y":"33%",
            "model":"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb"},
            {"name":"De_hef",
            "source":[
              {"path":require("./images/Pictures/Hef_1928.jpg"),"year":"1928"},
              {"path":require("./images/Pictures/Hef_1978.jpg"),"year":"1978"},
              {"path":require("./images/Pictures/de-hef.jpeg"),"year":"2023"}
            ],
            "x":"52%",
            "y":"45%",
            "model":"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb"
            },
            {"name":"Stadhuis_Oud",
            "source":[
                {"path":require("./images/Pictures/Stadh_Oud_1607.jpg"),"year":"1607"},
                {"path":require("./images/Pictures/Stadh_Oud_1782.jpg"),"year":"1782"},
                {"path":require("./images/Pictures/Stadh_Oud_1867.jpg"),"year":"1867"}
            ],
            "x":"45%",
            "y":"22%",
            "model":"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb"}
            ]
    };
    static updateState(dataObj: { name: string; source: { path: string; year: string; }[]; x: string; y: string; model: string; }) {
        this.state.Markers.push(dataObj)
        console.log(this.state)
        this.updateExternalData(this.state.Markers)
    }
    static updateExternalData(mar: { name: string; source: { path: string; year: string; }[]; x: string; y: string; model: string; }[]){
        setDataStateEx(mar)
    }
        
}
export default MarkerData