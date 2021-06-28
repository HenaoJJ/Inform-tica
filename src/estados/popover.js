import { Container} from "react-bootstrap"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Tooltip } from "reactstrap"
import { useState } from "react";
import PopoveR from "./Nuevo";
import Productos from "./Tabla";

let MiModal = () => {
    const [open, setOpen] = useState(false)
    const [tipOpen, setTipOpen] = useState(false)
    const cambiar = ()=>
     setOpen(!open)
    return (
        <div>
            <Container>
               <Productos></Productos>
                <PopoveR></PopoveR>
                <Button onClick={cambiar}>Presionar</Button>
                <Button id ="presión">Click</Button>
                <Modal isOpen={open} toggle={cambiar}>
                    <ModalHeader toggle={cambiar}>Hoolaa</ModalHeader>
                    <ModalBody>Probando</ModalBody>
                    <ModalFooter>
                        <Button onClick={cambiar}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
                <br></br>
                <a href="#" id="mirando">YUUJUU</a>
                <Tooltip isOpen={tipOpen} target="mirando" toggle={()=>setTipOpen (!tipOpen)} >Toooltip</Tooltip>
              </Container>
        </div>
    )
};
export default MiModal;