import { useEffect, useState } from "react";
import { ItemCount } from "./itemCount";
import { mFetch } from "../utils/mFetch";
import { ItemList } from "./itemList";
import { useParams } from "react-router-dom";
import { Hearts } from "react-loader-spinner";

export function ItemListContainer({}) {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()

    useEffect(()=>{
        if (!category) {
            mFetch()
            .then(resultado=>{
                setProductos(resultado)
            })
            .catch(error=> console.log(error))
            .finally(()=> setIsLoading(false))
        }else{
            mFetch()
            .then(resultado=>{
                setProductos(resultado.filter(producto => producto.category === category))
            })
            .catch(error=> console.log(error))
            .finally(()=> setIsLoading(false))
        }
    }, [category])

    return (
        isLoading ? 
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
            <ItemList productos= { productos}/>
    )
}
    