import { useContext } from "react"

import ItemCarrito from "./ItemCarrito"
import CarritoContext from "../../contexts/CarritoContext"
import './ListadoCarrito.scss'


const ListadoCarrito = () => {

    const { carrito, limpiarCarritoContext, guardarCarritoBackendContext } = useContext(CarritoContext)
    
    

    const handleComprar = () => {  
        guardarCarritoBackendContext()
    }
    
    const handleLimpiarCarrito = () => {
        limpiarCarritoContext()
    }

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
    }

  return (
    <>
    <table className='tabla-carrito'>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {
                carrito.length <= 0 ? (
                    <tr>
                        <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, idx) => (
                        <ItemCarrito key={idx} producto={producto} />
                    ))
                )
            }
        </tbody>
    </table>
    <hr />
    { !carrito.length <= 0 && (
            <>
                <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                <button onClick={handleComprar}>Comprar</button>
                <div className="total">
                        <strong>Total: </strong>
                        ${calcularTotal().toFixed(2)}
                    </div>
            </>
        )
    }
</>
  )
}

export default ListadoCarrito