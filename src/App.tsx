import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SaibaMais from "./pages/SaibaMais";
import EventsPage from "./pages/EventsPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/Home";
import ValidatePage from "./pages/ValidatePage";
import LoginPage from "./pages/LoginPage";
import EventOverviewPage from "./pages/EventOverviewPage";
import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="validar-cupom" element={<ValidatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/evento/:id" element={<EventOverviewPage />} />
        <Route path="/contato" element={<ContactPage />} />

      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </Router>
  );
}
