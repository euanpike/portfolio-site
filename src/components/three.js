import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as React from "react"
import TypeIt from "typeit-react";
import * as THREE from 'three';

function Sphere(props) {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
  
    useFrame((state, delta) => (ref.current.rotation.y += 0.005));

    return(
      <mesh
        {...props}
        ref={ref}
        scale={1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
          <sphereGeometry args={[3, 30, 30]} />
          <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
          <Box position={new THREE.Vector3().setFromSphericalCoords(3 + .010, (Math.random() * (20 - 0) + 0) * (Math.PI / 180.0), Math.random() * Math.PI * 2)} />
          <Box position={new THREE.Vector3().setFromSphericalCoords(3 + .010, (Math.random() * (20 - 0) + 0) * (Math.PI / 180.0), Math.random() * Math.PI* 2)} />
          <Box position={new THREE.Vector3().setFromSphericalCoords(3 + .010, (Math.random() * (20 - 0) + 0) * (Math.PI / 180.0), Math.random() * Math.PI* 2)} />
          <Box position={new THREE.Vector3().setFromSphericalCoords(3 + .010, (Math.random() * (20 - 0) + 0) * (Math.PI / 180.0), Math.random() * Math.PI* 2)} />
          <Box position={new THREE.Vector3().setFromSphericalCoords(3 + .010, (Math.random() * (20 - 0) + 0) * (Math.PI / 180.0), Math.random() * Math.PI* 2)} />
          <Box position={new THREE.Vector3().setFromSphericalCoords(3 + .010, (Math.random() * (20 - 0) + 0) * (Math.PI / 180.0), Math.random() * Math.PI* 2)} />
          <Box position={new THREE.Vector3().setFromSphericalCoords(3 + .010, (Math.random() * (20 - 0) + 0) * (Math.PI / 180.0), Math.random() * Math.PI* 2)} />
        </mesh>
    )
}

function Box(props) {
  return(
    <mesh {...props}>
      <boxGeometry lookAt={[0, -3, 0]} args={[0.15, Math.random()*3*Math.random(), 0.15]} />
      <meshStandardMaterial color={'cyan'} />
    </mesh>
  )
}

const Top = () => {
 return (
    <div className="threeJS">
        <Canvas className="threeJS">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Sphere position={[0, -3, 0]} />
        </Canvas>
        <div id="info">
            <TypeIt>Hey there! I'm Euan.</TypeIt>
        </div>
    </div>
 );
}

export default Top