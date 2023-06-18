import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import News from './Components/News';
import Blogs from './Components/Blogs';
import Jobs from './Components/Jobs';

function App() {
  return (
    <div className="App">
      <Home />
      <Blogs />
      <About />
      <Testimonial />
      <Work />
      <News />
      <Jobs />
      <Footer />
    </div>
  );
};

export default App;
