import useTitulo from "../hooks/useTitulo"

const Contacto = () => {
    useTitulo('Contacto')
  return (
    <main className="main-form">
    
      <form className="main-form__form">
        <fieldset className="main-form__form__fieldset">
          <legend className="main-form__form__legend">Datos personales</legend>
         
          <div className="main-form__form__name">
            <label htmlFor="name">Nombre y apellido</label>
            <input id="name" type="text" />
          </div>

          <div className="main-form__form__email">
            <label htmlFor="email">Mail</label>
            <input id="email" type="email" />
          </div>

          <div className="main-form__form__tel">
            <label htmlFor="tel">Teléfono</label>
            <input id="tel" type="tel" />
          </div>

          <div className="main-form__form__description">
            <label htmlFor="description">Ingrese su comentario</label>
            <textarea id="description"></textarea>
          </div>
          <button className="main-form__form__btn">Enviar</button>
        </fieldset>
      </form>
     

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016888186302!2d-58.38414532339225!3d-34.603734457500416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1738346624998!5m2!1ses!2sar"
        
      ></iframe>
    </main>
  )
}

export default Contacto