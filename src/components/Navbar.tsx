import { Button, Container, Nav, Navbar as NavbarBootstrap } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Backpack from "./../../public/backpack.svg"
import { usePackingList } from "./../context/PackingListContext.tsx"


export function Navbar() {
    const { editPackingList, numberItemsInBackpack } = usePackingList()
    return (
    <NavbarBootstrap sticky="top" className="bg-white shaddow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/clothes" as={NavLink}>Clothes</Nav.Link>
            </Nav>
            {numberItemsInBackpack > 0 && (
                <Button 
                    onClick={editPackingList}
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    variant="outline-secondary"
                    className="rounded-circle"
                >
                    <img src={Backpack} alt="Backpack to pack" />
                    <div 
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                        style={{ 
                            color: "white", 
                            width: "1.5rem", 
                            height: "1.5rem", 
                            position: "absolute", 
                            bottom: "0", 
                            right: "0", 
                            transform: "translate(45%,20%)"
                        }}
                    >
                        {numberItemsInBackpack}
                    </div>
                </Button>
            )}
        </Container>
    </NavbarBootstrap>
    )}