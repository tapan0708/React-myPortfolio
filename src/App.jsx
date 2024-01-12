import "./App.scss"
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";

const App = () => {
  return <>
    <section id="Homepage">
      <Header />
      <Hero />
    </section>

    <section id="ParallaxOne">
      <Parallax type="Services" />
    </section>

    <section id="Services">
      <Services />
    </section>

    {/* <section id="Portfolio">
      <Parallax type="Portfolio" />
    </section> */}

    <section id="Contact">
      <Contact />
    </section>
  </>;
};

export default App;
