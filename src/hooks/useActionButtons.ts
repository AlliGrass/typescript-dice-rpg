import { useDefaults } from "../contexts/DefaultsContext";
import { useDiceStore } from "../stores/useDiceStore";
import { useInventoryStore } from "../stores/useInventoryStore";
import { usePlayerStore } from "../stores/usePlayerStore";

type ActionButtonType = {
    [key: string]: (...variables: any[]) => void;
};
  
export const useActionButtons = (): ActionButtonType => {
    const { checkActionAttempt, rollDice } = useDiceStore()
    const { inventoryUpdateMaterial } = useInventoryStore()
    const { items: { resources } } = useDefaults()

    const gatherMaterial = (resource: string) => {
        const resourcePath = resources[resource].path
        if (checkActionAttempt(100,0)) {
            inventoryUpdateMaterial(resource, resourcePath, rollDice(2, true))
        }
    }

    const templateFunction = () => {
        return
    }


    return {
        gatherMaterial: ([resource]: [string]) => gatherMaterial(resource),
        templateFunction: () => templateFunction()
    };
};