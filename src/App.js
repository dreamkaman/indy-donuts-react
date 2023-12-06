import { ToastContainer } from 'react-toastify';

import HomePage from 'pages/HomePage';
import Header from 'components/Header';
import Hero from 'components/Hero/Hero';
import AboutUs from 'components/AboutUs';
import Program from 'components/Program';
import Reviews from 'components/Reviews';
import Registration from 'components/Registration';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <HomePage>
        <Header />
        <Hero />
        <AboutUs />
        <Program />
        <Reviews />
        <Registration />
        <Contact />
        <Footer />
      </HomePage>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
