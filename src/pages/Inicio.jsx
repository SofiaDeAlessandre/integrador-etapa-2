import Footer from "../components/Footer";
import Header from "../components/Header";

const Inicio = () => {
  return (
    <>
    <Header/>
          <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>¡Bienvenidos a Boutique!</h1>
            <p>Se encontraron x productos</p>
          </header>
        </section>

        <section className="cards-container" id="container-products"></section>
      </main>
<Footer/>
      
    </>
  );
};

export default Inicio;
