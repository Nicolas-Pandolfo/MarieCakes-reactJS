import { useState } from "react";

const ItemCount = ({onAdd}) => {

    const [count, setCount] = useState(1)

    const decrement = () => {
        if(count > 1){
            setCount( count - 1)
        }
    }

    const increment = () => {setCount(count => count + 1)}

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount