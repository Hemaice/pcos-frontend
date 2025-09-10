import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PcosForm from "./pages/PcosForm";
import PredictionResult from "./pages/PredictionResult";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnose" element={<PcosForm />} />
        <Route path="/result" element={<PredictionResult />} />
      </Routes>
    </Router>
  );
}

export default App;
