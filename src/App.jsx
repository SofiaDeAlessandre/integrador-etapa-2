import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Rutas/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App