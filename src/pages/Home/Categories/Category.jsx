import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";
import CategoryItems from "./CategoryItems";
import ErrorAlert from "../../../Components/ErrorAlert";

const Category = () => {

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get("/categories/")
    .then(res => setCategories(res.data))
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(false))
  }, []);

  return (
    <section className="py-12 max-w-7xl mx-auto">

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Category</h2>
        <a href="#" className="btn btn-secondary rounded-full p-6 text-lg"> View All </a>
      </div>

      <div className="flex items-center justify-center px-8">
        {
          isLoading && <span className="loading loading-dots loading-xl text-red-500"></span>
        }
        {
          error.length >= 1 && <ErrorAlert error={error} />
        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {
          categories.map((category, index) => (
              <CategoryItems index={index} category={category} />
          ))
      }
      </div>
    </section>
  );
};

export default Category;