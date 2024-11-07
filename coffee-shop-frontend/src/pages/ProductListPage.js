import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductListPage = () => {
  const [products, setProducts] = useState([]); // 初始化為空陣列，避免 undefined
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        console.log(response.data);
        setProducts(response.data.data); // 確保 products 是陣列格式
      } catch (err) {
        setError("無法載入產品資料");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>載入中...</p>;
  if (error) return <p>{error}</p>;

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
              />
            </div>
          ))
        ) : (
          <p className="text-center">目前沒有產品</p>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
