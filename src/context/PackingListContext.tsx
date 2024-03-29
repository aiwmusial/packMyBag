import { useContext, createContext, ReactNode, useState } from "react";
import { InsideBackpack } from "./../components/InsideBackpack.tsx"
import { useLocalStorage } from "../hooks/useLocalStorage.ts";

type PackingListProviderProps = {
    children: ReactNode
}

type PackingListContext = {
    editPackingList: () => void
    closePackingList: () => void
    getNumberOfItems: (id: number) => number
    increaseNumberOfItems: (id: number) => void
    decreaseNumberOfItems: (id: number) => void
    removeFormBagpack: (id: number) => void
    numberItemsInBackpack: number
    selectedItems: SelectedItem[]
}

type SelectedItem = {
    id: number, 
    quantity: number
}
 
const PackingListContext = createContext({} as PackingListContext);

export function usePackingList() {
    return useContext(PackingListContext);
}

export function PackingListProvider( { children }:PackingListProviderProps ){

    const [isEdited, setIsEdited] = useState(false);
    const [selectedItems, setSelectedItems] = useLocalStorage<SelectedItem[]>("bagpack-content", []);
    const numberItemsInBackpack = selectedItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const editPackingList = () => setIsEdited(true)
    const closePackingList = () => setIsEdited(false)


    function getNumberOfItems(id:number){
        return selectedItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseNumberOfItems(id:number) {
        setSelectedItems(chosenItems => {
            if(chosenItems.find(item => item.id === id) == null){
                return[...chosenItems, { id, quantity: 1 }]
            } else {
                return chosenItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseNumberOfItems(id:number) {
        setSelectedItems(chosenItems => {
            if(chosenItems.find(item => item.id === id)?.quantity === 1){
                return chosenItems.filter(item => item.id !== id)
            } else {
                return chosenItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFormBagpack(id: number){
        setSelectedItems(chosenItems =>{
            return chosenItems.filter(item => item.id !== id)
        })
    }

    return (
        <PackingListContext.Provider 
            value={{ 
                getNumberOfItems, 
                increaseNumberOfItems, 
                decreaseNumberOfItems, 
                editPackingList,
                closePackingList,
                removeFormBagpack, 
                selectedItems, 
                numberItemsInBackpack
            }}
        >
            {children}
            <InsideBackpack isEdited={isEdited} />    
        </PackingListContext.Provider>
    )
}