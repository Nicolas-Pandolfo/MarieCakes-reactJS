import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import {createAdaptedProductFromFirestore} from '../../../adapters/createAdaptedProductFromFirestore'

export const getProducts = (categoryId) => {
    const productsRef = categoryId 
         ? query(collection(db, 'products'), where('category', '==', categoryId))
         : collection(db, 'products')
    
    return getDocs(productsRef)
         .then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
             })

             return productsAdapted
         })
        .catch(error => {
            return error
         })
}

export const getProductsById = (itemId) => {

    const collectionProd = collection(db,"products")

    const productRef = doc(collectionProd,itemId)

    return getDoc(productRef)
    .then(snapshot => {
            const productAdapted = { id:snapshot.id, ...snapshot.data()
            }
        
            return productAdapted
        })
        .catch(error => {
            return error
        })
}