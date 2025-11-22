#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration - matches FloralBackground.tsx
const CONFIG = {
  STATIC_FLOWER_COUNT: 12,
  GROW_FLOWER_COUNT: 24,
  STATIC_SIZE_RANGE: { min: 85, max: 110 },
  GROW_SIZE_RANGE: { min: 120, max: 150 },
  STATIC_OPACITY_RANGE: { min: 0.4, max: 0.6 },
  GROW_OPACITY_RANGE: { min: 0.5, max: 0.7 },
  SCROLL_TRIGGER_START: 10,
  SCROLL_TRIGGER_END: 80,
  POSITION_MARGIN: 5, // Margin from edges (in percentage)
  GRID_COLS: 6, // Number of columns in grid
  GRID_ROWS: 6, // Number of rows in grid
}

// Utility functions
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max, decimals = 2) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

const randomChoice = (array) => array[Math.floor(Math.random() * array.length)];

// Grid-based distribution for even spacing
const createGrid = () => {
  const totalFlowers = CONFIG.STATIC_FLOWER_COUNT + CONFIG.GROW_FLOWER_COUNT;
  const zones = [];

  const usableWidth = 100 - (2 * CONFIG.POSITION_MARGIN);
  const usableHeight = 100 - (2 * CONFIG.POSITION_MARGIN);

  const zoneWidth = usableWidth / CONFIG.GRID_COLS;
  const zoneHeight = usableHeight / CONFIG.GRID_ROWS;

  // Create all zones
  for (let row = 0; row < CONFIG.GRID_ROWS; row++) {
    for (let col = 0; col < CONFIG.GRID_COLS; col++) {
      zones.push({
        minX: CONFIG.POSITION_MARGIN + (col * zoneWidth),
        maxX: CONFIG.POSITION_MARGIN + ((col + 1) * zoneWidth),
        minY: CONFIG.POSITION_MARGIN + (row * zoneHeight),
        maxY: CONFIG.POSITION_MARGIN + ((row + 1) * zoneHeight),
      });
    }
  }

  return zones;
};

const generatePositionInZone = (zone) => {
  // Generate position within zone with some padding from zone edges
  const zonePadding = 2;
  return {
    x: random(Math.ceil(zone.minX + zonePadding), Math.floor(zone.maxX - zonePadding)),
    y: random(Math.ceil(zone.minY + zonePadding), Math.floor(zone.maxY - zonePadding)),
  };
};

const generateFlowers = () => {
  const flowers = [];
  const zones = createGrid();
  const availableZones = [...zones];

  const animationDelays = ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s'];
  const swayAnimations = ['animate-sway', 'animate-sway-gentle', 'animate-float-subtle'];

  // Shuffle zones for random distribution
  availableZones.sort(() => Math.random() - 0.5);

  // Generate static flowers
  for (let i = 0; i < CONFIG.STATIC_FLOWER_COUNT; i++) {
    const zone = availableZones.pop();
    const position = generatePositionInZone(zone);

    const flower = {
      id: i + 1,
      x: `${position.x}%`,
      y: `${position.y}%`,
      size: random(CONFIG.STATIC_SIZE_RANGE.min, CONFIG.STATIC_SIZE_RANGE.max),
      rotation: random(-45, 45),
      opacity: randomFloat(CONFIG.STATIC_OPACITY_RANGE.min, CONFIG.STATIC_OPACITY_RANGE.max),
      type: 'static',
      animation: randomChoice(swayAnimations),
      delay: animationDelays[i % animationDelays.length],
      scrollTrigger: 0,
      imageNum: (i % 12) + 1,
    };

    flowers.push(flower);
  }

  // Generate grow flowers with evenly distributed scroll triggers
  const scrollTriggerStep = (CONFIG.SCROLL_TRIGGER_END - CONFIG.SCROLL_TRIGGER_START) / (CONFIG.GROW_FLOWER_COUNT - 1);
  const growDelays = ['0s', '0.2s', '0.3s', '0.4s', '0.5s', '0.6s', '0.7s'];

  for (let i = 0; i < CONFIG.GROW_FLOWER_COUNT; i++) {
    const zone = availableZones.pop();
    const position = generatePositionInZone(zone);

    const scrollTrigger = Math.round(CONFIG.SCROLL_TRIGGER_START + (scrollTriggerStep * i));

    const flower = {
      id: CONFIG.STATIC_FLOWER_COUNT + i + 1,
      x: `${position.x}%`,
      y: `${position.y}%`,
      size: random(CONFIG.GROW_SIZE_RANGE.min, CONFIG.GROW_SIZE_RANGE.max),
      rotation: random(-45, 45),
      opacity: randomFloat(CONFIG.GROW_OPACITY_RANGE.min, CONFIG.GROW_OPACITY_RANGE.max),
      type: 'grow',
      animation: randomChoice(swayAnimations),
      delay: growDelays[i % growDelays.length],
      scrollTrigger,
      imageNum: (i % 12) + 1,
    };

    flowers.push(flower);
  }

  return flowers;
};

const formatFlowerObject = (flower) => {
  return `  { id: ${flower.id}, x: '${flower.x}', y: '${flower.y}', size: ${flower.size}, rotation: ${flower.rotation}, opacity: ${flower.opacity}, type: '${flower.type}', animation: '${flower.animation}', delay: '${flower.delay}', scrollTrigger: ${flower.scrollTrigger}, imageNum: ${flower.imageNum} }`;
};

const updateFlowersInFile = () => {
  const filePath = path.join(__dirname, '..', 'app', 'components', 'FloralBackground.tsx');

  console.log('🌸 Randomizing flower positions with grid distribution...');
  console.log(`   Static flowers: ${CONFIG.STATIC_FLOWER_COUNT}`);
  console.log(`   Grow flowers: ${CONFIG.GROW_FLOWER_COUNT}`);
  console.log(`   Grid: ${CONFIG.GRID_COLS}x${CONFIG.GRID_ROWS} (${CONFIG.GRID_COLS * CONFIG.GRID_ROWS} zones)`);

  // Read the file
  let fileContent = fs.readFileSync(filePath, 'utf8');

  // Generate new flowers
  const flowers = generateFlowers();

  // Split flowers into static and grow
  const staticFlowers = flowers.filter(f => f.type === 'static');
  const growFlowers = flowers.filter(f => f.type === 'grow');

  // Format the flowers array
  const flowersArrayContent = `const flowers = [
  // Always-visible static flowers (background - one of each type)
${staticFlowers.map(formatFlowerObject).join(',\n')},

  // Scroll-triggered grow flowers (foreground - one of each type)
${growFlowers.map(formatFlowerObject).join(',\n')},
]`;

  // Replace the flowers array in the file
  const flowersRegex = /const flowers = \[[\s\S]*?\n\]/;
  fileContent = fileContent.replace(flowersRegex, flowersArrayContent);

  // Write back to file
  fs.writeFileSync(filePath, fileContent, 'utf8');

  console.log('✅ Flowers randomized successfully!');
  console.log(`   File updated: ${filePath}`);
};

// Run the script
try {
  updateFlowersInFile();
} catch (error) {
  console.error('❌ Error randomizing flowers:', error.message);
  process.exit(1);
}
