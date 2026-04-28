/* global AFRAME */

AFRAME.registerComponent('self-rotation', {
  schema: {
    speed: { type: 'number', default: 1 },
    axis:  { type: 'vec3',   default: { x: 0, y: 1, z: 0 } },
  },

  tick(time, deltaMs) {
    const dt = deltaMs / 1000;
    const r = this.el.object3D.rotation;
    r.x += this.data.axis.x * this.data.speed * dt;
    r.y += this.data.axis.y * this.data.speed * dt;
    r.z += this.data.axis.z * this.data.speed * dt;
  },
});
