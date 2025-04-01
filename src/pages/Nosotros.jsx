import useTitulo from "../hooks/useTitulo";
import "./Nosotros.scss";

const Nosotros = () => {
  useTitulo("Nosotros");
  return (
    <main class="main__acerca">
      <section class="section__acerca">
        <header class="section__acerca__header">
          <h1>Conocenos</h1>
          <p>¿Quiénes somos?</p>
        </header>
      </section>
      <section class="section__acerca__descripcion">
        Somos amantes de la teconología, es por eso que queremos garantizarte lo
        mejor en electro
      </section>
    </main>
  );
};

export default Nosotros;
