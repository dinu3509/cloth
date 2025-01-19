import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'

import Home from './pages/Home'
const App = () => {
  return (
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/men' element={<Men/>}></Route>
    <Route path='/women' element={<Women/>}></Route>
    <Route path='/kids' element={<Kids/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
</Routes>
  )
}

export default App
