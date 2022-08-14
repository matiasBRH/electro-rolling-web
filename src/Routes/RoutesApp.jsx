import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import AdminScreen from '../pages/AdminScreen'
import SearchScreen from '../pages/SearchScreen'
<<<<<<< HEAD
import LoginScreen from '../pages/LoginScreen'
=======
import CartScreen from '../pages/CartScreen'
import AboutScreen from '../pages/AboutScreen'
import ContactoScreen from '../pages/ContactoScreen'
import FavoritosScreen from '../pages/FavoritosScreen'
import ErrorScreen from '../pages/ErrorScreen'
>>>>>>> a856fa6950ee2b6906bd89d764e92f20577abe8c

const RoutesApp = () => {

  return (
    
    <Routes >
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="/search/:termino" element={<SearchScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path="/contacto" element={<ContactoScreen/>}/>
        <Route path="/favorites" element={<FavoritosScreen/>}/>
<<<<<<< HEAD
        <Route path="/login" element={<LoginScreen/>}/>
=======
        <Route path="/admin" element={<AdminScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
>>>>>>> a856fa6950ee2b6906bd89d764e92f20577abe8c
        <Route path="*" element={<ErrorScreen/>}/>
    </Routes>
  )
}

export default RoutesApp