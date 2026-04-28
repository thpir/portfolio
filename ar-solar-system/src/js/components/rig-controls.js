/* global AFRAME, THREE */

// Drives a camera rig from on-screen buttons that carry a `data-move`
// attribute (forward, backward, left, right, up, down). Buttons support
// press-and-hold via mouse and touch. Forward/right are aligned to the
// camera's current horizontal facing; up/down are world-axis.

AFRAME.registerComponent('rig-controls', {
  schema: {
    speed:    { type: 'number', default: 15 },
    selector: { type: 'string', default: '#controls' },
  },

  init() {
    this.move = { forward: 0, right: 0, up: 0 };
    this.forwardVec = new THREE.Vector3();
    this.rightVec   = new THREE.Vector3();

    const root = document.querySelector(this.data.selector);
    if (!root) return;
    root.querySelectorAll('button[data-move]').forEach((btn) => this.bindButton(btn));
  },

  bindButton(btn) {
    const dir = btn.dataset.move;
    const press   = () => this.setDirection(dir, 1);
    const release = () => this.setDirection(dir, 0);

    btn.addEventListener('mousedown', press);
    btn.addEventListener('mouseup', release);
    btn.addEventListener('mouseleave', release);
    btn.addEventListener('touchstart', (e) => { e.preventDefault(); press(); }, { passive: false });
    btn.addEventListener('touchend', release);
    btn.addEventListener('touchcancel', release);
  },

  setDirection(dir, value) {
    switch (dir) {
      case 'forward':  this.move.forward = -value; break;
      case 'backward': this.move.forward =  value; break;
      case 'right':    this.move.right   =  value; break;
      case 'left':     this.move.right   = -value; break;
      case 'up':       this.move.up      =  value; break;
      case 'down':     this.move.up      = -value; break;
    }
  },

  tick(time, deltaMs) {
    const m = this.move;
    if (!m.forward && !m.right && !m.up) return;

    const cameraEl = this.el.querySelector('[camera]');
    if (!cameraEl) return;

    const distance = this.data.speed * (deltaMs / 1000);
    const rig = this.el.object3D;

    cameraEl.object3D.getWorldDirection(this.forwardVec);
    this.forwardVec.y = 0;
    this.forwardVec.normalize();
    // Three's getWorldDirection points "into" the camera frustum, so it
    // already represents forward. Right = world-up × forward.
    this.rightVec.set(this.forwardVec.z, 0, -this.forwardVec.x);

    rig.position.addScaledVector(this.forwardVec, m.forward * distance);
    rig.position.addScaledVector(this.rightVec,   m.right   * distance);
    rig.position.y += m.up * distance;
  },
});
