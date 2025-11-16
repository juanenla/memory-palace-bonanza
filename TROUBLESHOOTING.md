# Troubleshooting Guide

## Blank white screen
- Confirm you're on http://localhost:3000 (not `file://`). If not, run `npm run dev`.
- Check the DevTools console. All init steps log `✓`. Expand any collapsed warning groups.
- Look at the debug panel: if WebGL or Renderer is red, your GPU/browser is blocking WebGL. Try Chrome/Firefox.
- Run `window.DEBUG.addTestCube()` in the console. If it appears, the renderer works and the Parthenon likely failed to load (see below).

## Models fail to load
- Open the Network tab and confirm `/models/parthenon.glb` and `/models/test-cube.glb` return 200.
- If you see 404s, ensure `npm run dev` was started from the project root so Next.js serves the `public` directory.
- If you imported a participant file, double-check `modelPath` is correct and uses a leading slash.
- For Sketchfab downloads using `KHR_materials_pbrSpecularGlossiness`, keep an eye on console warnings; consider re-exporting via Blender or the glTF Sample Viewer.

## WebGL not supported
- Update your browser, or enable hardware acceleration in the browser settings.
- Safari users should use Safari 17+ with "Develop → Experimental Features → WebGL 2" enabled.
- On Windows remote desktops, use Chrome with the `--use-angle=d3d11` flag.

## FPS drops below 30
- Lower the browser tab resolution or shrink the window.
- Reduce `renderer.shadowMap` size inside `ParthenonScene.tsx` if you don't need high-quality shadows.
- Remove heavy Sketchfab textures or decimate meshes before adding them to `/public/models`.

## Cache confusion
- Force-refresh with `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux).
- Enable "Disable cache" inside DevTools → Network when testing.
- Clear `.next` by stopping the dev server and running `rm -rf .next`.

## Need visibility into the scene
- `window.DEBUG` exposes `scene`, `camera`, `renderer`, and helpers.
- Run `window.DEBUG.addTestCube(x, y, z)` to drop more debug primitives.
- Call `renderer.info.render` in the console to inspect triangle counts.

## Want to simulate a participant quickly
```js
window.addMemoryObject({
  name: "Console Test",
  modelPath: "/models/test-cube.glb",
  position: [Math.random() * 40 - 20, 5, Math.random() * 40 - 20],
  rotation: [0, Math.random() * Math.PI * 2, 0],
  scale: 3
});
```
If that works but your actual asset doesn't, the GLB file is the culprit.
