// src/pages/500.tsx
export const dynamic = "force-dynamic"; // disable static prerendering

export default function Custom500() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>500 - Server Error</h1>
      <p>Oops! Something went wrong on our end.</p>
    </div>
  );
}
