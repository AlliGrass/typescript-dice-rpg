import { useDiceStore } from "../stores/useDiceStore";
import { usePlayerStore } from "../stores/usePlayerStore";

type ActionButtonType = {
    [key: string]: (...variables: any[]) => void;
};
  
export const useActionButtons = (): ActionButtonType => {
    const { checkActionAttempt, rollDice } = useDiceStore()
    const { inventoryUpdateMaterial } = usePlayerStore()

    const gatherMaterial = (material: string) => {
        if (checkActionAttempt(100,0)) {
            inventoryUpdateMaterial(material, rollDice(2, true))
        }
    }

    const templateFunction = () => {
        return
    }


    return {
        gatherMaterial: ([material]: [string]) => gatherMaterial(material),
        templateFunction: () => templateFunction()
    };
};