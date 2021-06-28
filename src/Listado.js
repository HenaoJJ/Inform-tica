import Principal from "./Variable";

import { Button, Badge } from 'reactstrap'
    console.log(Button);

let datos = [
    "Ana", "Laura", "Andrea", "John"
];

let número = "Cuatro";


let ListadoK = () => {
    let botón = () => console.log("Presinado")
    return (

    <div className="container" >
        <Principal></Principal>
        <h1>Familia <Badge color="info">Gratitud</Badge> </h1>
        <Button color="secondary" outline block="true" onClick={botón} > Siguiente </Button>
        <span> {número} </span>
        <div> {datos.map((cosa, i) =>
            <h2 key={i}>
                {cosa} Familiar
    </h2>
        )}</div>
    </div> 

) 
    };

export default ListadoK;