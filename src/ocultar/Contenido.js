import { useState } from "react";

const Contenido = () => {
    const [showTitulo, setShowTitulo] = useState(true)
    const [showContent, setShowContent] = useState(false)
    const [showText, setShowText] = useState(false)

    const toggleTitulo = (valor) =>{
      setShowTitulo(valor)  }
    
      const toggleContent = (valor) =>{
          setShowContent(valor)
      }

      const toggleText= (valor) => {
          setShowText(valor)
      }
    return(
        <div>
            {showTitulo && <h1>hooolaa</h1>}

            <a href="#" onClick={()=> setShowTitulo(true)}>Mostrar</a>
            <br></br>
            <a href="#" onClick={()=> setShowTitulo(false)}>Ocultar</a>
            <br>
            </br>
            {showContent && <h1>Mensaaage</h1>}
            <a href="#"  onClick={()=>setShowContent(true)}>Mostrar</a>
            <br></br>
            <a href="#" onClick={()=>setShowContent(false)}>Ocultar</a>
            <br></br>
            {showText && <h1>Teextoo</h1>}
            <a href="#" onClick={()=>setShowText(true)}>On</a>
            <br></br>
            <a href="#" onClick={()=> setShowText(false)}>Off</a>
        </div>
    )
}

export default Contenido;