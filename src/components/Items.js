import React, { useState } from 'react'
import ItemList from './ItemList'
const allItems = [
        {
            id: 1,
            img: "https://bigpons.com.ar/productos/20210422181717.jpeg",
            tittle: "F&D Simple + Papas Fritas",
            desc: "Medallon x1 Cheddar Fetas x2 Bacon Cebolla Crispy Aderezo F&D",
            price:"$ 900"
        },
        {
            id: 2,
            img: "https://bigpons.com.ar/productos/20210911160112.jpeg",
            tittle: "F&D Sweet Onion Simple + Papas Fritas",
            desc: "Medallon x1 Cheddar Fetas x2 Bacon Cebolla Caramelizada",
            price:"$ 900"
        },
        {
            id: 3,
            img: "https://bigpons.com.ar/productos/20210526114331.jpeg",
            tittle: "F&D Doble + Papas Fritas",
            desc: "Medallon x2 Cheddar Fetas x4 Bacon Cebolla Crispy Aderezo F&D",
            price:"$ 1100"
        },
]
const Items = () => {
    const [items] = useState([
        {
            id: 1,
            img: "https://bigpons.com.ar/productos/20210422181717.jpeg",
            tittle: "F&D Simple + Papas Fritas",
            desc: "Medallon x1 Cheddar Fetas x2 Bacon Cebolla Crispy Aderezo F&D",
            price:"$ 900"
        },
        {
            id: 2,
            img: "https://bigpons.com.ar/productos/20210911160112.jpeg",
            tittle: "F&D Sweet Onion Simple + Papas Fritas",
            desc: "Medallon x1 Cheddar Fetas x2 Bacon Cebolla Caramelizada",
            price:"$ 900"
        },
        {
            id: 3,
            img: "https://bigpons.com.ar/productos/20210526114331.jpeg",
            tittle: "F&D Doble + Papas Fritas",
            desc: "Medallon x2 Cheddar Fetas x4 Bacon Cebolla Crispy Aderezo F&D",
            price:"$ 1100"
        },
    ]);
    return (
        <div className="wrapper">
            {items.map(items => {
                return <ItemList key={items.id} img={items.img} tittle={items.tittle} desc={items.desc} price={items.price}/>
            })}
        </div>
    );
};

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(allItems)
        }, 2000)
    })
}

getProducts().then((Items) => console.log (Items))

export default Items
