import { Offcanvas, Stack } from "react-bootstrap";
import { usePackingList } from "../context/PackingListContext.tsx";
import { ItemInBackack } from "./ItemInBackack.tsx";

type InsideBackpackProps = {
    isEdited: boolean
}

export function InsideBackpack({ isEdited }: InsideBackpackProps){
    const { closePackingList, selectedItems } = usePackingList();
    return (
        <Offcanvas show={isEdited} onHide={closePackingList} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Inside your backpack</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {selectedItems.map(item => (
                        <ItemInBackack key={item.id} {...item} />
                    ))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}