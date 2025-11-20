import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Home from "./components/views/Home/Home";
import DetalleDeProducto from "./components/views/DetalleDeProducto";
import Login from "./components/views/Login";
import Administrador from "./components/views/Administrador";
import FormularioProducto from "./components/views/Producto/FormularioProducto";
import { crearProducto } from "./helpers/queries";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";

function App() {
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle" element={<DetalleDeProducto />} />
            <Route
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
            />
            <Route
              path="/administrador"
              element={
                <ProtectorAdmin
                  usuarioLogueado={usuarioLogueado}
                ></ProtectorAdmin>
              }
            >
              <Route index element={<Administrador></Administrador>} />
              <Route
                path="crear"
                element={
                  <FormularioProducto
                    /* creamos por props  */
                    titulo="Crear Producto"
                    crearProducto={crearProducto}
                  ></FormularioProducto>
                }
              />
              <Route
                path="editar/:id"
                element={
                  <FormularioProducto titulo="Editar Producto"></FormularioProducto>
                }
              />
            </Route>
            <Route path="*" element={<Error></Error>} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
