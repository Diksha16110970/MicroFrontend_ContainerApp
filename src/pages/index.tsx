import Login from "./login";

export default function Home() {
  return (
    <div>
      <h1>Container App</h1>
      <div className="flex justify-center items-center bg-red-200">
        <Login />
      </div>
    </div>
  );
}
