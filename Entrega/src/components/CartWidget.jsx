import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export function CartWidget () {
    const {cantidadTotal} = useCartContext()
    return(
        <Link to={'/cartContainer'} className='logo'>
            <img  src="carritoCompras.png"/>
            <h1 className="fontSize"> {cantidadTotal() !== 0 && cantidadTotal()} </h1>
        </Link>
    )
}

