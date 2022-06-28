import './App.css';
import './assets/style/style.scss';
import './i18n';
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
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <NavigationBar t={t} i18n={i18n} />
      <Header t={t} />
      <Container>
        <HeaderCards t={t} />
        <TextOnly t={t} />
        <TransportCards t={t} />
        <TransportShapes t={t} />
        <Cargo t={t} />
        <Order t={t} />
        <About t={t} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
