import './App.css';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
import Ribbon from './components/yellowRibbon-multi-purpose/Ribbon';

function App() {
  return (
    <div className="App">
      <div className='firstpage'>{/* Nav Bar */}
        <Nav />
        {/* Banner */}
        <Banner />
      </div>
      <Ribbon />
    </div>
  );
}

export default App;
