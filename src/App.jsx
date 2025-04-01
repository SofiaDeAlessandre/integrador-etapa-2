import { BrowserRouter } from "react-router";
import Rutas from "./routes/Rutas";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [filterText, setFilterText] = useState("");
  return (
    <BrowserRouter>
      <Header filterText={filterText} onFilterTextChange={setFilterText} />
      <Rutas filterText={filterText} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
