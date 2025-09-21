import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';


import book from "../../assets/images/book.png";
import item from "../../assets/images/technology.png";
import item1 from "../../assets/images/fashion.png";


const HeroCarousel = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselSlide title={"Hi, There"} subtitle={"Rou sdfsd"} image={book} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide title={"Hi, There"} subtitle={"Rou sdfsd"} image={item} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide title={"Hi, There"} subtitle={"Rou sdfsd"} image={item1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroCarousel;
