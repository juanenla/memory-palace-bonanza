# Memory Palace Bonanza

A Next.js + three.js workshop where participants collaboratively add memories (3D models) inside a digital Parthenon. This project bakes in all the debugging and observability lessons from the Parthenon Memory Workshop postmortem.

## ⚠️ Run a local server (never file://)

This experience must be served over HTTP/HTTPS or it will fail to load glTF assets. Choose one of these options:

### Option A: Next.js dev server
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Option B: Production build + static server
```bash
npm install
npm run build
npm run start              # Next.js server
# OR export & serve statically
npm run build && npx next export
npx http-server ./out -p 4173
```

### Option C: Python quick server (for the exported /out folder only)
```bash
npm run build && npx next export
cd out
python3 -m http.server 4173
```

If you see the app trying to run via `file://`, it will immediately show a blocking warning telling you to use a local server.

---

## ✅ Verification Checklist

Open http://localhost:3000 and confirm:

1. Debug panel (top-right) shows `WebGL: Supported` and `Renderer: Active` in green.
2. Models counter is at least `2` (test cube + Parthenon) after loading finishes.
3. FPS counter updates around ~60 (higher with smaller windows, lower on older GPUs).
4. A glowing red cube is floating near the center (sanity-check primitive).
5. Running `window.DEBUG.addTestCube()` in DevTools adds another cube immediately.
6. Navigating to http://localhost:3000/models/test-cube.glb downloads the simple sample glTF.

If any of these fail, jump to [TROUBLESHOOTING.md](TROUBLESHOOTING.md).

---

## Project Structure

```
app/                         # Next.js App Router entrypoints
  layout.tsx
  page.tsx
public/models/               # Static models served by Next.js
  parthenon.glb
  test-cube.glb
  memory-objects/
src/components/
  ParthenonScene.tsx         # Main three.js scene + debug infrastructure
src/memory-objects/
  index.ts                   # Imports all participant registrars
  sampleMemory.ts            # Example participant script
scripts/
  memory-example.js          # Copy/paste template for new participants
  debug-helpers.js           # Console snippets to sanity-check rendering
README.md
QUICKSTART.md                # TL;DR setup directions
TROUBLESHOOTING.md           # Expanded debugging playbook
```

---

## Memory Object Workflow

1. Place your `.glb` file in `public/models/memory-objects/your-name/model.glb`.
2. Copy `scripts/memory-example.js` into `src/memory-objects/yourMemory.ts`.
3. Update the name, model path, and transforms in that file.
4. Import your registrar in `src/memory-objects/index.ts` and add it to the `registrars` array.
5. Run `npm run dev`, refresh the browser, and confirm the debug panel increments the model count.

`window.addMemoryObject` is also exposed for rapid iteration directly from the console.

---

## Debug & Telemetry Features

- **On-screen debug panel** (WebGL status, renderer status, models loaded, FPS, scene children).
- **Verbose console logging** with green checkmarks for every init step.
- **Helper overlay** that blocks the UI until the Parthenon finishes loading.
- **`window.DEBUG` namespace** exposing `scene`, `camera`, `renderer`, `THREE`, `addTestCube`, and `addMemoryObject`.
- **Test cube** and **test glTF model** guaranteed to load before any third-party assets.
- **Automatic camera framing** via bounding box analysis with explicit logs.

---

## Testing Matrix

Before inviting participants, confirm the app works on:

- ✅ Chrome (latest) – baseline.
- ✅ Firefox (latest) – verifies WebGL2 path.
- ✅ Safari 17+ – ensures Metal backend behaves.

During testing:

- Toggle DevTools cache disabled (Network tab → ☐ "Disable cache" when open).
- Try an incognito/private window to flush stale assets.
- Watch the FPS counter while adding multiple memory objects (aim for 30+ FPS).

---

## Helpful Commands

```bash
npm run dev        # Local development server with hot reload
npm run lint       # ESLint via eslint-config-next
npm run build      # Production build
npm run start      # Start built Next.js server
```

See [QUICKSTART.md](QUICKSTART.md) for a condensed reference and [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for issue-specific playbooks.
