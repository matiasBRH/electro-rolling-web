import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import AboutScreen from "../pages/AboutScreen";
import ContactoScreen from '../pages/ContactoScreen'
import FavoritosScreen from '../pages/FavoritosScreen'
import RegistroScreen from '../pages/RegistroScreen'
import SearchScreen from "../pages/SearchScreen";
import PasswordScreen from '../pages/PasswordScreen'
import ErrorScreen from '../pages/ErrorScreen';
import ContructionScreen from '../pages/ContructionScreen';
import HomeScreen from "../pages/HomeScreen";
import Footer from "../components/Footer";
import AdminScreen from "../pages/AdminScreen";
import ProductScreen from "../pages/ProductScreen";
import CartScreen from "../pages/CartScreen";
import CategoryScreen from '../pages/CategoryScreen'
import ProtectedRoutes from "../Routes/ProtectedRoutes";

const RoutesApp = () => {
  return (
    <>
    <NavbarApp/>   
    <Routes >
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path="/admin" element={
            <ProtectedRoutes>
              <AdminScreen />
            </ProtectedRoutes>
          }
        />
        <Route path="/contacto" element={<ContactoScreen/>}/>        
        <Route path="/productos/:id" element={<ProductScreen/>}/>
        <Route path="/category/:id" element={<CategoryScreen/>}/>
        <Route path="/search/:termino" element={<SearchScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
        <Route path="/favorites" element={<FavoritosScreen/>}/>
        <Route path="/register" element={<RegistroScreen/>}/>
        <Route path="/password" element={<PasswordScreen/>}/>
        <Route path="/search" element={<SearchScreen />} />             
        <Route path="/404" element={<ErrorScreen/>}/>        
        <Route path="/password" element={<PasswordScreen/>}/>     
        <Route path="/highlight" element={<ContructionScreen/>}/>        
        <Route path="*" element={<ErrorScreen/>}/>        
    </Routes>
    <Footer/>
    </>
  )
}

export default RoutesApp;