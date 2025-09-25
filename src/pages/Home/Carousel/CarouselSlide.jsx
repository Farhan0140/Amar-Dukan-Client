
import bg_img from "../../../assets/images/banner-image-bg.jpg";

const CarouselSlide = ({ title, subtitle, image }) => {
  return (
    <section 
      className="w-full h-[650px] flex items-center justify-center bg-cover bg-center px-4 md:px-8"
      style={{backgroundImage: `url(${bg_img})`}}
    >
      <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-between text-center md:text-left">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 my-4">{subtitle}</p>
          <button 
            className="px-6 py-3 shadow-md btn btn-primary bg-pink-500 font-semibold text-white rounded-full border-none"
          >
            Shop Product
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="max-w-full md:max-w-md drop-shadow-lg" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CarouselSlide;