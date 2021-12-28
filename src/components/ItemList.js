import React from 'react'
import ItemCount from './ItemCount'

const ItemList = (props) => {
    console.log(props)
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} alt="hamburger"/>
                <h2 className="card__tittle">{props.tittle}</h2>
                <p className="card__desc">{props.desc}</p>
                <h4 className="card__price">{props.price}</h4>
            </div>
            <ItemCount />
            <button className="card__btn">Añadir al carrito</button>
        </div>
    )
}

export default ItemList
