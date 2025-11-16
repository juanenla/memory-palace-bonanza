import type { MemoryObjectRegistrar } from "./types";

const sampleMemory: MemoryObjectRegistrar = (addMemoryObject) => {
  addMemoryObject({
    name: "Sample Cube Memory",
    modelPath: "/models/test-cube.glb",
    position: [10, 3, -6],
    rotation: [0, Math.PI / 4, 0],
    scale: 4,
  });
};

export default sampleMemory;
