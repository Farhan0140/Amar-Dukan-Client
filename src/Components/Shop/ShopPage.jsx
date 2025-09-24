import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import ShopItems from "./ShopItems";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [Products, setProduct] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [TotalPages, setTotalPages] = useState(0);
  const [CurrentPage, setCurrentPage] = useState(1);

  useEffect( () => {
    FetchProduct()
  }, [CurrentPage]);


  // const FetchProduct = () => {
  //   setIsLoading(true)
  //   apiClient.get(`/products/?page=${CurrentPage}`)
  //   .then( res => {
  //     setProduct(res.data.results)
  //     setTotalPages( Math.ceil( res.data.count / res.data.results.length ) )
  //   })
  //   .catch( error => console.log(error) )
  //   .finally( () => setIsLoading(false) )
  // }

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

  return (
    <div className="max-w-[1240px] m-auto">
      <ShopItems items={Products} isLoading={IsLoading} />
      <Pagination 
        totalPage={TotalPages} 
        currentPage={CurrentPage}
        handlePageChange={setCurrentPage} 
      />
    </div>
  );
};

export default ShopPage;