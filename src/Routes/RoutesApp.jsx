import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AboutScreen from '../pages/AboutScreen'
import AdminScreen from '../pages/AdminScreen'
import CartScreen from '../pages/CartScreen'
import ContactoScreen from '../pages/ContactoScreen'
import ErrorScreen from '../pages/ErrorScreen'
import FavoritosScreen from '../pages/FavoritosScreen'
import HomeScreen from '../pages/HomeScreen'
import SearchScreen from '../pages/SearchScreen'

const RoutesApp = () => {

  return (
    
    <Routes >
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="/search/:termino" element={<SearchScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path="/contacto" element={<ContactoScreen/>}/>
        <Route path="/favorites" element={<FavoritosScreen/>}/>
        <Route path="/admin" element={<AdminScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
        <Route path="*" element={<ErrorScreen/>}/>
    </Routes>
  )
}

export default RoutesApp