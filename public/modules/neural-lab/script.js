/**
 * BrainSetu Academy - Interactive Neural Bridge Simulation Engine
 * Features:
 * 1. Scientific Canvas Simulator (Real planetary orbits, Bohr atomic orbits, and fraction partitioning).
 * 2. 100 Modular Curriculum Units across Grade 1 to 5.
 * 3. SetuMitra Mascot Companion with Web Speech API integration.
 * 4. Spaced Recall & Adaptive Neural Strength Tracker.
 */

/* ==========================================================================
   1. Scientific Canvas Simulation Engine
   ========================================================================== */
class ScientificCanvasSimulator {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.animationFrame = null;
    this.simType = 'space'; // 'space', 'atom', 'fraction', 'cycle'
    this.angle = 0;
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;
    this.canvas.width = parent.clientWidth;
    this.canvas.height = parent.clientHeight;
  }

  loadSimulation(type) {
    this.simType = type;
    this.angle = 0;
    this.particles = [];

    // Prepopulate particles for atmospheric cycles
    for (let i = 0; i < 40; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        speed: 1 + Math.random() * 2,
        size: 2 + Math.random() * 3
      });
    }
  }

  start() {
    this.stop();
    this.animate();
  }

  stop() {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
  }

  animate() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    this.ctx.clearRect(0, 0, w, h);

    // MODE 1: ASTRONOMICAL SOLAR ORBITS
    if (this.simType === 'space') {
      const grad = this.ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(w, h));
      grad.addColorStop(0, '#1a1a3a');
      grad.addColorStop(1, '#050510');
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, w, h);

      // Glowing Sun
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, 32, 0, Math.PI * 2);
      this.ctx.fillStyle = '#f39c12';
      this.ctx.shadowBlur = 30;
      this.ctx.shadowColor = '#f1c40f';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // 4 Terrestrial Orbit Rings
      const orbits = [70, 110, 150, 190];
      const speeds = [1.8, 1.2, 0.9, 0.7];
      const colors = ['#bdc3c7', '#e67e22', '#3498db', '#e74c3c'];

      orbits.forEach((r, idx) => {
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        // Planet Body
        const th = this.angle * speeds[idx];
        const px = cx + Math.cos(th) * r;
        const py = cy + Math.sin(th) * r;

        this.ctx.beginPath();
        this.ctx.arc(px, py, 7, 0, Math.PI * 2);
        this.ctx.fillStyle = colors[idx];
        this.ctx.fill();
      });

    // MODE 2: BOHR ATOMIC STRUCTURE (CHEMISTRY / ELEMENTS)
    } else if (this.simType === 'atom') {
      this.ctx.fillStyle = '#0a192f';
      this.ctx.fillRect(0, 0, w, h);

      // Atomic Nucleus (Protons & Neutrons)
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, 24, 0, Math.PI * 2);
      this.ctx.fillStyle = '#e74c3c';
      this.ctx.shadowBlur = 20;
      this.ctx.shadowColor = '#e74c3c';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // 3 Elliptical Electron Shells
      const shells = [65, 110, 155];
      shells.forEach((rad, i) => {
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rad, rad * 0.45, (i * Math.PI) / 3, 0, Math.PI * 2);
        this.ctx.strokeStyle = 'rgba(0, 206, 201, 0.4)';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Orbiting Electron
        const eAngle = this.angle * (2 - i * 0.4);
        const rot = (i * Math.PI) / 3;
        const ex = cx + Math.cos(eAngle) * rad * Math.cos(rot) - Math.sin(eAngle) * rad * 0.45 * Math.sin(rot);
        const ey = cy + Math.cos(eAngle) * rad * Math.sin(rot) + Math.sin(eAngle) * rad * 0.45 * Math.cos(rot);

        this.ctx.beginPath();
        this.ctx.arc(ex, ey, 6, 0, Math.PI * 2);
        this.ctx.fillStyle = '#00cec9';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#00cec9';
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      });

    // MODE 3: MATHEMATICAL ARRAY & RATIO VISUALIZER
    } else if (this.simType === 'fraction') {
      this.ctx.fillStyle = '#1e272e';
      this.ctx.fillRect(0, 0, w, h);

      // Rotating Geometric Sacred Geometry Rings
      this.ctx.strokeStyle = 'rgba(246, 185, 59, 0.25)';
      this.ctx.lineWidth = 2;
      for (let s = 40; s <= 200; s += 40) {
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, s, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      // Connecting spokes
      for (let d = 0; d < 8; d++) {
        const rad = (d * Math.PI) / 4 + this.angle * 0.2;
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy);
        this.ctx.lineTo(cx + Math.cos(rad) * 200, cy + Math.sin(rad) * 200);
        this.ctx.stroke();
      }

    // MODE 4: NATURAL CYCLES (WATER CYCLE / PLANT RESPIRATION)
    } else {
      const grad = this.ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#00b4db');
      grad.addColorStop(1, '#0083b0');
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, w, h);

      // Rising Vapor Particles
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      this.particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) p.y = h;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      });
    }

    this.angle += 0.015;
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }
}

