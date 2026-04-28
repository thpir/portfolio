/* global AFRAME */

AFRAME.registerComponent('orbit', {
  schema: {
    distance: { type: 'number', default: 5 },
    speed:    { type: 'number', default: 1 },
    angle:    { type: 'number', default: 0 },
  },

  init() {
    this.angle = this.data.angle;
  },

  tick(time, deltaMs) {
    const dt = deltaMs / 1000;
    this.angle += this.data.speed * dt;
    const x = Math.cos(this.angle) * this.data.distance;
    const z = Math.sin(this.angle) * this.data.distance;
    this.el.object3D.position.set(x, 0, z);
  },
});
