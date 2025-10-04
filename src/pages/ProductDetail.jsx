import AddToCartButton from "../Components/Product_Details/AddToCartButton";
import ProductImageGallery from "../Components/Product_Details/ProductImageGallery";

const ProductDetail = () => {

  const product = {
      "id": 1,
      "name": "Smartphone",
      "description": "High-quality smartphone for everyday use.",
      "stock": 10,
      "price": 213.8,
      "product_with_tax": 235.18,
      "category": 1,
      "images": [
          {
              "id": 1,
              "image": "https://res.cloudinary.com/dx0zfkbqo/image/upload/v1758546618/qdnrqxdfcao0iwcrahm5.jpg"
          },
          {
              "id": 2,
              "image": "https://res.cloudinary.com/dx0zfkbqo/image/upload/v1758546618/qdnrqxdfcao0iwcrahm5.jpg"
          }
      ]
  };

  return (
    <div className="w-3/4 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ProductImageGallery images={product.images} productName={product.name} />
        <div className="mt-auto">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;