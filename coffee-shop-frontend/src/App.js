import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import AdminProductPage from "./pages/AdminProductPage";
import EditProductCard from "./components/EditProductCard";
import AdminNewProductPage from "./pages/AdminNewProductPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/products" element={<AdminProductPage />} />
        <Route path="/admin/products/edit/:id" element={<EditProductCard />} />
        <Route path="/admin/products/new" element={<AdminNewProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
