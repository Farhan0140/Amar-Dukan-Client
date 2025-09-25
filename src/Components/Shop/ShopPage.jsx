import { useState } from "react";
import ShopItems from "./ShopItems";
import Pagination from "./Pagination";
import useFetchProducts from "../../Hooks/useFetchProducts";

const ShopPage = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const {Products, IsLoading, TotalPages} = useFetchProducts( CurrentPage );
  

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