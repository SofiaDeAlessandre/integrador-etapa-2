import { useRoutes } from "react-router";
import Inicio from "../pages/Inicio";
import Alta from "../pages/Alta";
import Nosotros from "../pages/Nosotros";
import Carrito from "../pages/Carrito";
import NoEncontrado from "../pages/NoEncontrado";

const Rutas = () => {
  const hookRutas = useRoutes([
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/alta",
      element: <Alta />,
    },
    {
      path: "/nosotros",
      element: <Nosotros />,
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
