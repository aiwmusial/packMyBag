import { Row, Col } from "react-bootstrap"
import clothesToTake from "./../data/clothes.json"
import { PieceOfClothing } from "./../components/PieceOfClothing.tsx"

export function Clothes () {
    return (
        <>
            <Row md={2} xs={1} lg={3} className="g-3">
                {clothesToTake.map(clothes => ( 
                    <Col key={clothes.id}>
                        <PieceOfClothing {...clothes} />
                    </Col>
                ))}
            </Row>
        </>
    )    
}