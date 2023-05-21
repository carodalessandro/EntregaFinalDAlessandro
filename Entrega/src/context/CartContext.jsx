import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = ( ) => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

    const addToCart = ( newProduct ) => {

        const idx = cartList.findIndex(producto=> newProduct.id === producto.id)

        if (idx === -1){

            setCartList([
                ...cartList,
                newProduct
            ])

        } else {

            cartList[idx].cantidad = cartList[idx].cantidad + newProduct.cantidad
            setCartList([...cartList])
        }
    }

    const cantidadTotal = () => cartList.reduce((total, objetoProducto) => total += objetoProducto.cantidad, 0)

    const precioTotal = () => cartList.reduce((total, objetoProducto)=> total += (objetoProducto.cantidad * objetoProducto.price), 0)

    const eliminarProducto = (pid) => {
        setCartList(cartList.filter(producto => producto.id !== pid))
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{

            cartList,
            addToCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto

            }}>
            {children}

        </CartContext.Provider>
    )
}