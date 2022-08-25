import './App.css';
import Navbar from './components/navbar/Navbar';
import Marketsummary from './components/marketsummary/Marketsummary';
import Currencylist from './components/currencylist/Currencylist';
import Viewmore from './components/viewmore/Viewmore';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Marketsummary />
      <Currencylist />
      <Viewmore />
      <Footer />
    </>
  );
};

export default App;