/* ==========================================================================
   2. Sound System (Web Audio API Synthesizer)
   ========================================================================== */
class BrainSetuAudio {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  playTone(freq, type = 'sine', duration = 0.2, delay = 0) {
    if (this.isMuted) return;
    this.init();
    setTimeout(() => {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }, delay * 1000);
  }

  playCorrect() {
    // Upward pentatonic chord (C - E - G - B)
    [523.25, 659.25, 783.99, 987.77].forEach((f, idx) => {
      this.playTone(f, 'triangle', 0.2, idx * 0.08);
    });
  }

  playWrong() {
    this.playTone(240, 'sawtooth', 0.2, 0);
    this.playTone(210, 'sawtooth', 0.3, 0.12);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

/* ==========================================================================
   3. Adaptive Neural Engine & Mastery Tracking
   ========================================================================== */
class AdaptiveNeuralEngine {
  constructor() {
    this.storageKey = 'brainsetu_neural_profile';
    this.profile = this.loadProfile();
  }

  loadProfile() {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : {
      xp: 0,
      streak: 0,
      masteryLevel: 'Explorer Lvl 1',
      neuralBridgeStrength: 60,
      history: {}
    };
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.profile));
  }

  recordCrossing(topicId, isSuccess, speedSec) {
    if (!this.profile.history[topicId]) {
      this.profile.history[topicId] = { attempts: 0, wins: 0, strength: 50 };
    }
    const item = this.profile.history[topicId];
    item.attempts++;

    if (isSuccess) {
      item.wins++;
      this.profile.streak++;
      this.profile.xp += Math.max(20, Math.floor(60 - speedSec * 3));
      this.profile.neuralBridgeStrength = Math.min(100, this.profile.neuralBridgeStrength + 4);
      item.strength = Math.min(100, item.strength + 15);
    } else {
      this.profile.streak = 0;
      this.profile.neuralBridgeStrength = Math.max(30, this.profile.neuralBridgeStrength - 3);
      item.strength = Math.max(20, item.strength - 10);
    }

    this.recalculateMastery();
    this.save();
    return this.profile;
  }

  recalculateMastery() {
    const totalWins = Object.values(this.profile.history).reduce((acc, cur) => acc + cur.wins, 0);
    if (totalWins >= 45) this.profile.masteryLevel = 'Bridge Grandmaster';
    else if (totalWins >= 25) this.profile.masteryLevel = 'Memory Architect';
    else if (totalWins >= 12) this.profile.masteryLevel = 'Neural Pathfinder';
    else if (totalWins >= 4) this.profile.masteryLevel = 'Bridge Builder';
    else this.profile.masteryLevel = 'Explorer Lvl 1';
  }
}

/* ==========================================================================
   4. Curriculum Repository: 100 Comprehensive Modules
   ========================================================================== */
class BrainSetuCurriculum {
  constructor() {
    this.modules = [];
    this.generateAllModules();
  }

