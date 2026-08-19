import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;