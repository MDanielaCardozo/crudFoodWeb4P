const productosBackend = import.meta.env.VITE_API_PRODUCTOS;

export const crearProducto = async(producto) => {
    try {
        console.log(producto);
        
        const respuesta = await fetch(productosBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto)
        })
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.log(error);
        return null
    }
}