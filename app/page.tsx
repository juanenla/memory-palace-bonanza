import ParthenonScene from "@/components/ParthenonScene";

export default function HomePage() {
  return (
    <div>
      <ParthenonScene />
      <section
        style={{
          padding: "3rem 1.5rem 4rem",
          maxWidth: "960px",
          margin: "0 auto",
          color: "#e6edf3",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Verify your setup</h2>
        <p style={{ marginBottom: "1rem", lineHeight: 1.5 }}>
          Run <code>npm install</code> followed by <code>npm run dev</code>, open
          <code> http://localhost:3000</code>, and confirm the debug panel shows
          WebGL and Renderer as ready, the FPS counter is updating, and the red
          sanity-check cube is visible. Once those pass, start adding your memory
          objects under <code>src/memory-objects</code>.
        </p>
        <ol style={{ lineHeight: 1.8 }}>
          <li>Ensure a local dev server is running (never use the file protocol).</li>
          <li>Look for the debug overlay (top-right) and verify all rows are green.</li>
          <li>Test the helper by running <code>window.DEBUG.addTestCube()</code> in DevTools.</li>
          <li>
            Load <code>http://localhost:3000/models/test-cube.glb</code> directly to
            confirm the simple glTF is accessible.
          </li>
          <li>
            Use the <code>src/memory-objects/sampleMemory.ts</code> file as your
            template for new participants.
          </li>
        </ol>
      </section>
    </div>
  );
}
