import { useEffect, useState } from "react"
import apiClient from "../services/api-client";


const useFetchProducts = ( CurrentPage ) => {

  const [Products, setProduct] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [TotalPages, setTotalPages] = useState(0);

  useEffect (() => {
    const FetchProduct = async() => {
      setIsLoading(true);
      
      try {

        const response = await apiClient.get(`/products/?page=${CurrentPage}`);
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

  }, [CurrentPage]);
  
  return {Products, IsLoading, TotalPages};
}


export default useFetchProducts;
