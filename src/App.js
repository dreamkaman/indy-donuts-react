import HomePage from 'pages/HomePage';
import './App.css';
import Header from 'components/Header';
import Hero from 'components/Hero/Hero';
import AboutUs from 'components/AboutUs';
import Program from 'components/Program';
import Reviews from 'components/Reviews';
import Registration from 'components/Registration';

function App() {
  return (
    <HomePage>
      <Header />
      <Hero />
      <AboutUs />
      <Program />
      <Reviews />
      <Registration />
    </HomePage>
  );
}

export default App;
