import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetails'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../service/firebase/firestore/products'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig' 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { itemId } = useParams()
    


    useEffect(() => {
        
        getProducts(itemId)
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            }).catch(error => {
                setError(error)
            })
            .finally (() =>{
                setLoading(false)
            })

        /* const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot =>{
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            }) */
    }, [itemId])
    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer