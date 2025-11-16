export type Vector3Tuple = [number, number, number];

export interface MemoryObjectConfig {
  name: string;
  modelPath: string;
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
  scale?: number | Vector3Tuple;
}

export type MemoryObjectRegistrar = (addMemoryObject: (config: MemoryObjectConfig) => void) => void;
