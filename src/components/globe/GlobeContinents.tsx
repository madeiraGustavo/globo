"use client";

import { Suspense } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GLOBE_RADIUS } from "@/lib/geo";
import { GLOBE_ACCENT } from "@/lib/globe-theme";

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const LAND_TEXTURE_DESKTOP = assetPath("/globe/land-2048x1024.png");
const LAND_TEXTURE_COMPACT = assetPath("/globe/land-1024x512.png");

type GlobeContinentsProps = {
  compact: boolean;
};

export function GlobeContinents({ compact }: GlobeContinentsProps) {
  return (
    <Suspense fallback={null}>
      <LandSphere
        key={compact ? "compact" : "desktop"}
        compact={compact}
      />
    </Suspense>
  );
}

function applyLandTextureSettings(texture: THREE.Texture) {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
}

function LandSphere({ compact }: GlobeContinentsProps) {
  const texture = useTexture(
    compact ? LAND_TEXTURE_COMPACT : LAND_TEXTURE_DESKTOP,
    applyLandTextureSettings,
  );

  return (
    <mesh>
      <sphereGeometry args={[GLOBE_RADIUS, 96, 96]} />
      <meshStandardMaterial
        map={texture}
        color="#ffffff"
        metalness={0.28}
        roughness={0.62}
        emissive={GLOBE_ACCENT}
        emissiveMap={texture}
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}
