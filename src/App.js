import About from "./components/About.jsx";
import Quote from "./components/Quote.jsx";
import Grid from "./components/Grid.jsx";
import PicCarousel from "./components/PicCarousel.jsx";
import Footer from "./components/Footer.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// const imageList = [
//   "/images/"

// ]

function App() {
  return (
    <div className="App">
      <About />
      <Quote />
      <Grid />
      <PicCarousel />
      <Footer />
    </div>
  );
}

export default App;
