import { Button } from "reactstrap";

const Fila = (props) => {
    
const pers = props.elemento
const {Eliminar}=props
    
return (
        <tr>
            <td>{props.indice+1}</td>
            <td>{pers.nombre}</td>
            <td>{pers.apellido}</td>
            <td><Button size="sm">Abrir</Button></td>
            <td><Button size="sm" color="danger" onClick={()=>Eliminar(pers) }>Eliminar</Button></td>
        </tr>
    )
};
export default Fila;