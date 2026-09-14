"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { GLOBE_RADIUS, latLngToVector3 } from "@/lib/geo";
import { GLOBE_ACCENT } from "@/lib/globe-theme";
import type { GlobeLocation } from "@/types/globe";

const POINT_RADIUS = GLOBE_RADIUS + 0.02;

type GlobePointProps = {
  location: GlobeLocation;
  onHover: (location: GlobeLocation | null) => void;
};

export function GlobePoint({ location, onHover }: GlobePointProps) {
  const ring = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const position = useMemo(
    () =>
      latLngToVector3(location.latitude, location.longitude, POINT_RADIUS),
    [location.latitude, location.longitude],
  );
  const scale = location.featured ? 1.35 : 1;

  useFrame(({ clock }) => {
    if (!ring.current || !location.featured) {
      return;
    }
    const pulse = 1 + Math.sin(clock.elapsedTime * 2) * 0.25;
    ring.current.scale.setScalar(pulse);
  });

  return (
    <group position={position}>
      <mesh
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
          onHover(location);
        }}
        onPointerOut={(event) => {
          event.stopPropagation();
          setHovered(false);
          onHover(null);
        }}
      >
        <sphereGeometry args={[0.028 * scale, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#ffffff" : GLOBE_ACCENT} />
      </mesh>
      {location.featured ? (
        <mesh ref={ring}>
          <ringGeometry args={[0.05, 0.065, 24]} />
          <meshBasicMaterial
            color={GLOBE_ACCENT}
            transparent
            opacity={0.45}
            side={THREE.DoubleSide}
          />
        </mesh>
      ) : null}
    </group>
  );
}
