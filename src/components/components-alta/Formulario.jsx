import { useContext, useEffect, useState } from "react";
import ProductosContext from "../../contexts/ProductosContext";
import "./Formulario.scss";

const Formulario = () => {
  const {
    crearProductoContext,
    productoAEditar,
    setProductoAEditar,
    actualizarProductoContext,
  } = useContext(ProductosContext);

  const formInicial = {
    id: null,
    nombre: "",
    precio: "",
    stock: "",
    marca: "",
    categoria: "",
    detalles: "",
    foto: "",
    envio: false,
  };

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial);
  }, [productoAEditar]);

  const [form, setForm] = useState(formInicial);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      crearProductoContext(form);
    } else {
      actualizarProductoContext(form);
    }
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleReset = () => {
    setForm(formInicial);
    setProductoAEditar(null);
  };

  return (
    <>
      <h2>{productoAEditar ? "Editar" : "Crear"}</h2>
      <form className="form__alta" onSubmit={handleSubmit}>
        <fieldset className="form__alta__fieldset">
          <legend className="form__alta__legend">Datos de producto</legend>
          <div className="form__alta__nombre">
            <label htmlFor="lbl-nombre">Nombre</label>
            <input
              type="text"
              id="lbl-nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="form__alta__precio">
            <label htmlFor="lbl-precio">Precio</label>
            <input
              type="text"
              id="lbl-precio"
              name="precio"
              value={form.precio}
              onChange={handleChange}
            />
          </div>

          <div className="form__alta__stock">
            <label htmlFor="lbl-stock">Stock</label>
            <input
              type="text"
              id="lbl-stock"
              name="stock"
              value={form.stock}
              onChange={handleChange}
            />
          </div>

          <div className="form__alta__marca">
            <label htmlFor="lbl-marca">Marca</label>
            <input
              type="text"
              id="lbl-marca"
              name="marca"
              value={form.marca}
              onChange={handleChange}
            />
          </div>

          <div className="form__alta__categoria">
            <label htmlFor="lbl-categoria">Categoria</label>
            <input
              type="text"
              id="lbl-categoria"
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
            />
          </div>

          <div className="form__alta__detalles">
            <label htmlFor="lbl-detalle">Detalles</label>
            <input
              type="text"
              id="lbl-detalle"
              name="detalles"
              value={form.detalles}
              onChange={handleChange}
            />
          </div>

          <div className="form__alta__foto">
            <label htmlFor="lbl-foto">Foto</label>
            <input
              type="text"
              id="lbl-foto"
              name="foto"
              value={form.foto}
              onChange={handleChange}
            />
          </div>

          <div className="form__alta__envio">
            <label htmlFor="lbl-envio">Envío</label>
            <input
              type="checkbox"
              id="lbl-envio"
              name="envio"
              checked={form.envio}
              onChange={handleChange}
            />
          </div>

          <button className="form__alta__btn" type="submit">
            {productoAEditar ? "Editar" : "Crear"}
          </button>
          <button
            className="form__alta__btn"
            type="reset"
            onClick={handleReset}
          >
            Limpiar
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Formulario;
