import { useContext } from "react";
import Card from "../components/Card";
import "./Inicio.scss";
import ProductosContext from "../contexts/ProductosContext";
import useTitulo from "../hooks/useTitulo";

const Inicio = ({ filterText }) => {
  const { productos } = useContext(ProductosContext);

  const productosFiltrados = productos?.filter((producto) =>
    producto.nombre.toLowerCase().includes(filterText.toLowerCase())
  );

  useTitulo("Inicio");

  return (
    <main className="main-section-cards">
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>¡Bienvenidos a Boutique!</h1>
          <p>
            {" "}
            Se encontró{" "}
            {productosFiltrados?.length > 1
              ? `${productosFiltrados?.length} productos`
              : `${productosFiltrados?.length} producto`}
          </p>
        </header>
      </section>

      <section className="cards-container" id="container-products">
        {productosFiltrados?.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Card producto={producto} key={producto.id} />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </section>
    </main>
  );
};

export default Inicio;
