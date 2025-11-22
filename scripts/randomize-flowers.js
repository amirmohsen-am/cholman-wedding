#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration - matches FloralBackground.tsx
const CONFIG = {
  STATIC_FLOWER_COUNT: 12,
  GROW_FLOWER_COUNT: 24,
  STATIC_SIZE_RANGE: { min: 85, max: 110 },
  GROW_SIZE_RANGE: { min: 120, max: 150 },
  STATIC_OPACITY_RANGE: { min: 0.25, max: 0.35 },
  GROW_OPACITY_RANGE: { min: 0.40, max: 0.60 },
  SCROLL_TRIGGER_START: 10,
  SCROLL_TRIGGER_END: 50,
  MIN_DISTANCE: 8, // Minimum distance between flowers (in percentage)
  POSITION_MARGIN: 5, // Margin from edges (in percentage)
};

// Utility functions
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max, decimals = 2) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

const getDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const generateUniquePosition = (existingPositions) => {
  const maxAttempts = 100;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const x = random(CONFIG.POSITION_MARGIN, 100 - CONFIG.POSITION_MARGIN);
    const y = random(CONFIG.POSITION_MARGIN, 100 - CONFIG.POSITION_MARGIN);

    // Check if position is far enough from all existing positions
    const isFarEnough = existingPositions.every(pos =>
      getDistance(x, y, pos.x, pos.y) >= CONFIG.MIN_DISTANCE
    );

    if (isFarEnough) {
      return { x, y };
    }

    attempts++;
  }

  // If we can't find a unique position, return a random one
  return {
    x: random(CONFIG.POSITION_MARGIN, 100 - CONFIG.POSITION_MARGIN),
    y: random(CONFIG.POSITION_MARGIN, 100 - CONFIG.POSITION_MARGIN),
  };
};

const generateFlowers = () => {
  const flowers = [];
  const existingPositions = [];
  const animationDelays = ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s'];

  // Generate static flowers
  for (let i = 0; i < CONFIG.STATIC_FLOWER_COUNT; i++) {
    const position = generateUniquePosition(existingPositions);
    existingPositions.push(position);

    const flower = {
      id: i + 1,
      x: `${position.x}%`,
      y: `${position.y}%`,
      size: random(CONFIG.STATIC_SIZE_RANGE.min, CONFIG.STATIC_SIZE_RANGE.max),
      rotation: random(-45, 45),
      opacity: randomFloat(CONFIG.STATIC_OPACITY_RANGE.min, CONFIG.STATIC_OPACITY_RANGE.max),
      type: 'static',
      animation: 'animate-float-subtle',
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
    const position = generateUniquePosition(existingPositions);
    existingPositions.push(position);

    const scrollTrigger = Math.round(CONFIG.SCROLL_TRIGGER_START + (scrollTriggerStep * i));

    const flower = {
      id: CONFIG.STATIC_FLOWER_COUNT + i + 1,
      x: `${position.x}%`,
      y: `${position.y}%`,
      size: random(CONFIG.GROW_SIZE_RANGE.min, CONFIG.GROW_SIZE_RANGE.max),
      rotation: random(-45, 45),
      opacity: randomFloat(CONFIG.GROW_OPACITY_RANGE.min, CONFIG.GROW_OPACITY_RANGE.max),
      type: 'grow',
      animation: '',
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

  console.log('🌸 Randomizing flower positions...');
  console.log(`   Static flowers: ${CONFIG.STATIC_FLOWER_COUNT}`);
  console.log(`   Grow flowers: ${CONFIG.GROW_FLOWER_COUNT}`);

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
