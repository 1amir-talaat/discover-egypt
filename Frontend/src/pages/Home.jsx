import Carousel from "../components/Home/Carousel";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Experience from "../components/Home/Experience";
import Events from "../components/Home/Events";
import Places from "../components/Home/Places";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Experience />
      <Carousel />
      <Events />
      <Places />
    </>
  );
}

export default Home;
