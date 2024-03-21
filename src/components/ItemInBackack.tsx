import { Button, Stack } from "react-bootstrap";
import { usePackingList } from "./../context/PackingListContext.tsx";
import clothesToTake from "./../data/clothes.json"


type ItemInBackackProps = {
    id: number
    quantity: number
}

export function ItemInBackack({ id, quantity }: ItemInBackackProps){
    const { removeFormBagpack } = usePackingList();
    const item = clothesToTake.find(i => i.id === id)
    if(item == null) return null;


    return(
        <Stack 
            direction="horizontal" 
            gap={2}
            className="d-flex align-items-center"
        >
            <img 
                src={item.imgUrl} 
                style={{
                    width: "120px",
                    height: "75px",
                    objectFit: "cover"
                }}
            />
            <div className="me-auto">
                <div>
                    {item.name}
                    {quantity > 1 && (<span className="text-muted" style={{fontSize: "1rem"}} > {quantity} x </span> )}
                </div>
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFormBagpack(item.id)}>X</Button>
        </Stack>
    );
}