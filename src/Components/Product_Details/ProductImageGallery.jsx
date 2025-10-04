
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/default_product.jpg";

const ProductImageGallery = ({images, productName}) => {

  const [thumbsSwiper] = useState(null);
  const productImages = images.length > 0 ? images : [defaultImage];

  return (
    <div className="rounded-lg border overflow-hidden">
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="product-main-slider"
      >
        {
          productImages.map((imageKey, index) => (
            <SwiperSlide key={index}>
              <img 
                src={imageKey.image} 
                alt={productName} 
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default ProductImageGallery;