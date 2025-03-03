import './App.css';
import NavBar from './components/navbar';
import Home from './components/inicio'
import Clientes from './components/clientes'
import Nosotros from './components/nosotros'
import  Equipo  from "./components/equipo";
import Contacto from "./components/contacto"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Clientes />
      <Nosotros />
      <Equipo />
      <Contacto />
    </div>
  );
}

export default App;
