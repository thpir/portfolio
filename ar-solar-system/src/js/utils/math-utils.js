export const TAU = Math.PI * 2;

export const deg2rad = (d) => (d * Math.PI) / 180;
export const rad2deg = (r) => (r * 180) / Math.PI;

export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
