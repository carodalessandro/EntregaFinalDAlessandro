import { Item } from "./Item"


export const ItemList = ({productos}) => {


    return(
        <div className= 'cards row justify-content-evenly'>
            {productos.map((producto => <Item 
                key={producto.id} 
                producto= {producto}
                />) 
            )
            }
        </div>
    )
}

