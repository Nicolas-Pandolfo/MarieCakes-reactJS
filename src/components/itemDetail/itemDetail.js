const ItemDetail = ({ name, price, img, description }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{ width: 200}}/>
            <h3>precio: {price}</h3>
            <p>descripcion: {description}</p>
        </div>
    )
}

export default ItemDetail