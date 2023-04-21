import Logo from './assets/Logo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink, useParams } from 'react-router-dom'
import { getCategories } from '../../service/firebase/firestore/categories'
import { useAsync } from '../../hooks/useAsync'
/* import { useEffect, useState } from 'react'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'
 */

const NavBar = () => {
  const { categoriesId } = useParams ()

    const getCategoriesWithId = () => getCategories (categoriesId)

    const { data: categories, error, loading} = useAsync(getCategoriesWithId, [categoriesId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }
    return (
      <nav className='NavBar'>
      <img src={Logo} alt="Logo"/>
      <Link className="Titulo" to='/'>Marie Cakes</Link>
      <div className='Categories'>
        {
          categories.map( cat=> {
            return (
              <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
              )
            })
          }
      <CartWidget className="CartWidget" />
      </div>
    </nav>
  )
}
export default NavBar

/* const [categories, setCategories] = useState([])

useEffect(() => {
  const categoriesRef = collection (db, 'categories')

  getDocs(categoriesRef)
    .then(snapshot => {
      const categoriesAdapted = snapshot.docs.map( doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })
      setCategories(categoriesAdapted)
    })
}, []) */