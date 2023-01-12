import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Single from "./components/Single";
import ToalImages from "./components/ToalImages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ToalImages />} />
          <Route path="/:id" element={<Single />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
