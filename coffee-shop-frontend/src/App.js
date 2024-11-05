import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListPage from "./pages/ProductListPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        {/* 其他路由可以在此添加 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
