import { useEffect, useState } from "react";
import axios from "axios";

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
      <ul className="list-group">
        {products && products.length > 0 ? (
          products.map((product) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={product.id}
            >
              <div>
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1 text-muted">價格：${product.price}</p>
              </div>
              <span className="badge bg-primary rounded-pill">
                {product.rating}
              </span>
            </li>
          ))
        ) : (
          <p className="text-center">目前沒有產品</p>
        )}
      </ul>
    </div>
  );
};

export default ProductListPage;
