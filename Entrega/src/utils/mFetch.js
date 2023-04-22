let productos = [
    {id: '1', name:"Box", category: "box", description:"Tres minicakes a elección, acompañadas de alfajores y bombones surtidos.", price: "4000", foto:'../public/Box1.jpg'},
    {id: '2', name:"Mini Red Velvet", category: "tortas", description:"Bizcochuelo aterciopelado relleno con un glaseado de queso con toques de naranja.", price: "1500", foto:"../public/minicake2.jpg"},
    {id: '3', name:"Brownie Frutos Rojos", category: "tortas", description:"Tarta Brownie de chocolate con toppings de crema y dulce de leche. Decorada con frutos rojos.", price: "3000", foto:"../public/minicake1.jpg"},
    {id: '4', name:"Mini Oreo", category: "tortas", description:"Tarta Brownie de chocolate con toppings de crema y dulce de leche. Decorada con galletas oreo.", price: "3000", foto:"../public/minicake3.jpg"},
    {id: '5', name:"Cupcake",category: "cupcakes", description:"Cupcakes de vainilla, con topping a elección, decorados con frutas de estación.", price: "500", foto:"../public/cupcakes3.jpg"},
    {id: '6', name:"Cupcake temático",category: "cupcakes", description:"Cupcakes de vainilla, decorados con temática a elección.", price: "700", foto:"../public/cupcakes2.jpg"}
    
]

export const mFetch = (id) => {
    return new Promise ((res, rej) =>{
        setTimeout (()=> {
            res(!id ? productos : productos.find(producto =>producto.id === id))
            },1000)
    })
}