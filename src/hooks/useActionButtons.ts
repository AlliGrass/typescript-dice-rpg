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
    const { items: { resources } } = useDefaults()

    const gatherMaterial = (resource: any, toolType?: any) => {
        if (toolType) console.log("has tool requirement")
        
        //inventorySearchTool(toolType) return tool (droprate??)
        //getToolDropRate(toolType)

        const toolList = playerInventory.tool
        console.log(toolList)
        const isNeededTool = (currentTool: any) => currentTool == "stonePickaxe" 
        const hasViableTool = Object.entries(toolList).find(isNeededTool)
        // get object entries (keys), from keys find default tool type, return droprate if applicable
        console.log(hasViableTool)
        // search inventory for tool with type


        // else (no tool requirement or in inventory) default droprate
        // where is  default droprate going????

        // const resourcePath = resources[resource].path
        // if (checkActionAttempt(100,0)) {
        //     inventoryUpdateMaterial(resource, resourcePath, rollDice(2, true))
        // }
    }

    const scavengeTemplateFunction = () => {
        const items = ["straw", "clay"]
        const probabilities = [70, 25]
        const attemptRoll = rollDice(100, false)
        let cumulativeProbability = 0
        for (let i = 0; i < items.length; i++) {
            cumulativeProbability += probabilities[i]
            const item = items[i]
            const itemPath = resources[item].path
            // if (cumulativeProbability > attemptRoll) gatherMaterial(item, itemPath, rollDice(2, true))
        }
    } 


    const templateFunction = () => {
        return
    }


    return {
        gatherMaterial: (resource: string, toolType?: string) => gatherMaterial(resource, toolType),
        scavengeTemplateFunction: () => scavengeTemplateFunction(),
        templateFunction: () => templateFunction()
    };
};