import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

function FloatingAvatar() {
  const avatarRef = useRef();
  
  // Bob up and down and rotate slowly
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    avatarRef.current.position.y = Math.sin(t * 2) * 0.2 + 1.5;
    avatarRef.current.rotation.y += 0.01;
    avatarRef.current.rotation.x = Math.sin(t) * 0.1;
  });

  return (
    <group ref={avatarRef}>
      {/* Head/Body Block */}
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FFE600" roughness={0.2} metalness={0.1} />
      </mesh>
      {/* Glasses/Visor */}
      <mesh position={[0, 0.2, 0.51]}>
        <boxGeometry args={[0.8, 0.3, 0.1]} />
        <meshStandardMaterial color="#080808" />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      <FloatingAvatar />

      {/* Main Platform */}
      <mesh position={[0, -0.25, 0]} receiveShadow>
        <cylinderGeometry args={[3, 3, 0.5, 32]} />
        <meshStandardMaterial color="#14b8a6" />
      </mesh>

      {/* Decorative Blocks (Other Users/Venues) */}
      <mesh position={[-1.5, 0.5, -1.5]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#FF5A1F" />
      </mesh>
      <mesh position={[2, 0.25, 1]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#FFFDF7" />
      </mesh>

      <ContactShadows
        position={[0, -0.49, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
      />

      {/* Restrict controls to an isometric-like view */}
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={0.5} 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.5}
      />
    </>
  );
}

export default function SpaceTeaser() {
  return (
    <div className="h-full w-full cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 40 }}>
        <Scene />
      </Canvas>
    </div>
  );
}