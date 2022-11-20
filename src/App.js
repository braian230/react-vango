import './App.css';
import React from 'react';
import { CartContainer } from './components/CartContainer/CartContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar }  from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./context/CartContext"
function App() {
 
  
  return (
<CartProvider>  
  <BrowserRouter>
      <div className="App">
        <div>
        <NavBar/>      
        <Routes>
      
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
        <footer>Todos los derechos reservados Vango Accesorios 2022.</footer>
        </div>
      </div>
  </BrowserRouter>
</CartProvider>    
    );

}

export default App;