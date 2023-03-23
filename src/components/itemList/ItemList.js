import Item from "../Item/item"

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            {
                 products.map(product => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList