import { useState } from "react";
import ShopItems from "./ShopItems";
import Pagination from "./Pagination";
import useFetchProducts from "../../Hooks/useFetchProducts";
import FilterSection from "./FilterSection";

const ShopPage = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PriceRange, setPriceRange] = useState([0, 1000]);
  const {Products, IsLoading, TotalPages} = useFetchProducts( CurrentPage, PriceRange );
  
  const handlePriceRange = ( index, value ) => {
    setPriceRange((prev) => {
      const newPriceRange = [...prev];
      newPriceRange[index] = value;

      return newPriceRange;
    });

    setCurrentPage(1);
  }

  return (
    <div className="max-w-[1240px] m-auto">
      <h1 className="text-6xl mt-5 font-biscotti">Shop Our Products</h1>
      <FilterSection priceRange={PriceRange} HandlePriceRange={handlePriceRange} />
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