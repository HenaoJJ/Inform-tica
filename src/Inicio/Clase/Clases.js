let datos = [
    { id: 1, nombre: "Karolyn" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "John" },
];

datos.map((elem, i) => console.log('revisando', elem));

/*datos.map ( function (elem,i) {
    console.log ('recorriendo', elem)
});*/

/*
for (let i = 0; i < array.length; i++) {
    console.log('Hola', i)
};*/

let Clase = () => (
<div>
<div>Décimo</div>
{datos.map( (elem,i)=><h1 key={i} > {elem.nombre} </h1> )}
</div>
);

export default Clase;