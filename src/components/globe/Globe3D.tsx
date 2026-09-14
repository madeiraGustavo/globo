"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import { GlobeFallback } from "@/components/globe/GlobeFallback";
import { GlobeScene } from "@/components/globe/GlobeScene";
import { GlobeTooltip } from "@/components/globe/GlobeTooltip";
import type { GlobeLocation } from "@/types/globe";

export function Globe3D() {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<GlobeLocation | null>(null);

  return (
    <div className="relative h-full min-h-[320px] w-full">
      <CanvasErrorBoundary>
        <Canvas
          className="h-full w-full touch-none"
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          camera={{ position: [0, 0.35, 4.7], fov: 42 }}
          fallback={<GlobeFallback />}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          frameloop={reduceMotion ? "demand" : "always"}
        >
          <GlobeScene
            reducedMotion={Boolean(reduceMotion)}
            onHover={setHovered}
          />
        </Canvas>
      </CanvasErrorBoundary>
      <GlobeTooltip location={hovered} />
    </div>
  );
}

type BoundaryProps = { children: ReactNode };

type BoundaryState = { hasError: boolean };

class CanvasErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { hasError: false };

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Globe 3D failed", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <GlobeFallback />;
    }
    return this.props.children;
  }
}
