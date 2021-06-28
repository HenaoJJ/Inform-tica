import { Button, Table } from "reactstrap"
import { useState, useEffect } from "react";
import { useFirestore } from "reactfire"
import Fila from "../Filas/Filas";
import AddPersonaForm from "./AddPersonasForm";

const Productos = () => {  
    const refFirestore = useFirestore()

    const [personas, setPersonas] = useState([])
    const [showAdd, setShowAdd] = useState(false)

    useEffect(() => {
        const traerDatos = async () => {

            const temporales = []

            const personasDatos = await refFirestore.collection('personas').onSnapshot((snapshot) => {
                console.log(snapshot.docs)
          snapshot.docs.forEach((doc) => {
                    temporales.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setPersonas(temporales)
            })
        }
        traerDatos()
    }, [refFirestore]
    )


    const toggleShowAdd = () => {
        setShowAdd(!showAdd)
    }

    const Eliminar = async (pers)=>{
       await refFirestore.collection('personas').doc(pers.id).delete()
    }

    return (
        <div class="container">
            <h1>Tabla Clase</h1>
            {showAdd
                ? <AddPersonaForm toggleShowAdd={toggleShowAdd}/>
                : <Button onClick={toggleShowAdd}>Crear Nuevo</Button>
            }


            <Table striped hover size="sm">
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Nombre</th>
                        <th>Apellido</th> 
                        <th>Descripción</th>
                        <th>Menú</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona, index) => (
                    <Fila Eliminar={Eliminar} key={persona.id} elemento={persona} indice={index}></Fila> ))
                    }
                </tbody>
            </Table>
        </div>
    )
};
export default Productos;