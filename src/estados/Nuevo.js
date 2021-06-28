import { Popover, PopoverBody, PopoverHeader } from "reactstrap"
import { useState } from "react";

let PopoveR = () => {
    const [mostrar, setMostrar] = useState(false)
    return(
        <div>
            <Popover placement="auto-start" target="presión" isOpen={mostrar} toggle={()=>setMostrar(!mostrar)}>
                <PopoverHeader>Popover</PopoverHeader>
                <PopoverBody>Utilizando Popover</PopoverBody>
            </Popover>
        </div>
    )
};

export default PopoveR;