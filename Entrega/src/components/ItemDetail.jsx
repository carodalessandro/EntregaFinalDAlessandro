import { Link } from "react-router-dom"
import { ItemCount } from "./itemCount"
import {useState } from "react"
import { useCartContext } from "../context/CartContext"

export const ItemDetail = ({producto}) => {
   
    const [isCant, setIsCant] = useState(false)
    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        addToCart({...producto, cantidad})
        setIsCant(true)
    }

    return(
            <div key={producto.pid} className='card col-4 marginCards'>
                <img src={producto.foto} className="card-img-top img" alt='imagen de {producto.name}'/>
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <label>Precio: ${producto.price}</label>
                </div>
                <div> 
                    {
                        !isCant ?
                            <ItemCount onAdd={onAdd}/>
                        :
                            <>
                                <Link to={'/cartContainer'} className="btn btn-dark">Ir al carrito</Link>
                                <Link to={'/'} className="btn btn-dark">Continuar compra</Link>
                            </>
                    }                
                </div>
                <div>
                    <h3>Detalle</h3>
                    <p>{producto.description}</p>
                </div>
                <div>
                    <Link to={'/'}>
                        <button className="btn btn-dark">Volver</button>
                    </Link>
                </div>
            </div>

    )
}