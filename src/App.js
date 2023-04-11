import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />   
        <Route path="/gallery" element={<Gallery/>} />    */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
