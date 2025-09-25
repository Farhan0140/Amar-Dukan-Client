import bg_img from "../../../assets/images/banner-image-bg.jpg"
import banner_img from "../../../assets/images/banner-image3.png"
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
  return (
      <section 
        className="w-full h-[650px] flex items-center justify-center bg-cover bg-center px-4 md:px-8"
        style={{backgroundImage: `url(${bg_img})`}}
      >
        <div className="container max-w-6xl w-full flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-between text-center md:text-left">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img className="w-full max-w-md drop-shadow-lg" src={banner_img} alt="" />
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">30% Discount On All Items. Hurry UP !!!</h1>
            
            <DiscountTimer />

            <button 
              className="px-6 py-6 shadow-md btn btn-primary bg-pink-500 font-semibold text-white text-xl rounded-full border-none"
            >
              Shop Collection
            </button>
          </div>
          
        </div>
      </section>
    );
};

export default DiscountSection;