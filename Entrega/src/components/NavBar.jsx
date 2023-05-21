import { Link, NavLink, useParams } from 'react-router-dom'
import '../App.css'
import { CartWidget } from './CartWidget'

export function NavBar () {


    return(
      <nav className="navbar bg-black fontMenu nav" data-bs-theme="dark">
        <img className="logo" src="/logo.png" alt="" />
        <Link to='/'><button className='btn btn-black fontSize'>Productos</button></Link>
        <NavLink to='/category/cupcakes'><button className='fontSize btn btn-black'>Cupcakes</button></NavLink>
        <NavLink to='/category/tortas'><button className='btn btn-black fontSize'>Tortas</button></NavLink>
        <NavLink to='/category/box'><button className='btn btn-black fontSize'>Box</button></NavLink>
        <CartWidget />
      </nav>
    )
  }
