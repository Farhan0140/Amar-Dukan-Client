
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ErrorAlert from "../Components/ErrorAlert";

import apiClient from "../services/api-client";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect (() => {

    setLoading(true);

    apiClient.get("/api/v1/products")
    .then( res => setProducts(res.data.results))
    .catch( err => setError(err.message))
    .finally(() => setLoading(false))

  }, [])

  return (
    <section className="mx-auto py-15 bg-gray-50">

      <div className="flex justify-between items-center px-4 md:px-8 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Trending Products</h2>
        <a href="#" className="btn btn-secondary rounded-full p-6 text-lg"> View All </a>
      </div>

      {
        isLoading && (
          <div className="flex justify-center items-center">
            <span className="loading loading-dots loading-xl text-red-500"></span>
          </div>
        )
      }

      {
        error && (
          <ErrorAlert error={error} />
        )
      }

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {slidesPerView: 2},
          1024: {slidesPerView: 3}
        }}
      >
        {
          products.map((product) => (
            <SwiperSlide className="flex justify-center">
              <ProductCard item={product} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default Products;