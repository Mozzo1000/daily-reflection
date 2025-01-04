import { Routes, Route } from "react-router";
import Goals from "./pages/Goals";
import Navbar from "./components/Navbar";
import Setup from "./components/Setup";
import Reflections from "./pages/Reflections";
function App() {

  return (
      {localStorage.getItem("name") &&
        <Navbar />
      }
      <Routes>
        <Route path="/" element={<Reflections />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </>
  )
}

export default App
