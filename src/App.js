import HomePage from 'pages/HomePage';
import './App.css';
import Header from 'components/Header';
import Hero from 'components/Hero/Hero';
import AboutUs from 'components/AboutUs';

function App() {
  return (
    <HomePage>
      <Header />
      <Hero />
      <AboutUs />
    </HomePage>
  );
}

export default App;
