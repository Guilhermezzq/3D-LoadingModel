import { OrbitControls } from "@react-three/drei";

import { Suspense } from "react";
import Model from "./Model";

import Bike  from "./Bike";




const Scene = () => {


  

  return (
    <>
       <directionalLight />
      <ambientLight intensity={2} />
      <OrbitControls />

      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}

      <Suspense
       fallback={

        <mesh scale={2} >
        <boxGeometry />
        <meshNormalMaterial wireframe 
        />
      </mesh>
       }
       
       >
        

        {/* {true ? <Model  /> : "" } */}
        <Model />
      </Suspense>

      <Bike 
      // scale={0.85}
      // position={[-0.5, 0.75, 0]}
       />
  
      
      
    </>
  );
};

export default Scene;
