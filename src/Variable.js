let grupo="Décimo";

let Profesores = [
    12,3,7,17
];

let Principal = () => (

<div>
    <h2>probando {grupo} </h2>
    {Profesores.map (function (elem,indice) {
        return <div> Hola {elem} - {indice} </div>
    })}

    {Profesores.map ( (elem)=> <div> otro {elem} </div>  )}
</div>

);

export default Principal;