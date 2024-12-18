import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Paginator from "../components/Paginator";
import AdminProductsCard from "../components/AdminProductsCard";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:3000/api/admin";

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
const AdminProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const navigate = useNavigate();
  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/products?page=${page}&limit=9`
      );
      setProducts(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    } catch (err) {
      console.error(err);
    }
  };
  const handleNew = () => {
    navigate("/admin/products/new");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`是否確定要刪除${name}?`);
    if (confirmDelete) {
      try {
        await axios.delete(`${BASE_URL}/products/${id}`);
        fetchProducts(currentPage);
      } catch (error) {
        console.error("刪除失敗:", error);
      }
    }
  };
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div className=" row">
      <h2 className="text-center mb-4">後台管理-產品清單</h2>
      <Button
        style={{
          backgroundColor: "#6f4e37",
          border: "none",
          padding: "10px 20px",
        }}
        className="row center  "
        onClick={handleNew}
      >
        新增產品
      </Button>
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
                imageUrl={product.imageUrl}
                onDelete={handleDelete}
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
