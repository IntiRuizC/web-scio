import './App.css';
import NavBar from './components/navbar';
import Home from './components/inicio'
import Clientes from './components/clientes'
import Nosotros from './components/nosotros'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Clientes />
      <Nosotros />
    </div>
  );
}

export default App;

