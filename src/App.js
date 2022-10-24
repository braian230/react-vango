import './App.css';
import React from 'react';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar }  from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";

import {EventosDefault} from "./components/EventosDefault/EventosDefault";
import { PaginaContexto } from "./components/PaginaContexto/PaginaContexto";
function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <div>
        <NavBar/>      
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/contacto" element={<EventosDefault/>}/>
            <Route path='/ejemplo-contexto' element={<PaginaContexto/>}/>
        </Routes>
        <footer>Todos los derechos reservados Vango Accesorios 2022.</footer>
        </div>
      </div>
  </BrowserRouter>
    
  );
}

export default App;