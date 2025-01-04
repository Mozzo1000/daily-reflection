import { Routes, Route } from "react-router";
import Goals from "./pages/Goals";
import Navbar from "./components/Navbar";
import Setup from "./components/Setup";
import Reflections from "./pages/Reflections";
function App() {

  return (
    <div className="p-4 sm:p-8 md:p-16">
      {localStorage.getItem("name") &&
        <Navbar />
      }
      <Routes>
        <Route path="/" element={<Reflections />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </div>
  )
}

export default App
