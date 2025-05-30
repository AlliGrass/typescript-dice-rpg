import { useDefaults } from "../contexts/DefaultsContext";
import { useDiceStore } from "../stores/useDiceStore";
import { useInventoryStore } from "../stores/useInventoryStore";
import { usePlayerStore } from "../stores/usePlayerStore";

type ActionButtonType = {
    [key: string]: (...variables: any[]) => void;
};
  
export const useActionButtons = (): ActionButtonType => {
    const { checkActionAttempt, rollDice } = useDiceStore()
    const { inventoryUpdateMaterial, inventoryUpgradeStructure } = useInventoryStore()
    const playerInventory = useInventoryStore()
    const { items: { resources, tools }, structures } = useDefaults()

    const allResources = { //util
        ...resources.naturalMaterials,
        ...resources.craftedMaterials
    }

    const getDropRate = (toolDetails: any) => { 
        return [Object.keys(toolDetails.properties.dropRate), Object.values(toolDetails.properties.dropRate)]
    }

    const getMaterialPath = () => {

        return
    }

    const gatherMaterial = (resource: any, toolType?: any): void => { // log ???
        const haveTool = toolType ? Object.entries(playerInventory.tool).find(([toolName, toolDetails]) => toolDetails.type === toolType) : undefined
        const dropRate = haveTool? getDropRate(haveTool[1]) : [[resource], [100]]

        const [dropRateMaterials, dropRateProbabilities] = dropRate
        const dropRateRoll = rollDice(100, false)
        let cumulativeProbability = 0
        for (let materialIndex = 0; materialIndex < dropRateMaterials.length; materialIndex++) {
            cumulativeProbability += dropRateProbabilities[materialIndex]
            const material = dropRateMaterials[materialIndex] == "log"? resource : dropRateMaterials[materialIndex]
            const materialPath = allResources[material].path
            const materialKey = allResources[material].itemKey
            if (cumulativeProbability > dropRateRoll) inventoryUpdateMaterial(materialKey, materialPath, rollDice(2, true))
        }
    }

    const buildStructure = (structureID: string) => {
        const currentStructureTier = playerInventory.structure.home.tier

        // remove materials from inventory
        Object.entries(structures[structureID][currentStructureTier+1].requiredMaterial).forEach(([material, amount]) => {
            const materialPath = allResources[material].path
            const materialKey = allResources[material].itemKey
            inventoryUpdateMaterial(materialKey, materialPath, -amount)
        })
        
        // unlock structure
        console.log(structures[structureID][currentStructureTier+1].requiredMaterial)
        inventoryUpgradeStructure(structureID, [structures[structureID][currentStructureTier+1].title, structures[structureID][currentStructureTier+1].structureID])
    }

    const templateFunction = () => {
        return
    }


    return {
        gatherMaterial: (resource: string, toolType?: string) => gatherMaterial(resource, toolType),
        buildStructure: (structureID: string, location: string) => buildStructure(structureID, location),
        templateFunction: () => templateFunction()
    };
};