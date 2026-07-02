"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Group } from "three";

function ArchitecturalSculpture() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(performance.now() * 0.0003) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.6, 1.6, 1.6]} />
          <MeshDistortMaterial
            color="#F4E8C1"
            roughness={0.25}
            metalness={0.15}
            distort={0.12}
            speed={1.2}
          />
        </mesh>
      </Float>

      <mesh position={[0, 0, 0]} scale={1.02}>
        <boxGeometry args={[1.62, 1.62, 1.62]} />
        <meshStandardMaterial
          color="#C6A76A"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#F4E8C1" />
      <ArchitecturalSculpture />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="relative h-[320px] w-full sm:h-[380px] lg:h-full lg:min-h-[480px]">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        className="!h-full !w-full"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
