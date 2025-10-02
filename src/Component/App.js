import Hero from "./Hero";
import PasswordGenarator from "./PasswordGenarator"
import Features from "./Features";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <>
      <section className="home">
        <Hero />
        <PasswordGenarator/>
      </section>
      <Features />
      <About />
      <Footer />
    </>
  );
}

export default App;
