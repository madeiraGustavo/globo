"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { GlobeArcs } from "@/components/globe/GlobeArcs";
import { GlobeContinents } from "@/components/globe/GlobeContinents";
import { GlobePoint } from "@/components/globe/GlobePoint";
import { globeLocations } from "@/data/globe-locations";
import { GLOBE_RADIUS } from "@/lib/geo";
import { GLOBE_ACCENT } from "@/lib/globe-theme";
import type { GlobeLocation } from "@/types/globe";

type GlobeSceneProps = {
  reducedMotion: boolean;
  onHover: (location: GlobeLocation | null) => void;
};

export function GlobeScene({ reducedMotion, onHover }: GlobeSceneProps) {
  const group = useRef<THREE.Group>(null);
  const [dragging, setDragging] = useState(false);
  const resumeTimer = useRef<number | null>(null);
  const { size } = useThree();
  const isMobile = size.width < 768;
  const particleCount = isMobile ? 16 : 42;

  useFrame((_, delta) => {
    if (!group.current || reducedMotion || dragging) {
      return;
    }
    group.current.rotation.y += delta * 0.07;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 2, 6]} intensity={1.15} color="#f2ffe0" />
      <pointLight position={[-3, -2, -4]} intensity={0.45} color={GLOBE_ACCENT} />
      <group ref={group}>
        <GlobeContinents compact={isMobile} />
        <mesh>
          <sphereGeometry args={[GLOBE_RADIUS + 0.01, 48, 48]} />
          <meshBasicMaterial
            color={GLOBE_ACCENT}
            wireframe
            transparent
            opacity={0.035}
          />
        </mesh>
        <mesh scale={1.12}>
          <sphereGeometry args={[GLOBE_RADIUS, 32, 32]} />
          <meshBasicMaterial
            color={GLOBE_ACCENT}
            transparent
            opacity={0.05}
            side={THREE.BackSide}
          />
        </mesh>
        {globeLocations.map((location) => (
          <GlobePoint
            key={location.id}
            location={location}
            onHover={onHover}
          />
        ))}
        <GlobeArcs reducedMotion={reducedMotion} />
      </group>
      {!reducedMotion ? <OrbitParticles count={particleCount} /> : null}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.42}
        autoRotate={false}
        onStart={() => {
          if (resumeTimer.current) {
            window.clearTimeout(resumeTimer.current);
          }
          setDragging(true);
        }}
        onEnd={() => {
          resumeTimer.current = window.setTimeout(() => {
            setDragging(false);
          }, 1600);
        }}
      />
    </>
  );
}

function unit(seed: number): number {
  const value = Math.sin(seed * 127.1) * 43758.5453;
  return value - Math.floor(value);
}

function OrbitParticles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = 2.1 + unit(index + 1) * 0.7;
      const phi = Math.acos(2 * unit(index + 19) - 1);
      const theta = unit(index + 37) * Math.PI * 2;
      data[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      data[index * 3 + 1] = radius * Math.cos(phi);
      data[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(data, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color={GLOBE_ACCENT}
        size={0.025}
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}
