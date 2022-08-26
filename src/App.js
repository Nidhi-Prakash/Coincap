import './App.css';
import Navbar from './components/navbar/Navbar';
import Marketsummary from './components/marketsummary/Marketsummary';
import Currencylist from './components/currencylist/Currencylist';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Marketsummary />
      <Currencylist />
      <Footer />
    </>
  );
};

export default App;
