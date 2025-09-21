
import book from "../../assets/images/book.png";
import bg_img from "../../assets/images/banner-image-bg.jpg";

const CarouselSlide = () => {
  return (
    <section 
      className="w-full h-[650px] flex items-center justify-center"
      style={{backgroundImage: `url(${bg_img})`}}
    >
      <div className="max-w-6xl px-8 flex items-center justify-between">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900">The Fine Print Book Collection</h1>
          <p className="text-gray-600 my-4">This is Heading</p>
          <button 
            className="px-6 py-3 shadow-md btn btn-primary bg-pink-500 font-semibold text-white rounded-full border-none"
          >Shop Product</button>
        </div>

        {/* Right Image */}
        <div>
          <img className="max-w-md drop-shadow-lg" src={book} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CarouselSlide;