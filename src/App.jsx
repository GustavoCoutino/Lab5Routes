import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Perfil } from "./pages/Perfil";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
