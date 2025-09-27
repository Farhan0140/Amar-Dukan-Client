import { useEffect, useState } from "react"
import apiClient from "../services/api-client";


const useFetchProducts = ( CurrentPage, PriceRange ) => {

  const [Products, setProduct] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [TotalPages, setTotalPages] = useState(0);

  useEffect (() => {
    const FetchProduct = async() => {
      setIsLoading(true);
      
      try {

        const url = `/products/?category_id=&price__gt=${PriceRange[0]}&price__lt=${PriceRange[1]}&page=${CurrentPage}`;
        const response = await apiClient.get(url);
        const data = await response.data;

        setProduct(data.results);
        setTotalPages( Math.ceil( data.count / data.results.length ) )

      } catch ( error ) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    FetchProduct();

  }, [CurrentPage, PriceRange]);
  
  return {Products, IsLoading, TotalPages};
}


export default useFetchProducts;
