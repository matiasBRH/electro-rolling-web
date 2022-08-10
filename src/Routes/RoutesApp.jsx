import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AboutScreen from '../pages/AboutScreen'
import AdminScreen from '../pages/AdminScreen'
import CartScreen from '../pages/CartScreen'
import ErrorScreen from '../pages/ErrorScreen'
import FavoritosScreen from '../pages/FavoritosScreen'
import HomeScreen from '../pages/HomeScreen'
import RegisterScreen from '../pages/RegisterScreen'
import SearchScreen from '../pages/SearchScreen'

const RoutesApp = () => {

  return (
    
    <Routes >
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="/admin" element={<AdminScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/search" element={<SearchScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
        <Route path="/favorites" element={<FavoritosScreen/>}/>
        <Route path="*" element={<ErrorScreen/>}/>
    </Routes>
  )
}

export default RoutesApp