import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { addDoc, collection, getDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"

export const CartContainer = () => {
    const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        confirmEmail: ''
    })
    const{ cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()
  
    
    const generarOrden = (evt) => {
        evt.preventDefault()
        
        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(({name, id, price, cantidad}) => ({id, name, price, cantidad}))
        order.total = precioTotal()   

        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'orders')

        if (dataForm.email !== dataForm.confirmEmail || dataForm.name === dataForm.phone){
            alert("Verifique sus datos")
        }else{
            addDoc(ordersCollection, order)
            .then(resp => setId(resp.id))
            .catch(err => console.log(err))
            .finally(()=> {
                    setDataForm({
                        name: '',
                        phone: '',
                        email: '',
                        confirmEmail: ''
                    })
                    setTimeout(()=>{
                        vaciarCarrito()
                        setId('')
                    },5000)
                })
            }
    }

    const handleOnChange = (evt)=> {
        console.log('nombre del input',evt.target.name)
        console.log('valor del input',evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        }) 
    }
    console.log(dataForm)

    return (
        <div>
            {id.length !== 0 && 
            <h3> El id de la orden de compra es: {id} </h3>}
            {cartList.length !==0 ?
                <>
                    {cartList.map(producto =>(
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={producto.foto} className="card-img-top imgCart" alt='imagen de {productos.name}' />
                                </div> 
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fontBig">Producto: {producto.name}</h5>
                                        <p className="card-text font">
                                            Precio: {producto.price}                                
                                        </p>
                                        <p className="card-text font">
                                            Cantidad: {producto.cantidad}
                                        </p>
                                        <button onClick= {()=>eliminarProducto(producto.id)} className="btn btn-dark font">Eliminar producto</button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    ))}

                    <p className="card-text fontBig">
                        Total compra: {precioTotal()}
                    </p>
                    
                    <Link to={'/'} >
                        <button onClick={vaciarCarrito} className="btn btn-dark font">Vaciar Carrito</button>
                        <button className="btn btn-dark font">Seguir comprando</button>
                    </Link>

                    <form onSubmit={generarOrden}>
                        <div className="cards">
                            <input 
                                type="text" 
                                name="name" 
                                className="fontBig"
                                onChange={handleOnChange}
                                value={dataForm.name} 
                                placeholder="Ingrese nombre"
                            />
                            <input 
                                type="text" 
                                name="phone" 
                                className="fontBig"
                                onChange={handleOnChange}
                                value={dataForm.phone} 
                                placeholder="Ingrese teléfono"
                            />
                        </div>
                        <div className="cards">
                            <input 
                                type="text" 
                                name="email" 
                                className="fontBig"
                                onChange={handleOnChange}
                                value={dataForm.email} 
                                placeholder="Ingrese email"
                                />
                            <input 
                                type="text" 
                                name="confirmEmail" 
                                className="fontBig"
                                onChange={handleOnChange}
                                value={dataForm.confirmEmail} 
                                placeholder="Confirme email"
                            />
                        </div>
                        <button className="btn btn-dark fontBig">Finalizar compra</button>
                    </form>
                </>
            :
                <div>
                    <h2>El carrito está vacío</h2>
                    <Link to={'/'}  className="btn btn-dark">Inicio</Link>
                </div>
            }       
        </div>


    )

}



