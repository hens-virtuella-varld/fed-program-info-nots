import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Summary from './components/Summary';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Summary />
      <Main />
      <Footer />
      {/* <Quiz /> */}
    </div>
  );
}

export default App;
