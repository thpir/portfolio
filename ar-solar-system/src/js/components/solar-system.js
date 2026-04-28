/* global AFRAME */
import { PLANETS, SUN } from '../config/planets.js';
import { SETTINGS } from '../config/settings.js';

AFRAME.registerComponent('solar-system', {
  init() {
    this.buildSun();
    this.buildPlanets();
    if (SETTINGS.showOrbits) this.buildOrbitRings();
  },

  buildSun() {
    const sun = document.createElement('a-sphere');
    sun.setAttribute('id', 'sun');
    sun.setAttribute('radius', SUN.radius);
    sun.setAttribute('self-rotation', { speed: SUN.rotationSpeed });
    sun.setAttribute('light', 'type: point; intensity: 1.5; decay: 0');

    const material = { shader: 'flat' };
    if (SUN.texture) material.src = SUN.texture;
    else { material.color = SUN.color; material.emissive = SUN.emissive; material.emissiveIntensity = 1; }
    sun.setAttribute('material', material);

    this.el.appendChild(sun);
  },

  buildPlanets() {
    PLANETS.forEach((p, i) => {
      const orbiter = document.createElement('a-entity');
      orbiter.setAttribute('orbit', {
        distance: p.distance,
        speed:    p.orbitSpeed * SETTINGS.timeScale,
        angle:    (i / PLANETS.length) * Math.PI * 2,
      });

      const planet = document.createElement('a-sphere');
      planet.setAttribute('id', `planet-${p.name}`);
      planet.setAttribute('radius', p.radius);
      planet.setAttribute('self-rotation', { speed: p.rotationSpeed });
      planet.setAttribute('material', p.texture ? { src: p.texture } : { color: p.color });

      if (p.ring) planet.appendChild(this.buildRing(p.ring));

      orbiter.appendChild(planet);
      this.el.appendChild(orbiter);
    });
  },

  buildRing(ring) {
    const el = document.createElement('a-entity');
    el.setAttribute('radial-ring', {
      innerRadius: ring.innerRadius,
      outerRadius: ring.outerRadius,
    });
    el.setAttribute('rotation', '-90 0 0');

    const material = {
      side: 'double',
      shader: 'flat',
      opacity: ring.opacity ?? 1,
      transparent: true,
    };
    if (ring.texture) material.src = ring.texture;
    else material.color = ring.color;
    el.setAttribute('material', material);

    return el;
  },

  buildOrbitRings() {
    PLANETS.forEach((p) => {
      const ring = document.createElement('a-ring');
      ring.setAttribute('radius-inner', p.distance - 0.015);
      ring.setAttribute('radius-outer', p.distance + 0.015);
      ring.setAttribute('rotation', '-90 0 0');
      ring.setAttribute('color', SETTINGS.orbitColor);
      ring.setAttribute('material', 'side: double; shader: flat; opacity: 0.5; transparent: true');
      this.el.appendChild(ring);
    });
  },
});
