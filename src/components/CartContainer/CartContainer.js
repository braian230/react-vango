import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {collection, addDoc, doc, updateDoc, getFirestore} from "firebase/firestore";
import React from "react";
import {Link} from 'react-router-dom';
import {db} from "../../utils/firebase"
import swal from 'sweetalert2';
import "./CartContainer.css";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

export const CartContainer = ()=>{
    const value = useContext(CartContext);
    const {productosCarrito, getTotalPrice, getTotalProducts, removeItem, vaciarCarrito} = value;
    const [compraId, setCompraId] = useState("");

    const sendOrder = (evt)=>{
        evt.preventDefault();
       
        const compra = {
            buyer:{
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value
            },
            items: productosCarrito,
            total: getTotalPrice(),
            date: new Date().toDateString()
        }
        const querydb = getFirestore();
        const queryRef = collection(querydb,"orders");
        //agregar la informacion
        addDoc(queryRef,compra).then((resultado)=>{
            
            setCompraId(resultado.id);
        }) 
    }
    const viewAlert = ()=>{
      swal.fire({
        icon:'success',
        title:'Compra exitosa!',
        text: 'Estas siendo redirigido',
        html:`<p>Tu numero de pedido es:${compraId}</p>`,

      }).then(function(){
        window.location= '/';
        vaciarCarrito()
      })
    }

    const updateProduct = ()=>{
  
        const queryRef = doc(db,"items","HfIz8PlCwnXt5pws8g9b");
        updateDoc(queryRef,{price:120}).then(()=>console.log("actualizado correctamente")).catch((error)=>console.log("hubo un error"))
    }
    if (productosCarrito.length === 0) {
      return (
        <div className="CartCont">
            <img src="" alt="" />
            <h3 className="tituloCart">No hay productos en el carrito </h3>
            <ShoppingCartCheckoutOutlinedIcon/>
            <Link className="btn btn-dark btn-sm" to="/">Click aquí para ir a productos</Link>
            
        </div>
      )
    }


    return(
            <div>
            <p>pagina del carrito</p>
            {compraId && <p>Su compra fue realizada con el numero de orden {compraId}</p>}
            <div style={{width:"500px"}}>
                {
                    productosCarrito.map((producto)=>(
                        <div style={{border:"1px solid black"}}>
                            <h3>{producto.title}</h3>
                            <p>precio unitario {producto.price}</p>
                            <p>cantidad {producto.quantity}</p>
                            <p>Precio por cantidad {producto.quantityPrice}</p>
                            <button onClick={()=>removeItem(producto.id)}>Eliminar</button>
                        </div>
                    ))
                }
                <p>Precio Total: {getTotalPrice()}</p>
                <p>Total de Productos: {getTotalProducts()}</p>
                <button className="btn btn-dark btn-sm" onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
          
                <p><strong>Precio total: </strong> {getTotalPrice()}$</p>
                <p><strong>Total de productos: </strong> {getTotalProducts()}</p>
                <form onSubmit={sendOrder}>
                    <label>Nombre</label>
                    <input type="text" placeholder="Nombre"/>
                    <label>Apellido</label>
                    <input type="text" placeholder="Apellido"/>
                    <label>Telefono</label>
                    <input type="number" placeholder="Telefono"/>
                    <label>Correo</label>
                    <input type="email" placeholder="Correo electronico"/>
                    <label>Dni</label>
                    <input type="number" placeholder="DNI"/>
                    <label>Dirección</label>
                    <input type="number" placeholder="Direccion"/>
                    
                    <button className="boton-comprar" type="submit">Comprar</button>
                </form>
            </div>
            <button onClick={updateProduct}>Actualizar producto</button>
            {compraId && viewAlert()}
        </div>
    )
}