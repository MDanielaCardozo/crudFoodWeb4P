import { Link } from "react-router";
import { Button, Table } from "react-bootstrap";
import ItemProducto from "./Producto/ItemProducto";
import { useEffect, useState } from "react";
import { listarProductos } from "../../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await listarProductos();
    console.log(respuesta);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
     setProductos(datos);
    } else {
      Swal.fire({
        title: "ocurrio un error",
        text: "No se pudo obtener los productos, intentelo nuevamente.",
        icon: "error",
      });
    }
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <div>
          <Link className="btn btn-primary me-2" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button variant="info" className="text-light">
            <i className="bi bi-database-fill-up"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((itemProducto, indice) => (
            <ItemProducto
              ItemProducto={itemProducto}
              key={itemProducto.id}
              fila={indice + 1}
              setProductos={setProductos}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