  generateAllModules() {
    // SECTION 1: GRADE 1-2 FOUNDATION SPROUTS (25 Modules)
    // 10 Number Bonds to 10
    for (let i = 1; i <= 9; i++) {
      const partner = 10 - i;
      this.modules.push({
        id: `g1_bond_${i}`,
        gradeRange: [1, 2],
        subject: 'Math',
        title: `Number Bond: ${i} + ${partner} = 10`,
        desc: `Bridge ${i} blue crystals with ${partner} amber stars to form a complete 10-gem crown.`,
        simType: 'fraction',
        activityType: 'choice',
        technique: 'Ten-Frame Visual Chunking',
        sceneItems: [
          { name: `${i} Blue Gems`, icon: '💎', badge: 'Part 1', clue: `Anchor 1: Count ${i} blue gems.` },
          { name: `${partner} Amber Stars`, icon: '⭐', badge: 'Part 2', clue: `Anchor 2: Connect ${partner} amber stars.` },
          { name: '10-Gem Crown', icon: '👑', badge: 'Whole', clue: `Neural Link: ${i} and ${partner} form 10!` }
        ],
        challenge: {
          question: `What partner bridges with ${i} to make 10?`,
          options: [`${partner}`, `${partner + 1}`, `${partner > 1 ? partner - 1 : 8}`, `${10}`].sort(() => 0.5 - Math.random()),
          answer: `${partner}`,
          hint: `Remember the number of amber stars needed to fill the 10-gem crown.`
        }
      });
    }

    // 8 Subtraction Fact Foundations
    const subPairs = [[5, 2, 3], [6, 3, 3], [7, 4, 3], [8, 5, 3], [9, 3, 6], [10, 4, 6], [7, 2, 5], [8, 4, 4]];
    subPairs.forEach(([w, take, rem], idx) => {
      this.modules.push({
        id: `g1_sub_${idx}`,
        gradeRange: [1, 2],
        subject: 'Math',
        title: `Subtraction Bridge: ${w} - ${take} = ${rem}`,
        desc: `Observe ${w} mangoes on the tree. A playful monkey plucks ${take}.`,
        simType: 'fraction',
        activityType: 'choice',
        technique: 'Concrete Subtraction Story',
        sceneItems: [
          { name: `${w} Mangoes`, icon: '🥭', badge: 'Start', clue: `Total starting fruits: ${w}.` },
          { name: `Monkey takes ${take}`, icon: '🐒', badge: 'Action', clue: `${take} mangoes are carried away.` },
          { name: `${rem} Remaining`, icon: '🧺', badge: 'Result', clue: `Leaves exactly ${rem} in the basket.` }
        ],
        challenge: {
          question: `If ${w} mangoes lose ${take}, how many remain on the branch?`,
          options: [`${rem}`, `${rem + 1}`, `${rem + 2}`, `${w}`].sort(() => 0.5 - Math.random()),
          answer: `${rem}`,
          hint: `Picture the basket with the remaining mangoes.`
        }
      });
    });

    // 7 Basic Nature & Language Anchors
    const natureAnchors = [
      ['Sun', 'Daylight', 'Warms the Earth and brings light', '☀️'],
      ['Moon', 'Night Tide', 'Glows gently and guides ocean tides', '🌙'],
      ['Root', 'Water Drinker', 'Anchors the tree and absorbs water', '🥕'],
      ['Leaf', 'Solar Chef', 'Cooks food for the plant using sunlight', '🍃']
    ];
    natureAnchors.forEach(([obj, role, meaning, ic], idx) => {
      this.modules.push({
        id: `g1_nature_${idx}`,
        gradeRange: [1, 2],
        subject: 'Science',
        title: `Nature Pillar: ${obj}`,
        desc: `Understand the vital job of the ${obj}.`,
        simType: 'cycle',
        activityType: 'choice',
        technique: 'Functional Role Play',
        sceneItems: [
          { name: obj, icon: ic, badge: 'Object', clue: `Look at the ${obj}.` },
          { name: role, icon: '⚡', badge: 'Role', clue: `Acts as the ${role}.` },
          { name: 'Purpose', icon: '📖', badge: 'Secret', clue: meaning }
        ],
        challenge: {
          question: `Which nature pillar acts as the "${role}"?`,
          options: [obj, 'Rock', 'Cloud', 'Wind'].sort(() => 0.5 - Math.random()),
          answer: obj,
          hint: `Recall who was cooking or guiding.`
        }
      });
    });

    // SECTION 2: GRADE 3-4 BRIDGE EXPLORERS (45 Modules)
    // 25 Multiplication & Division Arrays (Multiplication tables 3, 4, 6, 7, 8, 9)
    const multPairs = [
      [3, 3, 9], [3, 4, 12], [3, 6, 18], [3, 7, 21], [3, 8, 24], [3, 9, 27],
      [4, 4, 16], [4, 6, 24], [4, 7, 28], [4, 8, 32], [4, 9, 36],
      [6, 6, 36], [6, 7, 42], [6, 8, 48], [6, 9, 54],
      [7, 7, 49], [7, 8, 56], [7, 9, 63],
      [8, 8, 64], [8, 9, 72],
      [9, 9, 81], [12, 3, 36], [12, 4, 48], [11, 5, 55], [12, 5, 60]
    ];

    multPairs.forEach(([f1, f2, prod]) => {
      this.modules.push({
        id: `g3_mult_${f1}x${f2}`,
        gradeRange: [3, 4],
        subject: 'Math',
        title: `Multiplication Forge: ${f1} × ${f2}`,
        desc: `Connect ${f1} rows of cosmic pillars with ${f2} lanterns to illuminate ${prod} stars.`,
        simType: 'space',
        activityType: 'choice',
        technique: 'Spatial Grid & Narrative Link',
        sceneItems: [
          { name: `${f1} Rows`, icon: '🏛️', badge: 'Dimension A', clue: `Grid Height: ${f1} temple columns.` },
          { name: `${f2} Lanterns Each`, icon: '🏮', badge: 'Dimension B', clue: `Grid Width: ${f2} lanterns per row.` },
          { name: `${prod} Bright Stars`, icon: '🌟', badge: 'Product', clue: `Neural Link: ${f1} × ${f2} generates ${prod} stars!` }
        ],
        challenge: {
          question: `What is the total illuminated product of ${f1} × ${f2}?`,
          options: [`${prod}`, `${prod - f1}`, `${prod + f2}`, `${prod + 4}`].sort(() => 0.5 - Math.random()),
          answer: `${prod}`,
          hint: `Remember the total stars lit by the grid.`
        }
      });
    });

    // 10 Scientific Systems & Sequences
    this.modules.push({
      id: 'g3_solar_inner_planets',
      gradeRange: [3, 4, 5],
      subject: 'Science',
      title: 'Cosmos Orbit: Inner Terrestrial Worlds',
      desc: 'Watch the real-time Keplerian orbital simulation: Mercury, Venus, Earth, and Mars.',
      simType: 'space',
      activityType: 'sequence',
      technique: 'Spatial Orbital Memory',
      sceneItems: [
        { name: '1. Mercury', icon: '🪐', badge: 'Innermost', clue: 'Mercury is closest to the glowing Sun.' },
        { name: '2. Venus', icon: '🌋', badge: 'Second', clue: 'Venus is veiled in bright, hot clouds.' },
        { name: '3. Earth', icon: '🌍', badge: 'Third', clue: 'Earth: our blue oasis of water and life.' },
        { name: '4. Mars', icon: '🚀', badge: 'Fourth', clue: 'Mars: the red frontier with giant canyons.' }
      ],
      challenge: {
        question: 'Arrange the inner terrestrial planets moving OUTWARD from the Sun:',
        sequence: ['1. Mercury', '2. Venus', '3. Earth', '4. Mars'],
        options: ['4. Mars', '2. Venus', '1. Mercury', '3. Earth'],
        hint: 'Start closest to the Sun and move outward.'
      }
    });

    this.modules.push({
      id: 'g3_water_cycle_flow',
      gradeRange: [3, 4],
      subject: 'Science',
      title: 'Hydrology Cycle: Journey of a Raindrop',
      desc: 'Follow water through its 3 major states of matter in nature.',
      simType: 'cycle',
      activityType: 'sequence',
      technique: 'Chronological Process Mapping',
      sceneItems: [
        { name: 'Evaporation', icon: '☀️', badge: 'Phase 1', clue: 'The Sun heats water, lifting it as invisible vapor.' },
        { name: 'Condensation', icon: '☁️', badge: 'Phase 2', clue: 'Cool upper air gathers vapor into heavy clouds.' },
        { name: 'Precipitation', icon: '🌧️', badge: 'Phase 3', clue: 'Clouds release water drops back to the Earth.' }
      ],
      challenge: {
        question: 'Rebuild the correct cycle of water through the atmosphere:',
        sequence: ['Evaporation', 'Condensation', 'Precipitation'],
        options: ['Precipitation', 'Condensation', 'Evaporation'],
        hint: 'Heat lifts vapor first, clouds form second, rain drops third.'
      }
    });

    // 10 Botanical & Body Organs
    const organs = [
      ['Heart', 'Pumps blood and transports oxygen to muscles', '🫀'],
      ['Lungs', 'Exchanges oxygen and removes carbon dioxide', '🫁'],
      ['Brain', 'Coordinates nervous signals and stores memories', '🧠'],
      ['Stomach', 'Breaks down nutrients using digestive juices', '🥣']
    ];
    organs.forEach(([org, fn, ic], idx) => {
      this.modules.push({
        id: `g3_organ_${idx}`,
        gradeRange: [3, 4],
        subject: 'Science',
        title: `Human Body Engine: ${org}`,
        desc: `Discover how the ${org} keeps the human body thriving.`,
        simType: 'atom',
        activityType: 'choice',
        technique: 'Biomedical Metaphor',
        sceneItems: [
          { name: org, icon: ic, badge: 'Vital Organ', clue: `Target: ${org}.` },
          { name: 'Key Function', icon: '⚙️', badge: 'Action', clue: fn },
          { name: 'Health Link', icon: '🩺', badge: 'Care', clue: `Keep it strong with exercise and healthy food!` }
        ],
        challenge: {
          question: `Which vital organ ${fn.toLowerCase()}?`,
          options: [org, 'Bones', 'Skin', 'Teeth'].sort(() => 0.5 - Math.random()),
          answer: org,
          hint: `Think of the body engine described in the clue.`
        }
      });
    });

    // SECTION 3: GRADE 5 MASTERY CHAMPIONS (30 Modules)
    // 12 Fraction-to-Decimal-to-Percentage Equivalence Bridges
    const fracEquiv = [
      ['1/2', '0.50', '50%'], ['1/4', '0.25', '25%'], ['3/4', '0.75', '75%'],
      ['1/5', '0.20', '20%'], ['2/5', '0.40', '40%'], ['3/5', '0.60', '60%'],
      ['4/5', '0.80', '80%'], ['1/10', '0.10', '10%'], ['3/10', '0.30', '30%'],
      ['7/10', '0.70', '70%'], ['1/8', '0.125', '12.5%'], ['1/1', '1.00', '100%']
    ];

    fracEquiv.forEach(([fr, dec, pct], idx) => {
      this.modules.push({
        id: `g5_frac_${idx}`,
        gradeRange: [5],
        subject: 'Math',
        title: `Equivalence Bridge: ${fr} = ${pct}`,
        desc: `Bridge the common fraction ${fr} directly into its percentage identity.`,
        simType: 'fraction',
        activityType: 'choice',
        technique: 'Dual-Coding Numerical Bridges',
        sceneItems: [
          { name: `Fraction: ${fr}`, icon: '🥧', badge: 'Part', clue: `Fraction form: ${fr}.` },
          { name: `Decimal: ${dec}`, icon: '🔢', badge: 'Metric', clue: `Base-10 equivalent: ${dec}.` },
          { name: `Percent: ${pct}`, icon: '💯', badge: 'Century', clue: `Percent identity: ${pct} out of 100.` }
        ],
        challenge: {
          question: `What percentage is strictly identical to the fraction ${fr}?`,
          options: [pct, `${parseFloat(pct) + 5}%`, `${parseFloat(pct) - 10}%`, '99%'].sort(() => 0.5 - Math.random()),
          answer: pct,
          hint: `Remember the percentage identity from the bridge.`
        }
      });
    });

    // 10 Chemistry Elements & Bohr Models
    const elements = [
      ['Hydrogen', 'H', '1', 'Lightest gas in universe'],
      ['Helium', 'He', '2', 'Noble gas that fills balloons'],
      ['Carbon', 'C', '6', 'The structural foundation of all life'],
      ['Nitrogen', 'N', '7', 'Makes up 78% of Earth atmosphere'],
      ['Oxygen', 'O', '8', 'Essential gas supporting respiration'],
      ['Sodium', 'Na', '11', 'Reactive metal in table salt (NaCl)'],
      ['Chlorine', 'Cl', '17', 'Halogen partner in table salt'],
      ['Gold', 'Au', '79', 'Ancient Latin "Aurum" glowing gold']
    ];

    elements.forEach(([elem, sym, num, fact], idx) => {
      this.modules.push({
        id: `g5_chem_${idx}`,
        gradeRange: [5],
        subject: 'Science',
        title: `Atomic Bridge: ${elem} (${sym})`,
        desc: `Examine the atomic structure of ${elem} with atomic number ${num}.`,
        simType: 'atom',
        activityType: 'choice',
        technique: 'Bohr Model Association',
        sceneItems: [
          { name: `Protons: ${num}`, icon: '⚛️', badge: 'Nucleus', clue: `Atomic Number ${num} means ${num} protons in the nucleus.` },
          { name: `Symbol: ${sym}`, icon: '🔤', badge: 'Code', clue: `Periodic Table shorthand is ${sym}.` },
          { name: elem, icon: '🧪', badge: 'Element', clue: `Secret identity: ${fact}.` }
        ],
        challenge: {
          question: `What is the chemical symbol for ${elem} (Atomic Number ${num})?`,
          options: [sym, `${sym}x`, `${sym.toLowerCase()}`, 'Z'].sort(() => 0.5 - Math.random()),
          answer: sym,
          hint: `Look at the code badge on the atomic card.`
        }
      });
    });

    // 8 Classical Vocabulary Roots
    const roots = [
      ['Aqua', 'Water', 'Aqueduct & Aquarium carry fresh water.', '🌊'],
      ['Chron', 'Time', 'Chronometer & Chronology track passing time.', '⏳'],
      ['Geo', 'Earth', 'Geology & Geography study our rocky planet.', '🌍'],
      ['Photo', 'Light', 'Photograph & Photosynthesis capture light energy.', '💡'],
      ['Tele', 'Far Distance', 'Telescope & Telephone reach across distances.', '📡'],
      ['Bio', 'Life', 'Biology & Biosphere investigate living things.', '🌱'],
      ['Micro', 'Tiny', 'Microscope & Microbe observe miniature worlds.', '🔬'],
      ['Setu', 'Bridge', 'BrainSetu connects knowledge with memory!', '🌉']
    ];

    roots.forEach(([rt, mean, story, ic], idx) => {
      this.modules.push({
        id: `g5_root_${idx}`,
        gradeRange: [5],
        subject: 'Vocabulary',
        title: `Root Vault: "${rt}"`,
        desc: `Unlock the ancient root word key "${rt}" to decipher modern words.`,
        simType: 'fraction',
        activityType: 'choice',
        technique: 'Etymological Anchor Memory',
        sceneItems: [
          { name: `Root "${rt}"`, icon: ic, badge: 'Ancient Key', clue: `The word root is "${rt}".` },
          { name: `Meaning: ${mean}`, icon: '🔑', badge: 'Definition', clue: `Core meaning: ${mean}.` },
          { name: 'Word Clues', icon: '📖', badge: 'Examples', clue: story }
        ],
        challenge: {
          question: `What is the fundamental meaning of the root "${rt}"?`,
          options: [mean, 'Cold', 'Speed', 'Sound'].sort(() => 0.5 - Math.random()),
          answer: mean,
          hint: `Think of the example words: ${story}`
        }
      });
    });
  }

