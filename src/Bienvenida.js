import './Inicio/Bienvenida.css'
function Bienvenida(){
return  (
    <div>
        <h1>FuNcIoNó</h1> 
        <p>Paaarraaafooo</p>
        <Encabezado/>
        <Menu></Menu>
    </div>
)
}

function Encabezado() {
    return(
        <div className="Encabezado">
            soy el encabezado
        </div>
    )
}

function Menu() {

   var presionar = (e) => console.log('hola',e); 

   var yuju = (e) => console.log('yuju',e); 

   var yyy = (e) => console.log('yyy',e); 

function sumar(e) {
    console.log ("Sumar",e)
};

    return(
        <ol>
            <li> <a onClick={presionar} href="#" >Inicio</a> </li>
            <li><a onClick={sumar} href="#" >Alumnos</a></li>
            <li> <a onClick={yuju} href="#" >Profesores</a></li>
            <li> <a onClick={yyy} href="#" >Configuraciones</a> </li>
        </ol>
    )
}

export default Bienvenida ;
