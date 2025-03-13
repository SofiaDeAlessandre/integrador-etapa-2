import { useContext } from "react";
import Card from "../components/Card";
import "./Inicio.scss";
import ProductosContext from "../contexts/ProductosContext";

const Inicio = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>¡Bienvenidos a Boutique!</h1>
          <p>Se encontraron x productos</p>
        </header>
      </section>

      <section className="cards-container" id="container-products">
        {productos && productos.map((producto) => (<Card producto={producto} key={producto.id} />))}
      </section>
      {/* <Card/> */}
    </main>
  );
};

export default Inicio;
