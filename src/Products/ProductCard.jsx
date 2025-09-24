
import default_img from "../assets/default_product.jpg";

const ProductCard = ({ item }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 md:w-80 lg:w-70 xl:w-96 shadow-lg hover:shadow-2xl">
        <figure className="px-10 pt-10">
          <img
            src={item.images.length > 0 ? item.images[0].image : default_img }
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          <h4 className="text-lg my-1 text-red-800 font-bold">${item.price}</h4>
          <p>{item.description}</p>
          <div className="card-actions">
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;