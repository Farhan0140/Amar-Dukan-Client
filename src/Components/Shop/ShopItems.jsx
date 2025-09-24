import ProductCard from "../../Products/ProductCard";

const ShopItems = ({ items, isLoading }) => {

  if(isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56 text-blue-500"></progress>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {
        items.map( (item) => (
          <ProductCard item={item} key={item.id} />
        ) )
      }
    </div>
  );
};

export default ShopItems;