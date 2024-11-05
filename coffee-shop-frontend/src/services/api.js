import axios from "axios";

// 設定基礎 URL
const API_BASE_URL = "http://localhost:3000/api";

// 取得產品列表
export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

// 新增收藏
export const addFavorite = async (productId, userId) => {
  const response = await axios.post(`${API_BASE_URL}/favorites`, {
    productId,
    userId,
  });
  return response.data;
};

// 獲取收藏清單
export const getFavorites = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/favorites`, {
    params: { userId },
  });
  return response.data;
};

// 其他API請求...
