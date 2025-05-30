import './App.css';
import NavBar from './components/navbar';
import Home from './components/inicio'
import Clientes from './components/clientes'
import Nosotros from './components/nosotros'
import Equipo from "./components/equipo";
import Contacto from "./components/contacto"
import Productos from './components/productos'
import Marketing from "./pages/Marketing"
import Gestion from "./pages/Gestionedi"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function MainContent() {
  const location = useLocation();
  const isSpecialRoute = ["/marketing", "/gestion"].includes(location.pathname.toLowerCase());

  if (isSpecialRoute) return null;

  return (
    <>
      <NavBar />
      <Home />
      <Productos />
      <Clientes />
      <Nosotros />
      <Equipo />
      <Contacto />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/gestion" element={<Gestion />} />
        </Routes>
        <MainContent />
      </Router>
    </div>
  );
}

export default App;

