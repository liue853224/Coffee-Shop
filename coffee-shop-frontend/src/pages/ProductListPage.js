import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Paginator from "../components/Paginator";

const BASE_URL = "http://localhost:3000/api";

const ProductListPage = () => {
  const [products, setProducts] = useState([]); // 初始化為空陣列，避免 undefined
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/products?page=${page}&limit=9`
      );
      console.log(response);

      setProducts(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">產品清單</h2>
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <ProductCard
                name={product.name}
                roastLevel={product.roastLevel}
                price={product.price}
                description={product.description}
                imageURL={product.imageURL}
              />
            </div>
          ))
        ) : (
          <p className="text-center">目前沒有產品</p>
        )}
      </div>
      <Paginator
        currentPage={currentPage}
        totalPage={totalPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductListPage;
