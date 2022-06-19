import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as React from "react"
import TypeIt from "typeit-react";
import * as THREE from 'three';

const deg2rad = (degrees) => degrees * (Math.PI / 180);

function Sphere(props) {
    const ref = useRef();
    const items = [];
    let i = 0;
    while (i < 100) {
      items.push(<Box position={new THREE.Vector3().setFromSphericalCoords(4 + .010, (Math.random() * (18 - 0) + 0) * (Math.PI / 180.0), Math.random() * Math.PI * 2)} />)
      i++;
    }
  
    useFrame((state, delta) => (ref.current.rotation.y += 0.003));

    return(
      <mesh
        {...props}
        ref={ref}
        scale={1}
      >
        <sphereGeometry args={[4, 30, 30]} />
        <meshStandardMaterial color={'orange'} />
        {items}
      </mesh>
    )
}

function Box(props) {
  return(
    <mesh {...props}>
      <boxGeometry lookAt={[0, -3, 0]} args={[0.15, Math.random()*1.5, 0.15]} />
      <meshStandardMaterial color={'cyan'} />
    </mesh>
  )
}

const Top = () => {
  return (
      <div className="threeJS border-b-4">
          <Canvas >
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Sphere position={[0, -4.5, 1]} />
          </Canvas>
          <div id="info">
              <TypeIt className="text-7xl font=['Roboto'] text-center">Hey there, I'm Euan!</TypeIt>
          </div>
      </div>
  );
}

export default Top