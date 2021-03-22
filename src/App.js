import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { LinksUteis } from './components/LinksUteis';
import { Espaco } from './components/Espaco';
import { Equipamentos } from './components/Equipamentos';
import { OpenDay } from './components/OpenDay';
import { Calendario } from './components/Calendario';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <LinksUteis />
      <Espaco />
      <Equipamentos />
      <OpenDay />
      <Calendario />
      <Footer />
    </div>
  );
}

export default App;
