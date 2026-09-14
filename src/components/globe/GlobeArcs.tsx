"use client";

import { Line } from "@react-three/drei";
import { useMemo } from "react";
import { globeArcs, globeLocations } from "@/data/globe-locations";
import { GLOBE_RADIUS, createArcPoints, latLngToVector3 } from "@/lib/geo";
import { GLOBE_ACCENT } from "@/lib/globe-theme";

type GlobeArcsProps = {
  reducedMotion: boolean;
};

export function GlobeArcs({ reducedMotion }: GlobeArcsProps) {
  const locations = useMemo(
    () => new Map(globeLocations.map((location) => [location.id, location])),
    [],
  );

  const curves = useMemo(
    () =>
      globeArcs.flatMap((arc) => {
        const from = locations.get(arc.from);
        const to = locations.get(arc.to);
        if (!from || !to) {
          return [];
        }
        const start = latLngToVector3(
          from.latitude,
          from.longitude,
          GLOBE_RADIUS,
        );
        const end = latLngToVector3(to.latitude, to.longitude, GLOBE_RADIUS);
        return [
          {
            id: arc.id,
            points: createArcPoints(start, end, GLOBE_RADIUS),
          },
        ];
      }),
    [locations],
  );

  return (
    <group>
      {curves.map((curve) => (
        <Line
          key={curve.id}
          points={curve.points}
          color={GLOBE_ACCENT}
          lineWidth={1.15}
          transparent
          opacity={reducedMotion ? 0.35 : 0.55}
          dashed={!reducedMotion}
          dashSize={0.12}
          gapSize={0.08}
        />
      ))}
    </group>
  );
}
