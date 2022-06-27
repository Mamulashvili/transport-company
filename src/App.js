import './App.css';
import './assets/style/style.scss';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
import { HeaderCards } from './components/HeaderCards';
import { TextOnly } from './components/TextOnly';
import { TransportCards } from './components/TransportCards';
import { TransportShapes } from './components/TransportShapes';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <HeaderCards />
      <TextOnly />
      <TransportCards />
      <TransportShapes />
    </div>
  );
}

export default App;
