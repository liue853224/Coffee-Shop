import React, { useEffect, useState } from "react";
import axios from "axios";
import Paginator from "../components/Paginator";
import AdminProductsCard from "../components/AdminProductsCard";
const BASE_URL = "http://localhost:3000/api";

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/products?page=${page}&limit=9`
      );
      console.log(response.data);
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
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h2 className="text-center mb-4">後台管理-產品清單</h2>
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <AdminProductsCard
                id={product.id}
                name={product.name}
                roastLevel={product.roastLevel}
                price={product.price}
                description={product.description}
              />
            </div>
          ))
        ) : (
          <div>
            <h3>沒有載入產品資料</h3>
          </div>
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

export default AdminProductPage;
