import { useEffect, useState } from "react"
import { getProductById} from "../../asyncMock"
import ItemDetail from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { itemId } = useParams()
 
    useEffect(() => {

        getProductById(itemId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
            
    }, [itemId])

    return (
        <div>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer