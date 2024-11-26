import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import TopCategories from "./components/Categories";
import Designstudio from "./components/Designstudio";
import Card from "./components/Card";
import Fact from "./components/Facts";
import FooterComponent from "./components/Footer";
import Trend from "./components/Trend";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trend/>
      <TopCategories />
      <Designstudio />
      <Card />
      <About />
      <Fact />
      <Carousel />
      <FooterComponent />
    </>
  );
}
