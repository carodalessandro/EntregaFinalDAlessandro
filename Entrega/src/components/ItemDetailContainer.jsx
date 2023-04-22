import { useParams } from "react-router-dom"
import { mFetch } from "../utils/mFetch"
import { useEffect } from "react"
import { useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { Hearts } from "react-loader-spinner"

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {pid} = useParams()

    useEffect(()=> {
 
        mFetch(pid)
        .then(resp => setProducto(resp))
        .catch(error=> console.log(error))
        .finally(()=>setIsLoading(false))
    
    }, [ ])

    return (
        <div className= 'cards row justify-content-evenly'>
            {isLoading ?
                <Hearts 
                height="200"
                width="200"
                color="pink"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass="loader"
                visible={true}
              />
                :
                <ItemDetail producto={producto} />
            }
        </div>
                )
}

