import './App.css';
import './assets/style/style.scss';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
import { HeaderCards } from './components/HeaderCards';
import { TextOnly } from './components/TextOnly';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <HeaderCards />
      <TextOnly />
    </div>
  );
}

export default App;
