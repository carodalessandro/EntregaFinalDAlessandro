import { Link } from "react-router-dom"
import { ItemCount } from "./itemCount"

export const Item = ({producto}) => {
    return(
        <div key={producto.id} className='card col-4 marginCards'>
            <img src={producto.foto} className="card-img-top img" alt='imagen de {name}'/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <label>Precio: ${producto.price}</label>
            </div>
            <div> 
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">Agregar producto</div>                
                <ItemCount />
            </div>
            <div>
                <Link to={`/item/${producto.id}`}>
                    <button className="btn btn-dark">Detalle</button>
                </Link>
            </div>
        </div>
    )
}