import './App.css';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <div className='firstpage'>{/* Nav Bar */}
        <Nav />
        {/* Banner */}
        <Banner />
      </div>
    </div>
  );
}

export default App;
