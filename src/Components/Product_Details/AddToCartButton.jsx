import { useState } from "react";
import { FaCheck, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

const AddToCartButton = ({ product }) => {

  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const increaseQuantity = () => {
    if ( quantity < product.stock ) {
      setQuantity( quantity + 1 );
    }
  }

  const decreaseQuantity = () => {
    if( quantity > 1 ) {
      setQuantity( quantity - 1 );
    }
  }

  const AddToCart = () => {
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);

      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="join">
        <button 
          className="btn btn-outline join-item"
          onClick={decreaseQuantity}
          disabled={ quantity <= 1 }
        >
          <FaMinus className="h-3 w-4" />
        </button>
        <input 
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          className="input input-bordered join-item w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::webkit-outer-spin-button]:appearance-none"
        />
        <button 
          className="btn btn-outline join-item"
          onClick={increaseQuantity}
          disabled={quantity >= product.stock}
        >
          <FaPlus className="h-3 w-4" />
        </button>
      </div>

      <button 
        onClick={AddToCart}
        disabled={isAdding || isAdded || product.stock === 0}
        className="btn btn-primary w-full"
      >
        {
          isAdding ? (
            <span className="flex items-center">
              <span className="loading loading-spinner loading-sm mr-2"></span>
              Adding... 
            </span>
          ) : isAdded ? (
            <span className="flex items-center">
              <FaCheck className="mr-2 h-4 w-4" />
              Added To Cart..
            </span>
          ) : (
            <span className="flex items-center">
              <FaShoppingCart className="mr-2 h-4 w-4" />
              Add To Cart
            </span>
          )
        }
      </button>

    </div>
  );
};

export default AddToCartButton;