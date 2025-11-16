# Quickstart

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the dev server**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```
3. **Verify rendering**
   - Debug panel shows WebGL + Renderer as green.
   - Red sanity cube visible.
   - `window.DEBUG.addTestCube()` works in the console.
4. **Load sample glTF**
   - Visit http://localhost:3000/models/test-cube.glb to ensure static assets are served.
5. **Add your memory object**
   - Drop your `.glb` under `public/models/memory-objects/<your-name>/`.
   - Copy `scripts/memory-example.js` into `src/memory-objects/<yourMemory>.ts` and customize it.
   - Import it via `src/memory-objects/index.ts`.
6. **Test again**
   - Confirm the Models counter increments and your asset appears.
   - Watch FPS (keep it above 30).

Need answers fast? See [TROUBLESHOOTING.md](TROUBLESHOOTING.md).
