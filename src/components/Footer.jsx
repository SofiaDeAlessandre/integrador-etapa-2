
const Footer = () => {
  return (
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
  )
}

export default Footer