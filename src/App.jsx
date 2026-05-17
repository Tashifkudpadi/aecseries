import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyAttend from "./components/WhyAttend";
import KeyTopics from "./components/KeyTopics";
import Agenda from "./components/Agenda";
import CTA from "./components/CTA";
import Industries from "./components/Industries";
import AboutOrganiser from "./components/AboutOrganiser";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-ink-900 dark:bg-ink-950 dark:text-ink-50">
      <Navbar />
      <main>
        <Hero />
        <WhyAttend />
        <KeyTopics />
        <Agenda />
        <Industries />
        <AboutOrganiser />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
