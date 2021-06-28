import { useFirestore } from 'reactfire'
import {useState} from 'react'

const AddPersonaForm = ({toggleShowAdd}) => {

    const refFirestore = useFirestore().collection('personas')
    const [datosNew, setDatosNew] = useState({nombre:'nada' , apellido: ''})

    const onGuardar = async (e) => {
        e.preventDefault()
        console.log("guardando...")
        try {
            await refFirestore.doc().set({
                nombre: datosNew.nombre,
                apellido: "Henao",
                persona: "Yo"           })
                     
        } catch (error) {
     console.log   (error)    
        }
    }

    const handleChange= ({target})=>{
        const {value}=target
        const {name}=target
        setDatosNew({
            ...datosNew,
            [name]:value
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Agregar Persona</h2>

                <form onSubmit={(e) => onGuardar(e)}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" name="nombre" onChange={(e) => handleChange (e)} value={datosNew.nombre} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Apellidos</label>
                        <input type="text"name="apellido" onChange={(e) => handleChange (e)} value={datosNew.apellido} className="form-control" />
                    </div>

                    <button onClick={toggleShowAdd} type="submit" className="btn btn-warning">Cerrar</button>
                    <button type="submit" className="btn btn-info">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default AddPersonaForm;