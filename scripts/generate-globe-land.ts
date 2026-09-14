/**
 * One-shot: Natural Earth → public/globe land PNGs.
 * Run: npx tsx scripts/generate-globe-land.ts
 * Not part of `next build`.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas, type SKRSContext2D } from "@napi-rs/canvas";
import { GLOBE_ACCENT } from "../src/lib/globe-theme";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LAND_JSON = path.join(ROOT, "scripts", "ne_110m_land.json");
const OUT_DIR = path.join(ROOT, "public", "globe");

const OUTPUTS = [
  { file: "land-2048x1024.png", width: 2048, height: 1024 },
  { file: "land-1024x512.png", width: 1024, height: 512 },
] as const;

type GeoPosition = [number, number];
type GeoRing = GeoPosition[];
type GeoPolygonCoords = GeoRing[];
type GeoMultiPolygonCoords = GeoPolygonCoords[];

type GeoGeometry =
  | { type: "Polygon"; coordinates: GeoPolygonCoords }
  | { type: "MultiPolygon"; coordinates: GeoMultiPolygonCoords };

type LandCollection = {
  type: "FeatureCollection";
  features: { type: "Feature"; geometry: GeoGeometry }[];
};

type LandPolygon = {
  outer: GeoRing;
  holes: GeoRing[];
};

async function main(): Promise<void> {
  const raw: unknown = JSON.parse(await readFile(LAND_JSON, "utf8"));
  const polygons = extractLandPolygons(parseLand(raw));

  await mkdir(OUT_DIR, { recursive: true });

  for (const output of OUTPUTS) {
    const canvas = createLandCanvas(polygons, output.width, output.height);
    const png = await canvas.encode("png");
    const dest = path.join(OUT_DIR, output.file);
    await writeFile(dest, png);
    console.log(`wrote ${path.relative(ROOT, dest)}`);
  }
}

function parseLand(data: unknown): LandCollection {
  if (!isRecord(data) || data.type !== "FeatureCollection") {
    throw new Error("Land GeoJSON must be a FeatureCollection");
  }

  if (!Array.isArray(data.features)) {
    throw new Error("Land GeoJSON is missing features");
  }

  return {
    type: "FeatureCollection",
    features: data.features.map((feature, index) => {
      if (!isRecord(feature) || feature.type !== "Feature") {
        throw new Error(`Feature ${index} is invalid`);
      }
      return {
        type: "Feature",
        geometry: parseGeometry(feature.geometry, index),
      };
    }),
  };
}

function parseGeometry(value: unknown, featureIndex: number): GeoGeometry {
  if (!isRecord(value) || typeof value.type !== "string") {
    throw new Error(`Feature ${featureIndex} has invalid geometry`);
  }

  if (value.type === "Polygon" && isPolygonCoords(value.coordinates)) {
    return { type: "Polygon", coordinates: value.coordinates };
  }

  if (
    value.type === "MultiPolygon" &&
    Array.isArray(value.coordinates) &&
    value.coordinates.every(isPolygonCoords)
  ) {
    return { type: "MultiPolygon", coordinates: value.coordinates };
  }

  throw new Error(
    `Feature ${featureIndex} has unsupported geometry ${value.type}`,
  );
}

function extractLandPolygons(collection: LandCollection): LandPolygon[] {
  return collection.features.flatMap((feature) =>
    geometryToPolygons(feature.geometry),
  );
}

function geometryToPolygons(geometry: GeoGeometry): LandPolygon[] {
  if (geometry.type === "Polygon") {
    return [ringsToPolygon(geometry.coordinates)];
  }

  return geometry.coordinates.map((polygon) => ringsToPolygon(polygon));
}

function ringsToPolygon(rings: GeoPolygonCoords): LandPolygon {
  const [outer, ...holes] = rings;
  return {
    outer: outer ?? [],
    holes,
  };
}

function createLandCanvas(
  polygons: LandPolygon[],
  width: number,
  height: number,
) {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#070908";
  context.fillRect(0, 0, width, height);

  context.fillStyle = "#152012";
  context.strokeStyle = GLOBE_ACCENT;
  context.lineWidth = 1.35;
  context.lineJoin = "round";
  context.lineCap = "round";

  for (const polygon of polygons) {
    drawPolygon(context, polygon, width, height);
  }

  return canvas;
}

function drawPolygon(
  context: SKRSContext2D,
  polygon: LandPolygon,
  width: number,
  height: number,
): void {
  context.beginPath();
  traceRing(context, polygon.outer, width, height);
  for (const hole of polygon.holes) {
    traceRing(context, hole, width, height);
  }
  context.closePath();
  context.fill("evenodd");
  context.stroke();
}

function traceRing(
  context: SKRSContext2D,
  ring: GeoRing,
  width: number,
  height: number,
): void {
  let previousX: number | null = null;

  ring.forEach(([longitude, latitude], index) => {
    const x = ((longitude + 180) / 360) * width;
    const y = ((90 - latitude) / 180) * height;

    if (index === 0 || previousX === null) {
      context.moveTo(x, y);
      previousX = x;
      return;
    }

    if (Math.abs(x - previousX) > width * 0.5) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }

    previousX = x;
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isPosition(value: unknown): value is GeoPosition {
  return (
    Array.isArray(value) &&
    value.length >= 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number"
  );
}

function isRing(value: unknown): value is GeoRing {
  return Array.isArray(value) && value.every(isPosition);
}

function isPolygonCoords(value: unknown): value is GeoPolygonCoords {
  return Array.isArray(value) && value.every(isRing);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
