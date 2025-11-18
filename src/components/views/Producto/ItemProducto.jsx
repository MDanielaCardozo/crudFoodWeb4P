import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { borrarProductoAPI, listarProductos } from "../../../helpers/queries";

const ItemProducto = ( {itemProducto, fila, setProductos}) => {
  console.log(itemProducto.nombreProducto);

  const eliminarProducto = () =>
    Swal.fire({
      title: "Estas seguro de eliminar?",
      text: "No se puede revertir este paso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async(result) => {
      if (result.isConfirmed) {
        if(borrarProductoAPI(itemProducto.id)) {
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto eliminado correctamente`,
            icon: "success",
          });
          const respuestaProductos = await listarProductos();
          if(respuestaProductos.status === 200) {
            const productosRestantes = await respuestaProductos.json()
            console.log(productosRestantes);
            setProductos(productosRestantes)
          }
        }
      }
    })
  
  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{itemProducto.nombreProducto}</td>
      <td className="text-end">{itemProducto.precio}</td>
      <td className="text-center">
        <img src={itemProducto.imagen} className="img-thumbnail w-25" alt="desc"></img>
      </td>
      <td>{itemProducto.categoria}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={`/administrador/editar/${itemProducto.id}`}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          <i className="bi bi-trash" ></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
