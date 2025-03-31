import { useRoutes } from "react-router";
import Inicio from "../pages/Inicio";
import Alta from "../pages/Alta";
import Nosotros from "../pages/Nosotros";
import Carrito from "../pages/Carrito";
import NoEncontrado from "../pages/NoEncontrado";
import Contacto from "../pages/Contacto";
import ProductosDetalle from "../components/components-alta/ProductosDetalle";

const Rutas = ({filterText}) => {
  const hookRutas = useRoutes([
    {
      path: "/",
      element: <Inicio filterText={filterText}/>,
    },
    {
      path: "/alta",
      element: <Alta />,
    },
    {
      path: "/alta/detalle/:id",
      element: <ProductosDetalle />,
    },
    {
      path: "/nosotros",
      element: <Nosotros />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
    {
      path: "/carrito",
      element: <Carrito />,
    },
    {
      path: "/*",
      element: <NoEncontrado />,
    },
  ]);
  return hookRutas;
};

export default Rutas;
