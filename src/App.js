import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Create from './components/Create'
import Home from './components/Home'
import Update from './components/Update'
import Pnf from './components/Pnf';
import Products from './components/screens/Products'

function App() {
  return (
   <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path={`/`} element={ <Home/> }/>
        <Route path={`/create`} element={ <Create/> }/>
        <Route path={`/category/:cName/products`} element={ <Products/> }/>
        <Route path={`/update/:id`} element={ <Update/> }/>
        <Route path={`/*`} element={ <Pnf/> }/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
