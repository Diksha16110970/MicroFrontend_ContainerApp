// src/pages/404.tsx
export const dynamic = "force-dynamic"; // disable static prerendering

export default function Custom404() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn’t exist.</p>
      
    </div>
  );
}
