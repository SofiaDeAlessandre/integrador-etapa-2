const Inicio = () => {
  return (
    <>
      <header className="main-header">
        <input type="checkbox" id="menu" />
        <nav className="nav-bar">
          <ul className="nav-bar__nav-list">
            <li className="nav-bar__nav-item">
              <a href="index.html" className="nav-bar__nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-bar__nav-item">
              <a href="" className="nav-bar__nav-link">
                Alta
              </a>
            </li>
            <li className="nav-bar__nav-item">
              <a
                href="/src/pages/nosotros/nosotros.html"
             className="nav-bar__nav-link"
              >
                Nosotros
              </a>
            </li>
            <li className="nav-bar__nav-item">
              <a
                href="/src/pages/contacto/contacto.html"
             className="nav-bar__nav-link"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="search-bar">
          <div className="search-bar__logo-container">
            <i className="fa-solid fa-seedling"></i>
          </div>
          <form action="#" className="search-bar__form-container">
            <label htmlFor="busqueda" className="search-bar__form-label">
              Buscar
            </label>
            <input
              type="search"
              id="busqueda"
             className="search-bar__form-search"
            />
            <button type="submit" className="search-bar__form-submit">
              Buscar
            </button>
          </form>
          <div className="search-bar__carrito-container">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>

          <div className="menu-toogle">
            <label htmlFor="menu" className="menu-toogle__label">
              <span className="menu-toogle__top-bread"></span>
              <span className="menu-toogle__meat"></span>
              <span className="menu-toogle__bottom-bread"></span>
            </label>
          </div>
        </div>
      </header>

      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>¡Bienvenidos a Boutique!</h1>
            <p>Se encontraron x productos</p>
          </header>
        </section>

        <section className="cards-container" id="container-products"></section>
      </main>

      <footer className="footer">
        <section className="footer__section-icons-imgs">
          <section className="footer__payment-method">
            <p>Medios de pago:</p>
            <div className="footer__payment-method__visa">
              <img src="imgs/visa.webp" alt="Tarjeta Visa" />
            </div>
            <div className="footer__payment-method__mastercard">
              <img src="imgs/mastercard.webp" alt="Tarjeta Mastercard" />
            </div>
            <div className="footer__payment-method__mercado-pago">
              <img src="imgs/mercado-pago.webp" alt="Mercado Pago" />
            </div>
          </section>

          <section className="footer__icons">
            <p>Buscanos en nuestras redes sociales:</p>
            <div className="footer__icon-instagram">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="footer__icon-facebook">
              <i className="fa-brands fa-square-facebook"></i>
            </div>
            <div className="footer__icon-correo">
              <i className="fa-solid fa-envelope"></i>
            </div>
          </section>
        </section>

        <section className="footer__copyrigth">
          ® COPYRIGTH SOFIA DE ALESSANDRE 2025
        </section>
      </footer>
    </>
  );
};

export default Inicio;
