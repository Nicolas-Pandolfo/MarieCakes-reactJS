import './CartWidget.css'
import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity, total } = useContext(CartContext)

    const navigate = useNavigate()

    return(
        <div className="CartWidget" onClick={() => navigate ('/cart')}>
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity} totasl ${total}
        </div>
    );
}

export default CartWidget