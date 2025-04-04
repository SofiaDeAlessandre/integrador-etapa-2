import { useContext } from "react";
import ProductosContext from "../../contexts/ProductosContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "./TablaFila.scss";

const TablaFila = ({ producto }) => {
  const navigate = useNavigate();

  const { eliminarProductoContext, setProductoAEditar } =
    useContext(ProductosContext);

  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(137, 109, 200)",
      cancelButtonColor: "rgb(68, 28, 146)",
      confirmButtonText: "Sí, ¡borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El producto fue eliminado.",
          icon: "success",
        });
      }
    });
  };

  const handleEditar = (producto) => {
    setProductoAEditar(producto);
  };

  const handleVer = (id) => {
    navigate(`/alta/detalle/${id}`);
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-tabla" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? "si" : "no"}</td>
      <td>
        <button className="btn-ver" onClick={() => handleVer(producto.id)}>
          Ver
        </button>
        <button className="btn-editar" onClick={() => handleEditar(producto)}>
          Editar
        </button>
        <button
          className="btn-borrar"
          onClick={() => handleEliminar(producto.id)}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
