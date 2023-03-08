import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import Logo from './assets/Logo.jpg'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src={Logo} alt="Logo"/>
            <h1 className="Titulo">Marie Cakes</h1>
            <div className="Botones">
                <button className='btn btn-dark'>Alfajores</button>
                <button>Boxes</button>
                <button>Cookies</button>
                <button>Tartas</button>
                <button>Tortas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar