import React, { useState } from 'react'

const ItemCount = () => {

    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num+1)
    }

    const decNum = () => {
        if(num > 0){
            setNum(num-1)
        }else{
            setNum(0)
        }
    }
    return (
        <div className="card__count">
            <h5>{num}</h5>
            <div className="card__count__btn">
                <button className="btn__green" onClick={incNum}>+</button>
                <button className="btn__red" onClick={decNum}>-</button>
            </div>
        </div>
    )
}

export default ItemCount
