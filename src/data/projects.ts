export type Project = {
  slug: string; title: string; shortDescription: string; description: string;
  coverImage: string; gallery: string[]; platform: string[]; genre: string;
  technology: string[]; services: string[]; year: string; featured: boolean;
  status: string; challenge: string; approach: string;
  built: string; features: string[]; technicalWork: string[]; outcome: string;
};

// Demo concepts only. Replace these records and images with verified portfolio work.
export const projects: Project[] = [
  {
    slug: 'neon-drifter', title: 'Neon Drifter', shortDescription: 'Arcade handling in a rain-soaked city circuit.',
    description: 'A focused mobile racing concept exploring readable controls, vehicle feel and short-session progression.',
    coverImage: '/images/project-neon.webp', gallery: ['/images/project-neon.webp', '/images/project-neon-detail-1.webp', '/images/project-neon-detail-2.webp'], platform: ['Mobile'], genre: '3D Racing',
    technology: ['Unity', 'C#'], services: ['Gameplay Programming', 'Optimization'], year: 'Demo', featured: true, status: 'Demo concept',
    challenge: 'Create responsive arcade handling that remains clear and satisfying on a touchscreen.',
    approach: 'Prototype the driving loop first, then tune input, camera response and feedback together.',
    built: 'A playable race loop, touch controls, camera system and modular track events.',
    features: ['Touch-friendly steering', 'Dynamic chase camera', 'Modular race events', 'Reusable vehicle tuning'],
    technicalWork: ['Vehicle controller architecture', 'Input abstraction', 'Object pooling', 'Mobile performance pass'],
    outcome: 'A presentation-ready demo concept designed to demonstrate our workflow, not a shipped client title.'
  },
  {
    slug: 'tiny-world', title: 'Tiny World', shortDescription: 'A compact platform adventure above the clouds.',
    description: 'A bright 3D prototype concept built around traversal, discovery and modular floating islands.',
    coverImage: '/images/project-platformer.webp', gallery: ['/images/project-platformer.webp', '/images/project-platformer-detail-1.webp', '/images/project-platformer-detail-2.webp'], platform: ['PC'], genre: '3D Platformer',
    technology: ['Unity', 'C#', 'Blender'], services: ['Game Prototyping', 'Level Implementation'], year: 'Demo', featured: true, status: 'Prototype concept',
    challenge: 'Make traversal feel playful while keeping a small environment easy to read.', approach: 'Block out movement and camera behavior before layering art and interactions.',
    built: 'A character controller, collectible loop, environmental triggers and modular island kit.', features: ['Responsive traversal', 'Collectible loop', 'Modular environments', 'Camera assists'],
    technicalWork: ['Character state machine', 'Camera collision', 'Reusable interaction system'], outcome: 'A compact demonstration of prototype-to-polish development.'
  },
  {
    slug: 'lost-signals', title: 'Lost Signals', shortDescription: 'A stealth encounter shaped by light and sound.',
    description: 'A moody gameplay concept for readable AI awareness, stealth routes and environmental storytelling.',
    coverImage: '/images/project-stealth.webp', gallery: ['/images/project-stealth.webp', '/images/project-stealth-detail-1.webp', '/images/project-stealth-detail-2.webp'], platform: ['PC'], genre: '3D Stealth',
    technology: ['Unity', 'C#'], services: ['Gameplay Programming', 'Game Systems'], year: 'Demo', featured: true, status: 'Demo concept',
    challenge: 'Communicate enemy awareness without pulling the player out of the atmosphere.', approach: 'Build perception states around consistent world cues and testable rules.',
    built: 'Patrol behaviors, distraction tools, awareness feedback and checkpoint flow.', features: ['AI perception states', 'Distraction system', 'Stealth feedback', 'Checkpoint flow'],
    technicalWork: ['Finite-state AI', 'Event-driven audio cues', 'Debug visualization'], outcome: 'A demo concept illustrating systemic gameplay implementation.'
  },
  {
    slug: 'orbit-defense', title: 'Orbit Defense', shortDescription: 'A compact strategy loop around an island outpost.',
    description: 'A WebGL-ready tower defense prototype concept focused on clear choices and reusable encounter data.',
    coverImage: '/images/project-defense.webp', gallery: ['/images/project-defense.webp', '/images/project-defense-detail-1.webp', '/images/project-defense-detail-2.webp'], platform: ['WebGL'], genre: '2D Strategy',
    technology: ['Unity', 'C#', 'WebGL'], services: ['Game Prototyping', 'WebGL'], year: 'Demo', featured: false, status: 'Prototype concept',
    challenge: 'Keep strategic decisions readable on a small playfield.', approach: 'Use data-driven waves and clear range, path and upgrade feedback.', built: 'Placement, targeting, waves and upgrade systems.',
    features: ['Data-driven waves', 'Tower upgrades', 'Readable targeting', 'Compact sessions'], technicalWork: ['ScriptableObject data', 'Pooling', 'WebGL build pass'], outcome: 'A flexible prototype foundation for browser playtesting.'
  },
  {
    slug: 'pixel-chef', title: 'Pixel Chef', shortDescription: 'A cheerful timing challenge for quick sessions.',
    description: 'A 2D cooking concept that tests queue management, input timing and reusable recipe content.',
    coverImage: '/images/project-chef.webp', gallery: ['/images/project-chef.webp', '/images/project-chef-detail-1.webp', '/images/project-chef-detail-2.webp'], platform: ['Mobile'], genre: '2D Casual',
    technology: ['Unity', 'C#', 'Aseprite'], services: ['UI Implementation', 'Gameplay Programming'], year: 'Demo', featured: false, status: 'Demo concept',
    challenge: 'Make a fast queue understandable without visual clutter.', approach: 'Prototype information hierarchy and timing feedback alongside core mechanics.', built: 'Order queues, recipe data, scoring and responsive HUD states.',
    features: ['Recipe system', 'Order queue', 'Timing feedback', 'Responsive UI'], technicalWork: ['Data-driven content', 'UI state management', 'Touch input'], outcome: 'A demo concept for clear mobile UI and short-session gameplay.'
  },
  {
    slug: 'shadow-protocol', title: 'Shadow Protocol', shortDescription: 'A tense action prototype in abandoned ruins.',
    description: 'A focused combat concept exploring enemy pressure, ability feedback and encounter pacing.',
    coverImage: '/images/project-shadow.webp', gallery: ['/images/project-shadow.webp', '/images/project-shadow-detail-1.webp', '/images/project-shadow-detail-2.webp'], platform: ['PC'], genre: '3D Action',
    technology: ['Unity', 'C#'], services: ['Gameplay Programming', 'Optimization'], year: 'Demo', featured: false, status: 'Prototype concept',
    challenge: 'Create pressure with a small set of reusable enemy behaviors.', approach: 'Build modular combat states, then tune readability and pacing.', built: 'Player abilities, enemy states, hit feedback and encounter sequencing.',
    features: ['Modular abilities', 'Enemy behavior states', 'Impact feedback', 'Encounter sequencing'], technicalWork: ['Combat architecture', 'Animation events', 'Profiling pass'], outcome: 'A prototype concept demonstrating modular action systems.'
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
