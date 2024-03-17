import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import GradeCurricular from './components/GradeCurricular';
import Features from './components/Features';
import Instructor from './components/Instructor';
import Testmonials from './components/Testmonials';
import Result from './components/Result';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <GradeCurricular/>
      <Features/>
      <Instructor/>
      <Testmonials/>
      <Result/>
      <Footer/>
    </div>
  );
}

export default App;
