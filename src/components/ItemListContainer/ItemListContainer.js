import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../itemList/ItemList"
import {  useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProductsState(products)
            })
            .catch(error => {
                console.log(error)
            })

    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={productsState}/>
        </div>
    )
}

export default ItemListContainer