import '../App.css'
import { CartWidget } from './CartWidget'

export function NavBar () {
    return(
      <div>
        <nav className="navbar bg-black fontMenu nav" data-bs-theme="dark">
          <img className="logo" src="./src/img/logo.png" alt="" />
          <button className='fontMenu'>Quienes somos</button>
          <button className='fontMenu'>Productos</button>
          <button className='fontMenu'>Home</button>
          <button className='fontMenu'>Contacto</button>
          <CartWidget />
        </nav>
      </div>
    )
  }