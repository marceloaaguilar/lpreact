import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import GradeCurricular from './components/GradeCurricular';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <GradeCurricular/>
    </div>
  );
}

export default App;
