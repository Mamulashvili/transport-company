import './App.css';
import './assets/style/style.scss';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
    </div>
  );
}

export default App;
