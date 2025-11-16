import type { MemoryObjectRegistrar } from "./types";
import sampleMemory from "./sampleMemory";

// Add new participant scripts here by importing and pushing to the array.
const registrars: MemoryObjectRegistrar[] = [sampleMemory];

export default registrars;
