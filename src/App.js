import About from "./components/About.jsx";
import Quote from "./components/Quote.jsx";
import Grid from "./components/Grid.jsx";
import PicCarousel from "./components/PicCarousel.jsx";
import Video from "./components/Video.jsx";
import Footer from "./components/Footer.jsx";
import HeroBanner from "./components/HeroBanner.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <HeroBanner /> */}
        <About />
        <Quote />
        <Grid />
        <PicCarousel />
        <Video />
        <Footer />
    </div>
  );
}

export default App;
