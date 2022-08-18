import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import AboutScreen from "../pages/AboutScreen";
import ContactoScreen from '../pages/ContactoScreen'
import AdminScreen from "../pages/AdminScreen";
import CartScreen from "../pages/CartScreen";
import ErrorScreen from "../pages/ErrorScreen";
import FavoritosScreen from "../pages/FavoritosScreen";
import HomeScreen from "../pages/HomeScreen";
import ProductScreen from '../pages/ProductScreen'
import RegisterScreen from "../pages/RegisterScreen";
import SearchScreen from "../pages/SearchScreen";

const RoutesApp = () => {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contacto" element={<ContactoScreen/>}/>
        <Route path="/product" element={<ProductScreen/>}/>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/search/:termino" element={<SearchScreen/>}/>
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/favorites" element={<FavoritosScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
