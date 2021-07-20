import Header from './components/Header';
import Footer from './components/Footer';
import Home from  './views/Home';
import './assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
