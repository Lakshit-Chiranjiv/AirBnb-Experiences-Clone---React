import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Slider/>
    </div>
  );
}

export default App;
