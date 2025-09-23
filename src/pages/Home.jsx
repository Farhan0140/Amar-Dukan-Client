import HeroCarousel from "../Components/Carousel/HeroCarousel";
import Features from "../Components/Features";
import DiscountSection from "../Discount/DiscountSection";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Products />
      <DiscountSection />
    </div>
  );
};

export default Home;