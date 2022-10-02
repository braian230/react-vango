import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon className="chango" icon={faCartShopping} />
        </div>
    )
}