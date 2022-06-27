import './App.css';
import './assets/style/style.scss';
import { Container } from 'react-bootstrap';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
import { HeaderCards } from './components/HeaderCards';
import { TextOnly } from './components/TextOnly';
import { TransportCards } from './components/TransportCards';
import { TransportShapes } from './components/TransportShapes';
import { Cargo } from './components/Cargo';
import { Order } from './components/Order';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Container>
        <HeaderCards />
        <TextOnly />
        <TransportCards />
        <TransportShapes />
        <Cargo />
        <Order />
        <About />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