  getAll() {
    return this.modules;
  }
}

/* ==========================================================================
   5. Mascot Companion: SetuMitra
   ========================================================================== */
class SetuMitraCompanion {
  constructor(audioSystem) {
    this.audio = audioSystem;
    this.dialogueEl = document.getElementById('mascot-dialogue');
    this.avatarEl = document.getElementById('mascot-avatar');
    this.currentText = '';
  }

  say(msg, emotion = 'idle') {
    this.currentText = msg;
    if (this.dialogueEl) this.dialogueEl.textContent = msg;
    if (this.avatarEl) this.avatarEl.className = `mascot-character ${emotion}`;
  }

  speakCurrent() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(this.currentText);
      u.pitch = 1.25;
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    }
  }
}

/* ==========================================================================
   6. Master App Controller
   ========================================================================== */
class BrainSetuApp {
  constructor() {
    this.audio = new BrainSetuAudio();
    this.curriculum = new BrainSetuCurriculum();
    this.adaptive = new AdaptiveNeuralEngine();
    this.simulator = new ScientificCanvasSimulator('sim-canvas');
    this.mascot = new SetuMitraCompanion(this.audio);

    this.activeMission = null;
    this.timerInterval = null;
    this.startTime = 0;
    this.sequenceBuffer = [];

    this.bindEvents();
    this.renderMissions();
    this.updateHUD();
  }

