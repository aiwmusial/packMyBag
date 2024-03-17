import { Card, CardBody } from "react-bootstrap"

type PieceOfClothingProp = {
    id: number,
    name: string, 
    imgUrl: string
}

export function PieceOfClothing({ id, name, imgUrl }:PieceOfClothingProp ){
    return(
        <>
            <Card>
                <Card.Img 
                    variant="top" 
                    src={imgUrl} 
                    height="350px" 
                    style={{objectFit: "cover"}} 
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-2 mb-4">
                        {name.toUpperCase()}
                    </Card.Title>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card.Body>
            </Card>
        <h1>hkhkjh</h1>
        </>
    );
}