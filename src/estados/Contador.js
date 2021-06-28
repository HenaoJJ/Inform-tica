import { Button } from "react-bootstrap";
import { useState } from "react";

let Operar = () =>{
    const [número, setNúmero] = useState(0)
    const [nombre, setNombre] = useState("nombre")
    const [edad, setEdad] = useState(0)
    const [año, setAño] = useState(2007)
    return(
        <div className="container">
            <h1>Contador</h1>
            <p>{número}</p>
            <p>{nombre}</p>
            <p>{edad}</p>
            <p>{año}</p>
            <Button onClick= {()=> setNúmero(7)} >Click</Button>
            <Button onClick= {() =>setNombre("Karolyn") }>Nombre</Button>
            <Button onClick= {()=> setEdad(13)}>Edad</Button>
            <Button onClick= {()=> setAño(2021)}>Año</Button>
        </div>
    )
};
export default Operar ;
                        