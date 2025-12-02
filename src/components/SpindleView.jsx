import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SpindleModel from "./SpindleModel";

export default function SpindleView() {
  return (
    <Canvas 
      camera={{ 
        position: [0, 0, 10],  // Perfectly straight-on view, no elevation
        fov: 45 
      }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 5, 10]} intensity={1.2} />
      <directionalLight position={[-10, -3, 5]} intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={0.4} />  {/* Top light for chiller/lubricant */}
      <Suspense fallback={null}>
        <SpindleModel />
      </Suspense>
      {/* Locked OrbitControls - rotation disabled, only zoom allowed */}
      <OrbitControls 
        enableRotate={false}      // Disable rotation completely
        enablePan={false}          // Disable panning
        enableZoom={true}          // Allow zoom only
        minDistance={6}            // Minimum zoom distance
        maxDistance={15}           // Maximum zoom distance
        target={[0, 0, 0]}         // Look at center
      />
    </Canvas>
  );
}
