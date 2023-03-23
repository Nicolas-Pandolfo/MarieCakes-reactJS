import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import Logo from './assets/Logo.jpg'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src={Logo} alt="Logo"/>
            <h1 className="Titulo">Marie Cakes</h1>
            <div className="Botones">
                <Link to='/category/alfajores'>Alfajores</Link>
                <Link to='/category/boxes'>Boxes</Link>
                <Link to='/category/cookies'>Cookies</Link>
                <Link to='/category/tartas'>Tartas</Link>
                <Link to='/category/tortas'>Tortas</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar