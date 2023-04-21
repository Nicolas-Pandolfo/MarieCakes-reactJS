import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import React, { useContext } from "react";
import './Cart.css'

const Cart = () => {
    const {cart, total } = useContext(CartContext)
    if(cart.length === 0){
        return(<div><h1>No hay productos en el carrito</h1></div>)
    }else{
        return (
            <div>
                <h1>Carrito de Compras</h1>
                <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                            <h4>{prod.name}</h4>
                            <p>Cantidad: {prod.quantity}</p>
                            </div>
                        )
                    })
                }
                    <div>Precio total de la compra: ${total}</div>
                </div>
                <Link className='Button' to='/checkout'>Finalizar compra</Link>
            </div>
        )
    }
}

export default Cart