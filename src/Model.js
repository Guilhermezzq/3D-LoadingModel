
// import { useLoader } from "@react-three/fiber";
import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";



const Model = () => {
  const model = useGLTF("./model/dog.glb");
  

  const  animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    animations.actions.Idle.play();
  }, []);
  
    // const model = useLoader(GLTFLoader, "./model/dog.glb");

    
  
    return ( <>  <primitive 
      position-y={0.4}
      object = {model.scene}

      />
  
    </>
  )
}

useGLTF.preload("./model/dog.glb");

export default Model;
