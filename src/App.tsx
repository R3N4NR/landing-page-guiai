import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SaibaMais from "./pages/SaibaMais";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
    </Router>
  );
}
