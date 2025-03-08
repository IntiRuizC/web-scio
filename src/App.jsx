import './App.css';
import NavBar from './components/navbar';
import Home from './components/inicio'
import Clientes from './components/clientes'
import Nosotros from './components/nosotros'
import  Equipo  from "./components/equipo";
import Contacto from "./components/contacto"
import Productos from './components/productos'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Productos />
      <Clientes />
      <Nosotros />
      <Equipo />
      <Contacto />
    </div>
  );
}

export default App;
