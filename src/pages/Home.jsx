import HeroCarousel from "../Components/Carousel/HeroCarousel";
import Category from "../Components/Categories/Category";
import Features from "../Components/Features";
import DiscountSection from "../Discount/DiscountSection";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Category />
      <Products />
      <DiscountSection />
    </div>
  );
};

export default Home;