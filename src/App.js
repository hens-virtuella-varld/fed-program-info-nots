import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Summary />
      <Main />
      {/* <Quiz /> */}
    </div>
  );
}

export default App;
