import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function SpindleModel() {
  const group = useRef();
  const shaftRef = useRef();
  const { scene, nodes } = useGLTF("/spindles.glb");

  useEffect(() => {
    if (nodes.MainShaft) {
      shaftRef.current = nodes.MainShaft;
    } else {
      console.warn("⚠️ MainShaft node not found in GLB.");
    }
  }, [nodes]);

  useFrame(() => {
    // ⚙️ Fast rotation for shaft only (axial rotation)
    if (shaftRef.current) {
      shaftRef.current.rotation.y += 0.5; // shaft spinning
    }
  });

  return (
    <group 
      ref={group} 
      position={[0, 0, 0]} 
      scale={1.5}
      rotation={[0, 0, Math.PI / 2]}  // Locked horizontal orientation
    >
      <primitive object={scene} />
    </group>
  );
}
