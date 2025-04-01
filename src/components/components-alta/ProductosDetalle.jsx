import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Spinner from "../Spinner";
import "./ProductosDetalles.scss";

const ProductosDetalle = () => {
  const { id } = useParams();

  const [productoDetalle, setProductoDetalle] = useState(null);

  useEffect(() => {
    getOne(id);
  }, []);

  const getOne = async (id) => {
    const urlGetOne = "http://localhost:8080/productos/" + id;
    try {
      const res = await fetch(urlGetOne);
      if (!res.ok) {
        throw new Error("No se pudo obtener el producto");
      }
      const data = await res.json();
      setProductoDetalle(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main__detalle">
      <h1>Producto Detalle</h1>
      {productoDetalle ? (
        <>
          <h2>El nombre del producto: {productoDetalle.nombre}</h2>
          <p>Los detalles del producto son: {productoDetalle.detalles}</p>
          <p>La categoría del producto es: {productoDetalle.categoria}</p>
          <p>El precio: ${productoDetalle.precio}</p>
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default ProductosDetalle;
