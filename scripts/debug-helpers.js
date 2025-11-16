/**
 * Debug helper reference.
 * These helpers already exist on `window.DEBUG` when the Next.js app runs.
 * Paste snippets inside your DevTools console for quick sanity checks.
 */

// Adds a cube with a random color to verify rendering works.
window.DEBUG.addTestCube();

// Adds a placeholder GLB directly.
window.addMemoryObject({
  name: "Console Debug Model",
  modelPath: "/models/test-cube.glb",
  position: [Math.random() * 30 - 15, 4, Math.random() * 30 - 15],
  rotation: [0, Math.random() * Math.PI * 2, 0],
  scale: 5,
});
