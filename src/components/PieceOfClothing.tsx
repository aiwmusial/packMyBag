import { Button, Card } from "react-bootstrap";
import { usePackingList } from "./../context/PackingListContext.tsx"

type PieceOfClothingProp = {
    id: number,
    name: string, 
    imgUrl: string
}

export function PieceOfClothing({ id, name, imgUrl }:PieceOfClothingProp ){
    const { getNumberOfItems, increaseNumberOfItems, decreaseNumberOfItems } = usePackingList();
    const numberOfItems = getNumberOfItems(id);

    return(
        <>
            <Card className="h-100">
                <Card.Img 
                    variant="top" 
                    src={imgUrl} 
                    height="300px" 
                    style={{objectFit: "cover"}} 
                />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className="fs-2 mb-4">
                        {name.toUpperCase()}
                    </Card.Title>
                    <Card.Footer className="d-flex align-items-center justify-content-center">
                        <Button onClick={() => decreaseNumberOfItems(id)} variant="warning" size="sm">
                            <span className="fs-2" style={{fontWeight: "bold", color: "white"}}>-</span>
                        </Button>
                        <span className="ms-2 me-2 fs-2">{numberOfItems}</span>
                        <Button onClick={() => increaseNumberOfItems(id)} variant="warning" size="sm">
                            <span className="fs-2" style={{fontWeight: "bold", color: "white"}}>+</span>
                        </Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    );
}