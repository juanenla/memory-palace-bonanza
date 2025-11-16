/**
 * Participant template for adding a new memory object.
 *
 * 1. Copy this file into src/memory-objects/yourMemory.ts.
 * 2. Update the `name`, `modelPath`, and transforms below.
 * 3. Import the new registrar in src/memory-objects/index.ts.
 */
export default function registerMemory(addMemoryObject) {
  addMemoryObject({
    name: "Your Memory Name",
    modelPath: "/models/memory-objects/your-model.glb",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
  });
}
