import { produce } from "immer"
import { create } from "zustand"

export type DiceRollType = {
    diceResult: number,
    cpuDiceResult: number,
    rollDice: (notation: number, playerRoll: boolean) => number,
    checkActionAttempt: (successDC: number, modifiers?: number) => boolean
}

export const useDiceStore = create<DiceRollType>((set) => ({
    diceResult: 0,
    cpuDiceResult: 0,
    rollDice: (notation, playerRoll) => {
        const diceRollResult = Math.floor(Math.random() * notation) + 1
        set(produce(state => {state[playerRoll? "diceResult" : "cpuDiceResult"] = diceRollResult }))
        return diceRollResult
    },
        checkActionAttempt: (successDC, modifiers) => {
        const result = Math.floor(Math.random() * 100) + (modifiers? 1 - modifiers : 1)
        return result <= successDC? true : false
    } 
}))