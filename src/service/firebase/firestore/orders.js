import  { addDoc, collection, getDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

export const createOrdenCompra = async (cliente ) => {

    const ordenCompra = await addDoc(collection(db, "orders"),{
        nombreCompleto: cliente.nombre,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
    })

    
    return ordenCompra
}

export const getOrdenCompra =  async (id) => {
    const ordenCompra = await getDoc(doc(db, "orders", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}