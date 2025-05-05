import { produce } from "immer"
import { create } from "zustand"

export type DiceRollType = {
    diceResult: number,
    cpuDiceResult: number,
    rollDice: (notation: number, playerRoll: boolean) => void,
}

export const useDiceStore = create<DiceRollType>((set) => ({
    diceResult: 0,
    cpuDiceResult: 0,
    rollDice: (notation, playerRoll) => set(produce(state => {state[playerRoll? "diceResult" : "cpuDiceResult"] = Math.floor(Math.random() * notation) + 1})) 
}))