import React, { useContext } from 'react';
import { createOrdenCompra,getOrdenCompra } from '../../service/firebase/firestore/orders';
import { getProducts, getProductsById } from "../../service/firebase/firestore/products";
import { CartContext } from '../../context/CartContext';
import Swal from "sweetalert2"

const Checkout = () => {
    const {getTotal, cart, clearCart} = useContext(CartContext)
    const datosFormulario = React.useRef()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...cart]

        aux.forEach(prodCarrito => {
            getProducts(prodCarrito.id).then(prod => {
                if(prod.stock >= prodCarrito.quantity) {
                    prod.stock -= prodCarrito.quantity
                    getProductsById(prodCarrito.id, prod)
                } else {
                }
            })
        })

        createOrdenCompra(cliente, getTotal , new Date().toISOString()).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id)
            .then(item => {
                Swal.fire(
                    'Compra finalizada',
                    `¡Muchas gracias por su compra, su orden es ${item.id}!`,
                    'success'
                )
                clearCart()
                e.target.reset()
            }).catch(error => {
                Swal.fire(
                    'Error',
                    `Hubo un error con su orden. Vuelva a intentarlo`,
                    'error'
                )
            })
            
        })
    }
        
        return (
            <div>
                <h1 >Complete sus datos para terminar la compra</h1>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div>
                    <label htmlFor="nombre" >Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div>
                    <label htmlFor="email2" >Repetir Email</label>
                    <input type="email" className="form-control" name="email2" />
                </div>
                <div>
                    <label htmlFor="dni" >DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div>
                    <label htmlFor="telefono" >Numero telefonico</label>
                    <input type="number" className="form-control" name="telefono" />
                </div>
                <div>
                    <label htmlFor="direccion" >Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="Buttton">Finalizar Compra</button>
            </form>
            </div>
        )
}

export default Checkout


/* import React, { useContext, useState } from 'react';
import { db } from '../../service/firebase/firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useNotification } from '../../notification/NotificationService';

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { setNotification} = useNotification
    const { cart, total, clearCart } = useContext(CartContext)
    const datosFormulario = React.useRef()
    const navigate = useNavigate()

    const handleConfirm = async(userData) => {
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        const objOrder = {
            buyer: cliente,
            item: cart,
            total: total
        }

        const ids = cart.map(prod => prod.id)
        const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
        const productsAddedFromFirestore = await getDocs(productRef)

        const { docs } = productsAddedFromFirestore
        const batch = writeBatch(db)
        const outOfStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stockDb
            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, { stock: stockDb - prodQuantity})
            } else {
                outOfStock.push ({ id: doc, ...dataDoc})
            }
        })

        if(outOfStock.length === 0){
            batch.commit()

            const orderRef = collection (db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
        } else {
            setNotification('error', 'Hay productos que no tienen stock disponible')
        }
    }
        
        return (
            <div>
                <h1 >Complete sus datos para terminar la compra</h1>
                <form onSubmit={handleConfirm} ref={datosFormulario}>
                <div>
                    <label htmlFor="nombre" >Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div>
                    <label htmlFor="email2" >Repetir Email</label>
                    <input type="email" className="form-control" name="email2" />
                </div>
                <div>
                    <label htmlFor="dni" >DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div>
                    <label htmlFor="telefono" >Numero telefonico</label>
                    <input type="number" className="form-control" name="telefono" />
                </div>
                <div>
                    <label htmlFor="direccion" >Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="Buttton">Finalizar Compra</button>
            </form>
            </div>
        )
}

export default Checkout */