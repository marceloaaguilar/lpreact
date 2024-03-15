import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import GradeCurricular from './components/GradeCurricular';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <GradeCurricular/>
      <Features/>
    </div>
  );
}

export default App;
