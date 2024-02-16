import Carousel from "../components/Home/Carousel";
import Hero from "../components/Home/Hero";
import Experience from "../components/Home/Experience";
import Events from "../components/Home/Events";
import Places from "../components/Home/Places";
import Categories from "../components/Home/Categories";

function Home() {
  return (
    <>
      <Hero />
      <Categories/>
      <Experience />
      <Carousel />
      <Events />
      <Places />
    </>
  );
}

export default Home;
