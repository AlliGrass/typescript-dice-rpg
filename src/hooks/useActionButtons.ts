import { usePlayerStore } from "../stores/usePlayerStore";

type ActionButtonType = {
    [key: string]: (args?: any) => void;
  };
  
export const useActionButtons = (): ActionButtonType => {
    const { gatherMaterial } = usePlayerStore()
    const gainWood = () => {
        gatherMaterial("wood", 1)
    }
    const templateFunction = () => {
        return
    }


    return {
        GAINWOOD: () => gainWood(),
        templateFunction: () => templateFunction()
    };
};