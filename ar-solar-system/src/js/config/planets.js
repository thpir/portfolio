export const SUN = {
  radius: 2,
  color: '#ffcc33',
  emissive: '#ffaa00',
  rotationSpeed: 0.1,
  texture: '#tex-sun',
};

export const PLANETS = [
  { name: 'mercury', radius: 0.30, distance: 4,  orbitSpeed: 1.60, rotationSpeed: 0.05, color: '#8c7853', texture: '#tex-mercury' },
  { name: 'venus',   radius: 0.50, distance: 6,  orbitSpeed: 1.20, rotationSpeed: 0.04, color: '#e8c07d', texture: '#tex-venus'   },
  { name: 'earth',   radius: 0.55, distance: 8,  orbitSpeed: 1.00, rotationSpeed: 1.00, color: '#3a7bd5', texture: '#tex-earth'   },
  { name: 'mars',    radius: 0.40, distance: 10, orbitSpeed: 0.80, rotationSpeed: 0.95, color: '#c1440e', texture: '#tex-mars'    },
  { name: 'jupiter', radius: 1.60, distance: 14, orbitSpeed: 0.43, rotationSpeed: 2.40, color: '#d8a47f', texture: '#tex-jupiter' },
  {
    name: 'saturn', radius: 1.30, distance: 18, orbitSpeed: 0.32, rotationSpeed: 2.30, color: '#e3c887',
    texture: '#tex-saturn',
    ring: {
      innerRadius: 1.6, outerRadius: 2.8, color: '#c9a66b', opacity: 0.9,
      texture: '#tex-saturn-ring',
    },
  },
  { name: 'uranus',  radius: 0.90, distance: 22, orbitSpeed: 0.22, rotationSpeed: 1.40, color: '#7de2fc', texture: '#tex-uranus'  },
  { name: 'neptune', radius: 0.85, distance: 26, orbitSpeed: 0.18, rotationSpeed: 1.50, color: '#4166f5', texture: '#tex-neptune' },
];
