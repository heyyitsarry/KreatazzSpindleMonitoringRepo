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
    // 🌐 Slow rotation for the whole spindle
    if (group.current) {
      group.current.rotation.y += 0.003; // outer model slow spin
      group.current.rotation.z = Math.PI / 2; // keep horizontal
    }

    // ⚙️ Fast rotation for shaft — try each axis to see which matches your model
    if (shaftRef.current) {
      // ✅ Try these one at a time:
      // shaftRef.current.rotation.x += 0.5; // if aligned on X-axis
      // shaftRef.current.rotation.y += 0.5; // if aligned on Y-axis
      shaftRef.current.rotation.y += 0.5; // if aligned on Z-axis
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]} scale={1.2}>
      <primitive object={scene} />
    </group>
  );
}
