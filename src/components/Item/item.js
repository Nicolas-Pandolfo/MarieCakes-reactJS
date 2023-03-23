import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>precio: {price}</h3>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item