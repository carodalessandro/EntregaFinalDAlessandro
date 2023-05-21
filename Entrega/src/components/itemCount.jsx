import {useCounter} from "../hook/useCouter"

export const ItemCount = ({initial= 1, stock= 5, onAdd}) => {
    
    const {counter, handleSumar, handleRestar} = useCounter(initial, 1, stock)
   
    return(
        <div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={handleSumar} className="btn btn-dark"> +1 </button>
                <p className="fontCounter">{counter}</p>
                <button onClick={handleRestar} className="btn btn-dark"> -1 </button>
                <div className= "d-grid gap-2 d-md-flex justify-content-md-end">
                    <button onClick={ () => onAdd(counter) } className="btn btn-dark">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

