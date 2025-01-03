import AddMood from "./components/AddMood"
import { Routes, Route } from "react-router";
import Goals from "./pages/Goals";
import Navbar from "./components/Navbar";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddMood />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </>
  )
}

export default App
