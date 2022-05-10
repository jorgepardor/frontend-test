
import './App.css';
import { Photofeed } from './js/components/photofeed';
import { Header } from './js/components/header';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Header />
      </header>
      <section>
        <Photofeed />
      </section>
    </div>
  );
}

export default App;
