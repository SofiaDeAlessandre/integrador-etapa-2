import Card from "../components/Card";
import './Inicio.scss'

const Inicio = () => {
  return (
          <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>¡Bienvenidos a Boutique!</h1>
            <p>Se encontraron x productos</p>
          </header>
        </section>

        <section className="cards-container" id="container-products"></section>
        <Card/>
      </main>    
  );
};

export default Inicio;
