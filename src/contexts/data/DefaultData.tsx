export const DefaultData = {
    initial: {
        page: {
            locations: {
                home: {
                    title: "Home",
                    buttons: [
                        {
                            title: "Start Fire",
                            active: true,
                            action: "templateFunction"
                        },
                        {
                            title: "Craft",
                            active: true,
                            action: "templateFunction"
                        },
                        {
                            title: "Build Structure",
                            active: false,
                            requirement: {
                                type: "structure",
                                require: "firePit"
                            },
                            action: "templateFunction"
                        },
                        {
                            title: "Expand",
                            active: false,
                            action: "templateFunction"
                        },
                        {
                            title: "Merchant",
                            active: false,
                            action: "templateFunction"
                        }
                    ]
                },
                mine: {
                    title: "Mine", 
                    buttons: [
                        {
                            title: "Gather Stone",
                            active: true,
                            action: "gatherMaterial",
                            variable: ["stone"],
                        },
                        {
                            title: "Coal",
                            active: false,
                            requirement: {
                                type: "tool",
                                require: "stonePickaxe"
                            },
                            action: "gatherMaterial",
                            variable: ["coal"],
                        },
                        {
                            title: "Copper",
                            active: false,
                            requirement: {
                                type: "tool",
                                require: "stonePickaxe"
                            },
                            action: "gatherMaterial",
                            variable: ["copper"],
                        },
                        
                        {
                            title: "Iron",
                            active: false,
                            requirement: {
                                type: "tool",
                                require: ""
                            },
                            action: "gatherMaterial",
                            variable: ["iron"]
                        },
                        {
                            title: "Tungsten",
                            active: false,
                            requirement: {
                                title: "tool",
                                require: ""
                            },
                            variable: ["tungsten"]
                        },
                        {
                            title: "Diamond",
                            active: false,
                            requirement: {
                                title: "tool",
                                require: ""
                            },
                            variable: ["diamond"]
                        }
                    ]
                },
                river: {
                    title: "River",
                    buttons: [
                        {
                            title: "Catch Fish",
                            active: false,
                            action: "templateFunction"
                        },
                        {
                            title: "Build Dock",
                            active: false,
                            action: "templateFunction"
                        },
                        {
                            title: "Shipping Merchant",
                            active: false,
                            action: "templateFunction"
                        }
                    ]
                },
                wilderness: {
                    title: "Wilderness",
                    buttons: [
                        {
                            title: "Scavenge for Food",
                            active: true,
                            action: "templateFunction",
                        },
                        {
                            title: "Hunt for Food",
                            active: false,
                            action: "templateFunction"
                        }
                    ]
                },
                wildlands: {
                    title: "Wildlands",
                    buttons: [
                        {
                            title: "Attack",
                            active: true,
                            action: "templateFunction",
                        }
                    ]
                },
                woodlands: {
                    title: "Woodlands",
                    buttons: [
                        {
                            title: 'Gather Sticks',
                            active: true,
                            action: "gatherMaterial",
                            variable: ["stick"],
                        },
                        {
                            title: 'Gather Wood',
                            active: false,
                            action: "gatherMaterial",
                            variable: ["wood"],
                        }
                    ]
                }
            }
        }, 
        player: {
            classes: {
                standard: {
                    classTitle: "Standard",
                    health: 10,
                    strength: 1
                },
            }

        }
    },
    items: {
        resources: {
            stick: {
                title: "Stick",
                type: "wood",
                
            },
            pine: {
                title: "Pine",
                type: "wood",

            },
            walnut: { // issue if walnuts (nut) are added later
                title: "Walnut",
                type: "wood",

            },
            oak: {
                title: "Oak",
                type: "wood"
            },
            ash: { // potential issue if ash (powder) is added later
                title: "Ash",
                type: "wood"
            },
            stone: {
                title: "Stone",
                type: "mineral",
                processing: {
                    isProcessable: false
                }
            },
            coal: {
                title: "Coal",
                type: "mineral",
                processing: {
                    isProcessable: false
                }
            },
            copper: {
                title: "Copper",
                type: "mineral",
                processing: {
                    isProcessable: false
                }
            },
            tin: {
                title: "Tin",
                type: "mineral",
                processing: {
                    isProcessable: false
                }
            },
            iron: {
                title: "Iron",
                type: "mineral",
                processing: {
                    isProcessable: false
                }
            },
            cobalt: {
                title: "Cobalt",
                type: "mineral",
                processing: {
                    isProcessable: false
                }
            },
            tungsten: {
                title: "Tungsten",
                type: "mineral",
                processing: {
                    isProcessable: false
                }
            },
            diamond: {
                title: "Diamond",
                type: "mineral",
                processing: {
                    isProcessable: true,
                    requiredResources: {
                        graphite: 0,
                        cobalt: 0
                    },
                    station: ""
                }
            },
            bronze: {
                title: "Bronze",
                type: "mineral",
                processing: {
                    isProcessable: true,
                    requiredResources: {
                        copper: 0,
                        tin: 0
                    },
                    station: ""
                }
                // properties: {durability: notation}
            },
            castIron: {
                title: "Cast Iron",
                type: "mineral",
                processing: {
                    isProcessable: true,
                    requiredResources: {
                        iron: 0
                    },
                    station: ""
                }
            },
            steel: {
                title: "Steel",
                type: "mineral",
                processing: {
                    isProcessable: true,
                    requiredResources: {
                        iron: 0,
                        coal: 0
                    },
                    station: ""
                }
            },
            toolSteel: {
                title: "Tool Steel",
                type: "mineral",
                processing: {
                    isProcessable: true,
                    requiredResources: {
                        iron: 0,
                        tungsten: 0
                    },
                    station: ""
                }
            },
            tungstenCarbide: {
                title: "Tungsten Carbide",
                type: "mineral",
                processing: {
                    isProcessable: true,
                    requiredResources: {
                        tungsten: 0,
                        cobalt: 0,
                        coal: 0
                    },
                    station: ""
                }
            }
        },
        tools: {
            // axe: {
            //     properties: {
            //         head: "material",
            //         craftingRecipe: {
            //             wood: 1,
            //             mineral: 2
            //         }
            //     }
            // }

            stoneAxe: {
                title: "Stone Axe",
                type: "axe",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        stick: 1,
                        stone: 2
                    }
                }
            },

            copperAxe: {
                title: "Copper Axe",
                type: "axe",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        pine: 1,
                        copper: 2
                    }
                }
            },
            bronzeAxe: {
                title: "Bronze Axe",
                type: "axe",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        walnut: 1,
                        bronze: 2
                    }
                }
            },
            ironAxe: {
                title: "Iron Axe",
                type: "axe",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        oak: 1,
                        stone: 2
                    }
                }
            },
            steelAxe: {
                title: "Steel Axe",
                type: "axe",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        oak: 1,
                        stone: 2
                    }
                }
            },
            toolSteelAxe: {
                title: "Tool Steel Axe",
                type: "axe",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        ash: 1,
                        stone: 2
                    }
                }
            },






            // pickaxe: {
            //     properties: {
            //         head: "material",
            //         craftingRecipe: {
            //             wood: 1,
            //             mineral: 2
            //         }
            //     }
            // }

            stonePickaxe: {
                title: "Stone Pickaxe",
                type: "pickaxe",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        stick: 1,
                        stone: 3
                    }
                }
            },
        }
    },
    structures: {
        home: {
            fire: {
                title: "Fire",
                requiredItems:{
                    stick: 5,
                }
            },
            firePit: {
                title: "Fire Pit",
                requiredItems: {
                    stick: 3,
                    stone: 5
                }
            }
        }
    }
    // base: {
    //     materials: {
    //         stick: 70,
    //         wood: 0,
    //         stone: 40,
    //     }, 
    // },
    // notation: {
    //     classes: {
    //         standard: {
    //             classTitle: "Standard",
    //             health: 6,
    //             strength: 2
    //         }
    //     }
    // }
}