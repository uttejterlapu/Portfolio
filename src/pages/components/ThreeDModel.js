// src/components/ThreeDModel.js

import React, { useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';

// Extend the three.js objects to make them available in the JSX syntax
extend({ BoxGeometry, MeshStandardMaterial, Mesh });

const Box = () => {
  const meshRef = useRef();
  
  // Rotate the box continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry attach="geometry" args={[4, 4, 4]} />
      <meshStandardMaterial attach="material" color="#FFFFFF" />
    </mesh>
  );
};

const ThreeDModel = () => {
  return (
    <Canvas 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover'
      }}
      camera={{ position: [5, 5, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;
