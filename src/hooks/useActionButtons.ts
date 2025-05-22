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
    const playerInventory = useInventoryStore()
    const { items: { resources, tools } } = useDefaults()

    const getDropRate = (toolDetails: any) => { 
        return [Object.keys(toolDetails.dropRate), Object.values(toolDetails.dropRate)]
    }

    const gatherMaterial = (resource: any, toolType?: any) => { // log ???
        const haveTool = toolType ? Object.entries(playerInventory.tool).find(([toolName, toolDetails]) => toolDetails.type === toolType) : undefined
        const dropRate = haveTool? getDropRate(haveTool[1]) : [[resource], [100]]

        const [dropRateMaterials, dropRateProbabilities] = dropRate
        const dropRateRoll = rollDice(100, false)
        let cumulativeProbability = 0
        for (let materialIndex = 0; materialIndex < dropRateMaterials.length; materialIndex++) {
            cumulativeProbability += dropRateProbabilities[materialIndex]
            const material = dropRateMaterials[materialIndex] == "log"? resource : dropRateMaterials[materialIndex]
            const materialPath = resources[material].path
            const materialKey = resources[material].itemKey
            if (cumulativeProbability > dropRateRoll) inventoryUpdateMaterial(materialKey, materialPath, rollDice(2, true))
        }
    }

    const templateFunction = () => {
        return
    }


    return {
        gatherMaterial: (resource: string, toolType?: string) => gatherMaterial(resource, toolType),
        templateFunction: () => templateFunction()
    };
};