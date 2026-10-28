import { Suspense, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Room } from "./Room";

function Particles({ count = 46 }) {
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const seed = index + 1;
      const x = Math.abs(Math.sin(seed * 12.9898) * 43758.5453) % 1;
      const y = Math.abs(Math.sin(seed * 78.233) * 12741.371) % 1;
      const z = Math.abs(Math.sin(seed * 39.425) * 9531.173) % 1;
      values[index * 3] = (x - 0.5) * 12;
      values[index * 3 + 1] = (y - 0.25) * 9;
      values[index * 3 + 2] = (z - 0.5) * 8;
    }
    return values;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#d8f7ff" size={0.035} transparent opacity={0.72} depthWrite={false} />
    </points>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <spotLight position={[2, 7, 7]} angle={0.22} intensity={75} penumbra={1} color="#ffffff" />
      <spotLight position={[-5, 5, 5]} angle={0.34} intensity={42} penumbra={1} color="#7c3aed" />
      <spotLight position={[5, 2, 4]} angle={0.35} intensity={38} penumbra={0.8} color="#22d3ee" />
      <pointLight position={[0, 2, -1]} intensity={8} color="#34d399" />
      <primitive
        object={new THREE.RectAreaLight("#60a5fa", 7, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
    </>
  );
}

function Scene() {
  const { viewport } = useThree();
  const scale = viewport.width < 6 ? 0.7 : viewport.width < 9 ? 0.84 : 0.98;

  return (
    <>
      <Lights />
      <Particles />
      <Float speed={1.1} rotationIntensity={0.05} floatIntensity={0.12}>
        <group scale={scale} position={[0, -3.45, 0]} rotation={[0, -Math.PI / 4, 0]}>
          <Room />
        </group>
      </Float>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4.8}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.45}
      />
    </>
  );
}

export default function HeroExperience() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 14.5], fov: 43 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
