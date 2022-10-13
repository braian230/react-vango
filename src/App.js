import './App.css';
import React from 'react';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar }  from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {ContactoPage}  from "./components/ContactoPage/ContactoPage.jsx";
import {EventosDefault} from "./components/EventosDefault/EventosDefault";
function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <div>
        <NavBar/>
        <ItemListContainer title="Vango Accesorios" hamburguesa=""/>
      
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/contacto" element={<EventosDefault/>}/>
        </Routes>
        <footer>Todos los derechos reservados Vango 2022.</footer>
        </div>
      </div>
  </BrowserRouter>
    
  );
}

export default App;