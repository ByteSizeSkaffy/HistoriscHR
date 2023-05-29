import React from 'react';
import {useState,useRef} from 'react';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

type LoaderProps={
  visible: boolean;
  modelpath: string; 
}

const Loader: React.FC<LoaderProps> = ({visible, modelpath}) => {
  const mesh = useLoader(GLTFLoader, modelpath);
  return(
      <div className={visible? "hidden":""}>
      <Canvas>
        <Suspense fallback={null}>
          <primitive 
            object={mesh.scene}
            rotation={[0, -Math.PI / 2, 0]}
            position={[0, -3, -1]}
            scale={0.4} 
          />
          <Environment preset="sunset" />
          <OrbitControls 
            enableDamping={true}
            enableZoom={false}
            panSpeed={0.01}
            minAzimuthAngle={-Math.PI / 7} // -26 degrees in radians
            maxAzimuthAngle={Math.PI / 7} // 26 degrees in radians
            minPolarAngle={(Math.PI / 180) * 35} // 26 degrees in radians
            maxPolarAngle={(Math.PI / 180) * 125} // 275 degrees in radians (360 - 85)
          />
        </Suspense>
      </Canvas>
      </div>
  )
}
export default Loader;