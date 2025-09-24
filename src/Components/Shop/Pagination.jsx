
const Pagination = ({ totalPage, currentPage, handlePageChange }) => {

  return (
    <div className="flex justify-center mb-10">
      {
        Array.from({ length: totalPage }, (_, i) => (
          <button 
            key={i}
            onClick={() => handlePageChange(i+1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === i+1 ? "bg-secondary text-white": "bg-gray-300"}`}
          >
            {i+1}
          </button>
        ))
      }
    </div>
  );
};

export default Pagination;