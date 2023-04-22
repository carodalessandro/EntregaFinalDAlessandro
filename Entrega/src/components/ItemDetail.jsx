import { Link } from "react-router-dom"
import { ItemCount } from "./itemCount"

export const ItemDetail = ({producto}) => {

    return(
        <div key={producto.pid} className='card col-4 marginCards'>
              <img src={producto.foto} className="card-img-top img" alt='imagen de {productos.name}'/>
            <div className="card-body">
                 <h5 className="card-title">{producto.name}</h5>
                <label>Precio: ${producto.price}</label>
            </div>
            <div> 
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">Agregar producto</div>                
                <ItemCount />
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