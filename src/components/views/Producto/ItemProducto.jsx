import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemProducto = ( {itemProducto, fila}) => {
  console.log(itemProducto);
  
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
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
