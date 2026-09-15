"use client";

import { Component, type ErrorInfo, type ReactNode, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { GlobeFallback } from "@/components/globe/GlobeFallback";
import { GlobeScene } from "@/components/globe/GlobeScene";
import { GlobeTooltip } from "@/components/globe/GlobeTooltip";
import type { GlobeLocation } from "@/types/globe";

const DESKTOP_GLOBE_QUERY = "(min-width: 1280px)";

function useDesktopGlobe() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_GLOBE_QUERY);
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}

export function Globe3D() {
  const reduceMotion = useReducedMotion();
  const interactive = useDesktopGlobe();
  const [hovered, setHovered] = useState<GlobeLocation | null>(null);

  return (
    <div className="globe-stage absolute inset-0 min-h-0 min-w-0 overflow-hidden">
      <CanvasErrorBoundary>
        <Canvas
          className="absolute inset-0 h-full w-full touch-pan-y"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
            pointerEvents: interactive ? "auto" : "none",
          }}
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
            const el = gl.domElement;
            el.style.width = "100%";
            el.style.height = "100%";
            el.style.display = "block";
            const syncSize = () => {
              const parent = el.parentElement;
              if (!parent || parent.clientWidth === 0 || parent.clientHeight === 0) {
                return;
              }
              gl.setSize(parent.clientWidth, parent.clientHeight, false);
            };
            syncSize();
            requestAnimationFrame(syncSize);
          }}
          frameloop={reduceMotion ? "demand" : "always"}
        >
          <GlobeScene
            interactive={interactive}
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
