import React, { useContext } from "react";
import CarritoContext from "../../contexts/CarritoContext";
import Swal from "sweetalert2";
import "./ItemCarrito.scss";

const ItemCarrito = ({ producto }) => {
  const { eliminarProductoDelCarritoContext } = useContext(CarritoContext);

  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(137, 109, 200)",
      cancelButtonColor: "rgb(68, 28, 146)",
      confirmButtonText: "Sí, ¡borrar del carrito!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoDelCarritoContext(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El producto fue eliminado del carrito.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr>
      <td>
        <img src={producto.foto} alt={producto.nombre} width="50px" />
      </td>
      <td>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>{producto.precio}</td>
      <td>
        <button
          className="btn-eliminar-del-carrito"
          onClick={() => handleEliminar(producto.id)}
        >
          Eliminar
        </button>
      </td>
      <td>{producto.cantidad * producto.precio}</td>
    </tr>
  );
};

export default ItemCarrito;
