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
    const {productosCarrito, getTotalPrice, getTotalProducts, removeItem,vaciarCarrito} = value;
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
        addDoc(queryRef,compra).then((resultado)=>{
            
            setCompraId(resultado.id);
        }) 
    }
    const viewAlert = ()=>{
      swal.fire({
        icon:'success',
        title:'Compra exitosa!',
        text: 'Estas siendo redirigido',
        html:`<p>Tu numero de pedido es:${compraId}</>`,

      }).then(function(){
        window.location= '/';
        vaciarCarrito()
      })
    }
    if (productosCarrito.length === 0) {
      return (
        <div className="CartCont">
            <img src="" alt="" />
            <h3 className="tituloCart">No hay productos en el carrito </h3>
            <ShoppingCartCheckoutOutlinedIcon/>
            <Link className="btn btn-dark btn-sm" to="/">Click aquí para ir a productos</Link>
            p
        </div>
      )
    }


    return(
            <div>
            <h4>Detalle de la compra</h4>
            {compraId && <p>Su compra fue realizada con el numero de orden {compraId}</p>}
            <div style={{width:"500px"}}>
                {
                    productosCarrito.map((producto)=>(
                        <div style={{border:"1px solid black"}}>
                            <h3>{producto.title}</h3>
                        
                            
                         
                            <p className="preciou">precio unitario ${producto.price}</p>
                            <p className="preciou">cantidad de productos: {producto.quantity}</p>
                            <p className="preciou">Precio por cantidad: ${producto.quantityPrice}</p>
                            <p><strong>Precio total: $</strong> {getTotalPrice()}</p>
                <p><strong>Total de productos: </strong> {getTotalProducts()}</p>
                            <button className="btn btn-danger btn-sm" onClick={()=>removeItem(producto.id)}>Eliminar producto</button>
                        </div>
                    ))
                }
                <button className="eliminar btn btn-danger btn-sm" onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
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
            {compraId && viewAlert()}
        </div>
    )
}