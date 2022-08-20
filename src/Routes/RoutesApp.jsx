import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import AboutScreen from "../pages/AboutScreen";
import ContactoScreen from '../pages/ContactoScreen'
import FavoritosScreen from '../pages/FavoritosScreen'
import RegistroScreen from '../pages/RegistroScreen'
import PasswordScreen from '../pages/PasswordScreen'
import SendScreen from '../pages/SendScreen'
import ErrorScreen from '../pages/ErrorScren';

const RoutesApp = () => {
  return (
     <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contacto" element={<ContactoScreen/>}/>
        <Route path="/favorites" element={<FavoritosScreen/>}/>
        <Route path="/registro" element={<RegistroScreen/>}/>
        <Route path="/password" element={<PasswordScreen/>}/>
        <Route path="/send" element={<SendScreen/>}/>
       
        <Route path="*" element={<ErrorScreen/>}/>
        
    </Routes>
    </>
  )
}

export default RoutesApp;