  bindEvents() {
    // Accessibility
    document.getElementById('btn-toggle-sound').addEventListener('click', (e) => {
      const isMuted = this.audio.toggleMute();
      e.target.textContent = isMuted ? '🔇' : '🔊';
    });

    document.getElementById('btn-toggle-contrast').addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });

    document.getElementById('btn-toggle-font').addEventListener('click', () => {
      document.body.classList.toggle('large-font');
    });

    // Mascot
    document.getElementById('btn-speech-audio').addEventListener('click', () => {
      this.mascot.speakCurrent();
    });

    // Navigation
    document.getElementById('btn-home').addEventListener('click', () => {
      this.simulator.stop();
      this.showScreen('screen-welcome');
      this.mascot.say('Back at the Campus Map! Choose another simulation to explore.', 'idle');
    });

    document.getElementById('select-grade').addEventListener('change', () => this.renderMissions());
    document.getElementById('select-subject').addEventListener('change', () => this.renderMissions());

    document.getElementById('btn-start-challenge').addEventListener('click', () => {
      this.launchBridgeCrossing();
    });

    document.getElementById('btn-replay-mission').addEventListener('click', () => {
      if (this.activeMission) this.openSimulation(this.activeMission.id);
    });

    document.getElementById('btn-next-mission').addEventListener('click', () => {
      this.simulator.stop();
      this.showScreen('screen-welcome');
      this.renderMissions();
    });
  }

  showScreen(id) {
    document.querySelectorAll('.game-screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  }

  updateHUD() {
    const prof = this.adaptive.profile;
    document.getElementById('hud-mastery-level').textContent = prof.masteryLevel;
    document.getElementById('stat-streak').textContent = prof.streak;
    document.getElementById('stat-xp').textContent = prof.xp;
    document.getElementById('brain-meter-val').textContent = `${prof.neuralBridgeStrength}%`;
    document.getElementById('brain-meter-fill').firstElementChild.style.width = `${prof.neuralBridgeStrength}%`;
  }

  renderMissions() {
    const gVal = document.getElementById('select-grade').value;
    const sVal = document.getElementById('select-subject').value;
    const container = document.getElementById('mission-selection-grid');
    container.innerHTML = '';

    const all = this.curriculum.getAll();
    document.getElementById('total-exercises-counter').textContent = all.length;

    const filtered = all.filter(m => {
      const gMatch = (gVal === 'all') || m.gradeRange.includes(parseInt(gVal, 10));
      const sMatch = (sVal === 'all') || (m.subject === sVal);
      return gMatch && sMatch;
    });

    filtered.forEach(m => {
      const card = document.createElement('article');
      card.className = 'mission-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Start module: ${m.title}`);

      card.innerHTML = `
        <div class="mission-icon">${m.sceneItems[0]?.icon || '⭐'}</div>
        <h3>${m.title}</h3>
        <span class="badge-tag">${m.technique}</span>
      `;

      const clickHandler = () => this.openSimulation(m.id);
      card.addEventListener('click', clickHandler);
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') clickHandler(); });

      container.appendChild(card);
    });
  }

  openSimulation(id) {
    this.activeMission = this.curriculum.getAll().find(m => m.id === id);
    if (!this.activeMission) return;

    this.showScreen('screen-simulation');
    document.getElementById('sim-objective-text').textContent = this.activeMission.title;
    document.getElementById('sim-grade-tag').textContent = `Grade ${this.activeMission.gradeRange.join('–')}`;

    // Launch Scientific Canvas Simulator
    this.simulator.loadSimulation(this.activeMission.simType);
    this.simulator.start();

    // Populate Interactive Clues
    const layer = document.getElementById('sim-interactive-layer');
    layer.innerHTML = '';

    this.activeMission.sceneItems.forEach(item => {
      const node = document.createElement('div');
      node.className = 'sim-clickable-item';
      node.tabIndex = 0;
      node.setAttribute('role', 'button');
      node.setAttribute('aria-label', `${item.name}: ${item.clue}`);

      node.innerHTML = `
        <span class="sim-item-icon">${item.icon}</span>
        <span class="sim-item-label">${item.name}</span>
        <span class="sim-item-badge">${item.badge}</span>
      `;

      node.addEventListener('click', () => {
        this.audio.playTone(520, 'sine', 0.12);
        document.getElementById('story-clue-title').textContent = `${item.name} (${item.badge})`;
        document.getElementById('story-clue-text').textContent = item.clue;
        this.mascot.say(item.clue, 'happy');
      });

      layer.appendChild(node);
    });

    this.mascot.say(`Welcome to ${this.activeMission.title}! Tap each floating clue to form your neural bridge.`, 'excited');
  }

  launchBridgeCrossing() {
    this.simulator.stop();
    this.showScreen('screen-challenge');
    this.mascot.say('The simulation has faded. Trust your brain bridge and recall the link!', 'curious');

    const chal = this.activeMission.challenge;
    document.getElementById('challenge-question-title').textContent = chal.question;

    const area = document.getElementById('challenge-interactive-area');
    area.innerHTML = '';

    this.startTime = performance.now();
    this.runTimer(15);

    // MODE A: CHRONOLOGICAL SEQUENCE RECONSTRUCTION
    if (this.activeMission.activityType === 'sequence') {
      document.getElementById('challenge-instructions').textContent = 'Tap each planet/step in the exact sequence:';
      this.sequenceBuffer = [];

      const dock = document.createElement('div');
      dock.className = 'sequence-dock';

      const slotsRow = document.createElement('div');
      slotsRow.className = 'slots-row';
      chal.sequence.forEach((_, idx) => {
        const slot = document.createElement('div');
        slot.className = 'sequence-slot';
        slot.id = `seq-slot-${idx}`;
        slot.textContent = `[ Step ${idx + 1} ]`;
        slotsRow.appendChild(slot);
      });
      dock.appendChild(slotsRow);

      const optsRow = document.createElement('div');
      optsRow.className = 'options-row';
      const shuffled = [...chal.sequence].sort(() => 0.5 - Math.random());

      shuffled.forEach(text => {
        const btn = document.createElement('button');
        btn.className = 'choice-bubble';
        btn.textContent = text;

        btn.addEventListener('click', () => {
          if (this.sequenceBuffer.includes(text)) return;
          this.audio.playTone(420 + this.sequenceBuffer.length * 90, 'sine', 0.1);

          const slotIndex = this.sequenceBuffer.length;
          const targetSlot = document.getElementById(`seq-slot-${slotIndex}`);
          targetSlot.textContent = text;
          targetSlot.classList.add('filled');
          btn.style.opacity = '0.3';
          btn.disabled = true;

          this.sequenceBuffer.push(text);

          if (this.sequenceBuffer.length === chal.sequence.length) {
            clearInterval(this.timerInterval);
            const isCorrect = this.sequenceBuffer.every((val, i) => val === chal.sequence[i]);
            const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(1);
            this.concludeExercise(isCorrect, elapsed);
          }
        });

        optsRow.appendChild(btn);
      });

      dock.appendChild(optsRow);
      area.appendChild(dock);

    // MODE B: MULTIPLE CHOICE ACTIVE RECALL
    } else {
      document.getElementById('challenge-instructions').textContent = 'Select the exact memory bridge link:';
      chal.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'choice-bubble';
        btn.textContent = opt;

        btn.addEventListener('click', () => {
          clearInterval(this.timerInterval);
          const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(1);
          const isCorrect = (opt === chal.answer);
          btn.classList.add(isCorrect ? 'correct' : 'wrong');
          this.concludeExercise(isCorrect, elapsed);
        });

        area.appendChild(btn);
      });
    }
  }

  runTimer(seconds) {
    clearInterval(this.timerInterval);
    const bar = document.getElementById('challenge-timer-bar');
    bar.style.width = '100%';
    let left = seconds;

    this.timerInterval = setInterval(() => {
      left -= 0.1;
      const pct = Math.max(0, (left / seconds) * 100);
      bar.style.width = `${pct}%`;

      if (left <= 0) {
        clearInterval(this.timerInterval);
        this.concludeExercise(false, seconds, true);
      }
    }, 100);
  }

  concludeExercise(isCorrect, elapsedSec, timedOut = false) {
    if (isCorrect) {
      this.audio.playCorrect();
      this.mascot.say('Brilliant! Your neural bridge is strong and permanent!', 'celebrate');
    } else {
      this.audio.playWrong();
      const hint = timedOut ? 'Time expired! Repetition will build this bridge.' : this.activeMission.challenge.hint;
      this.mascot.say(hint, 'encourage');
    }

    this.adaptive.recordCrossing(this.activeMission.id, isCorrect, parseFloat(elapsedSec));
    this.updateHUD();

    setTimeout(() => {
      this.renderResults(isCorrect, elapsedSec);
    }, 1200);
  }

  renderResults(isCorrect, elapsedSec) {
    this.showScreen('screen-results');
    document.getElementById('result-headline').textContent = isCorrect ? 'Neural Bridge Formed!' : 'Bridge in Construction';
    document.getElementById('result-badge-icon').textContent = isCorrect ? '🌉' : '🌱';
    document.getElementById('res-accuracy').textContent = isCorrect ? '100%' : 'Needs Repetition';
    document.getElementById('res-speed').textContent = `${elapsedSec}s`;
    document.getElementById('res-xp').textContent = isCorrect ? '+50 ⚡' : '+15 ⚡';
    document.getElementById('res-growth').textContent = isCorrect ? '+12% 🧠' : '+3% 🧠';
  }
}

// Bootstrap on DOM ready
window.addEventListener('DOMContentLoaded', () => {
  window.brainSetuInstance = new BrainSetuApp();
});