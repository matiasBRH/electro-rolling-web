import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import AdminScreen from '../pages/AdminScreen'
import SearchScreen from '../pages/SearchScreen'
import CartScreen from '../pages/CartScreen'
import AboutScreen from '../pages/AboutScreen'
import ContactoScreen from '../pages/ContactoScreen'
import FavoritosScreen from '../pages/FavoritosScreen'
import ErrorScreen from '../pages/ErrorScreen'
import CategoryScreen from '../pages/CategoryScreen'

const RoutesApp = () => {

  return (
    
    <Routes >
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="/search/:termino" element={<SearchScreen/>}/>
        <Route path="/category/:id" element={<CategoryScreen/>}/>
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