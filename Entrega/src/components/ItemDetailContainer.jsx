import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { ItemDetail } from "./ItemDetail"
import {getDoc, getFirestore, doc} from 'firebase/firestore'
import { Loading } from "./Loading"


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {pid} = useParams()


    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'productos', pid)

        getDoc(queryDoc)
            .then(producto=> setProducto( { id: producto.id, ...producto.data() } ) )
            .catch(err=> console.log(err) )
            .finally(()=> setIsLoading(false))

    },[])
 
    return (
        <div className= 'cards row justify-content-evenly'>
            {isLoading ?
                <Loading />
            :
                <ItemDetail producto={producto} />
                
            }
        </div>
                )
}

