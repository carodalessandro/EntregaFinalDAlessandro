import { useEffect, useState } from "react";
import { ItemList } from "./itemList";
import { Link, useParams } from "react-router-dom";
import { getDocs, getFirestore, collection, query, where} from 'firebase/firestore'
import { Loading } from "./Loading";

export function ItemListContainer({}) {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()

    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')
        const queryCollectionFiltered = !category ?  queryCollection : query(
            queryCollection,
            where('category', '==', category)
        )

        getDocs(queryCollectionFiltered)
            .then(resp=> setProductos( resp.docs.map(producto => ( { id: producto.id, ...producto.data() }))))
            .catch( err=> console.log(err) )
            .finally(()=> setIsLoading(false))
        
    },[category])

    return (
        isLoading ? 
           <Loading />
        :
            <>
                <ItemList productos= { productos}/>
                <Link to={'/cartContainer'} className="btn btn-dark">Finalizar compra</Link>
            </>
    )
}
    