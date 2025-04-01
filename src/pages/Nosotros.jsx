import useTitulo from "../hooks/useTitulo";
import "./Nosotros.scss";

const Nosotros = () => {
  useTitulo("Nosotros");
  return (
    <main className="main__acerca">
      <section className="section__acerca">
        <header className="section__acerca__header">
          <h1>Conocenos</h1>
          <p>¿Quiénes somos?</p>
        </header>
      </section>
      <section className="section__acerca__descripcion">
        Somos amantes de la teconología, es por eso que queremos garantizarte lo
        mejor en electro
      </section>
    </main>
  );
};

export default Nosotros;
