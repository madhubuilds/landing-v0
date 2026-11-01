import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

// 1. Avatar Scene (Close up, rotating)
function AvatarModel() {
  const avatarRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    avatarRef.current.position.y = Math.sin(t * 3) * 0.1;
    avatarRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={avatarRef}>
      <mesh castShadow>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#FFE600" roughness={0.2} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 0.3, 0.76]}>
        <boxGeometry args={[1.2, 0.4, 0.1]} />
        <meshStandardMaterial color="#080808" />
      </mesh>
    </group>
  );
}

export function AvatarScene() {
  return (
    <Canvas shadows camera={{ position: [3, 2, 4], fov: 45 }} dpr={[1, 2]}>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <AvatarModel />
      <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={5} blur={2} />
      <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

// 2. Open Space Scene (Plaza with multiple users)
function PlazaModel() {
  const user1 = useRef();
  const user2 = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    user1.current.position.y = Math.sin(t * 4) * 0.1 + 0.3;
    user2.current.position.y = Math.cos(t * 3.5) * 0.1 + 0.3;
  });

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[3, 3, 0.2, 8]} />
        <meshStandardMaterial color="#14b8a6" />
      </mesh>
      {/* Users */}
      <mesh ref={user1} position={[-1, 0.3, 1]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#FFE600" />
      </mesh>
      <mesh ref={user2} position={[1.5, 0.3, -0.5]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#FF5A1F" />
      </mesh>
      <mesh position={[-0.5, 0.25, -1.5]} castShadow>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#FFFDF7" />
      </mesh>
    </group>
  );
}

export function OpenSpaceScene() {
  return (
    <Canvas shadows camera={{ position: [5, 4, 5], fov: 45 }} dpr={[1, 2]}>
      <Environment preset="city" />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <PlazaModel />
      <ContactShadows position={[0, -0.3, 0]} opacity={0.4} scale={8} blur={2} />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  );
}

// 3. Personal Space Scene (A cozy corner plot)
function RoomModel() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Floor */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[3.1, 0.2, 3.1]} />
        <meshStandardMaterial color="#E5E7EB" />
      </mesh>
      {/* Walls */}
      <mesh position={[-1.4, 1, 0]} receiveShadow>
        <boxGeometry args={[0.2, 2, 3]} />
        <meshStandardMaterial color="#FF5A1F" />
      </mesh>
      <mesh position={[0, 1, -1.4]} receiveShadow>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshStandardMaterial color="#FF5A1F" />
      </mesh>
      {/* Furniture (Desk/Pedestal) */}
      <mesh position={[0.5, 0.4, -0.8]} castShadow>
        <boxGeometry args={[1.5, 0.8, 0.8]} />
        <meshStandardMaterial color="#14b8a6" />
      </mesh>
      {/* Trophy/Item */}
      <mesh position={[0.5, 1, -0.8]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
        <meshStandardMaterial color="#FFE600" />
      </mesh>
    </group>
  );
}

export function PersonalSpaceScene() {
  return (
    <Canvas shadows camera={{ position: [4, 3, 4], fov: 45 }} dpr={[1, 2]}>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 2]} intensity={1} castShadow />
      <RoomModel />
      <ContactShadows position={[0, -0.55, 0]} opacity={0.4} scale={5} blur={1} />
      <OrbitControls autoRotate autoRotateSpeed={0.3} enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.5} />
    </Canvas>
  );
}