import { Button, ButtonDropdown, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"
import { useState } from "react";

let Menu = () =>{
    const [abierto, setAbierto] = useState(false)

    let toggle=() => setAbierto(!abierto);
    return(
        <Container>
            <Row>
                <Col>
                    <Button>Presionar</Button>
                </Col>
                <Col>
                    <Button>Presionar</Button>
                </Col>
                <Col>
                    <Button>Presionar</Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button color="primary">Presionar</Button>
                </Col>
                <Col>
                    <Button color="primary">Presionar</Button>
                </Col>
                <Col>
                    <Button color="primary">Presionar</Button>
                </Col>

            </Row>

            <Row>
            <Col>
                <ButtonDropdown isOpen={abierto} toggle={toggle}>
                    <DropdownToggle caret color="warning">Flecha</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Item</DropdownItem>
                        <DropdownItem>Clase</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </Col>
            </Row>  

        </Container>
    )
}
export default Menu;