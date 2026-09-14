import * as THREE from "three";

export const GLOBE_RADIUS = 1.6;

export function latLngToVector3(
  latitude: number,
  longitude: number,
  radius: number,
): THREE.Vector3 {
  const phi = (90 - latitude) * (Math.PI / 180);
  const theta = (longitude + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

export function createArcPoints(
  start: THREE.Vector3,
  end: THREE.Vector3,
  radius: number,
  segments = 32,
): THREE.Vector3[] {
  const mid = start.clone().add(end).multiplyScalar(0.5);
  const altitude = Math.max(radius * 1.28, mid.length() * 1.45);
  mid.normalize().multiplyScalar(altitude);

  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  return curve.getPoints(segments);
}

export function vector3ToLatLng(point: THREE.Vector3): {
  latitude: number;
  longitude: number;
} {
  const radius = point.length() || 1;
  const latitude = Math.asin(THREE.MathUtils.clamp(point.y / radius, -1, 1)) * (180 / Math.PI);
  const longitude = Math.atan2(point.z, -point.x) * (180 / Math.PI) - 180;

  return { latitude, longitude };
}
