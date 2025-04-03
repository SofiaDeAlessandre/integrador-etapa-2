import { Link } from "react-router";
import "./SearchBar.scss";
import CarritoContext from "../contexts/CarritoContext";
import { useContext } from "react";

const SearchBar = ({ onFilterTextChange, filterText }) => {
  const { quantity } = useContext(CarritoContext);
  const { cantidadTotalProductos } = useContext(CarritoContext);
  return (
    <div className="search-bar">
      <div className="search-bar__logo-container">
        <i className="fa-solid fa-mobile-screen-button"></i>
      </div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">
          Buscar
        </label>
        <input
          type="search"
          id="busqueda"
          className="search-bar__form-search"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </form>
      <div className="search-bar__carrito-container">
        <Link className="search-bar__carrito-container__link" to="/carrito">
          <i className="fa-solid fa-cart-shopping"></i>
          {cantidadTotalProductos > 0 && (
            <div className="search-bar__carrito-badge">
              {cantidadTotalProductos}
            </div>
          )}
        </Link>
      </div>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
