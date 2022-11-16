import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


export const CartWidget = ()=>{
    const {getTotalProducts} = useContext(CartContext);
    
        return(
        <div>
            <ShoppingBagIcon/>
        
            
            <span>{getTotalProducts()}</span>
        </div>
    )
}