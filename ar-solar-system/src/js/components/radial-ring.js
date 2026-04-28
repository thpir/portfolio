/* global AFRAME, THREE */

// Flat ring with radial UV mapping: u runs from inner radius (0) to outer
// radius (1), v wraps around the circumference. A horizontal strip texture
// is therefore swept around the axis instead of being projected from above.

AFRAME.registerComponent('radial-ring', {
  schema: {
    innerRadius: { type: 'number', default: 1 },
    outerRadius: { type: 'number', default: 2 },
    segments:    { type: 'number', default: 96 },
  },

  init() {
    this.buildMesh();
  },

  update(oldData) {
    if (!oldData || Object.keys(oldData).length === 0) return;
    this.el.removeObject3D('mesh');
    this.buildMesh();
  },

  remove() {
    this.el.removeObject3D('mesh');
  },

  buildMesh() {
    const { innerRadius, outerRadius, segments } = this.data;
    const geom = new THREE.RingGeometry(innerRadius, outerRadius, segments);

    const uv = geom.attributes.uv;
    const pos = geom.attributes.position;
    const span = outerRadius - innerRadius;

    for (let i = 0; i < uv.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const r = Math.sqrt(x * x + y * y);
      const theta = Math.atan2(y, x);
      const u = (r - innerRadius) / span;
      const v = (theta + Math.PI) / (Math.PI * 2);
      uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;

    const mesh = new THREE.Mesh(geom, new THREE.MeshBasicMaterial());
    this.el.setObject3D('mesh', mesh);
  },
});
