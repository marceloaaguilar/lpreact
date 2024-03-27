import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import GradeCurricular from './components/GradeCurricular';
import Features from './components/Features';
import Instructor from './components/Instructor';
import Result from './components/Result';
import Testmonials from './components/Testmonials';
import Footer from './components/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';



function App() {
  return (
    <div className="App">
       <FloatingWhatsApp 
        phoneNumber = '5531986287323'
        accountName="Marco Antônio Cabeleireiros"
        statusMessage = "Online Agora"
        chatMessage = "Olá, como posso te ajudar?"
        allowEsc
        allowClickAway
        notification
        notificationSound/>
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
