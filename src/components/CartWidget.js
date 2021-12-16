import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <div className="carrito">
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    )
}

export default CartWidget
