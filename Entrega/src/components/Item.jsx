import { Link } from "react-router-dom"

export const Item = ({producto, onAdd}) => {
    return(
        <div key={producto.id} className='card col-4 marginCards'>
            <img src={producto.foto} className="card-img-top img" alt='imagen de {name}'/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <label>Precio: ${producto.price}</label>
            </div>
            <div>
                <Link to={`/item/${producto.id}`}>
                    <button className="btn btn-dark">Detalle</button>
                </Link>
            </div>
        </div>
    )
}