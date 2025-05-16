const itemPath = {
    wood: ["material", "wood"],
    log: ["material", "wood", "log"],
    plank: ["material", "wood", "plank"],
    mineral: ["material", "mineral"],
    ore: ["material", "mineral", "ore"],
    ingot: ["material", "mineral", "ingot"],
    forage: ["material", "forage"]
} 

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
                            active: true,
                            action: "templateFunction"
                        },
                        {
                            title: "Expand",
                            active: false,
                            requirement: {
                                type: "tool", // structure
                                require: "firePit"
                            },
                            action: "templateFunction"
                        },
                        {
                            title: "Merchant",
                            active: false,
                            action: "templateFunction",
                            requirement: {
                                type: "tool", // unknown`
                                require: "unknown"
                            }
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
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stonePickaxe"
                            },
                            variable: ["coal"],
                        },
                        {
                            title: "Copper",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stonePickaxe"
                            },
                            variable: ["copper"],
                        },
                        
                        {
                            title: "Iron",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: ""
                            },
                            variable: ["iron"]
                        },
                        {
                            title: "Tungsten",
                            active: false,
                            requirement: {
                                type: "tool",
                                require: ""
                            },
                            variable: ["tungsten"]
                        },
                        {
                            title: "Diamond",
                            active: false,
                            requirement: {
                                type: "tool",
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
                            action: "templateFunction",
                            requirement: {
                                type: "tool",
                                require: "fishingRod"
                            },
                        },
                        {
                            title: "Build Dock",
                            active: false,
                            action: "templateFunction",
                            requirement: {
                                type: "tool", // structure
                                require: ""
                            },
                        },
                        {
                            title: "Shipping Merchant",
                            active: false,
                            action: "templateFunction",
                            requirement: {
                                type: "tool", // unknown
                                require: ""
                            },
                        }
                    ]
                },
                wilderness: {
                    title: "Wilderness",
                    buttons: [
                        {
                            title: "Scavenge for Resources",
                            active: true,
                            action: "templateFunction",
                        },
                        {
                            title: "Hunt for Food",
                            active: false,
                            action: "templateFunction",
                            requirement: {
                                type: "tool",
                                require: ""
                            },
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
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["wood"],
                        },
                        {
                            title: "Gather Pine",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["pine"]
                        },
                        {
                            title: "Gather Oak",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["oak"]
                        },
                        {
                            title: "Gather Walnut",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["walnut"]
                        },
                        {
                            title: "Gather Ash",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["ash"]
                        },
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
            // Wood
            stick: {
                title: "Stick",
                itemKey: "stick",
                path: itemPath.wood,
            },
            // Logs
            pineLog: {
                title: "Pine Log",
                itemKey: "pine",
                path: itemPath.log,
            },
            oakLog: {
                title: "Oak Log", 
                itemKey: "oak",   
                path: itemPath.log,
            },
            walnutLog: {
                title: "Walnut Log", 
                itemKey: "walnut",
                path: itemPath.log,
            },
            ashLog: {
                title: "Ash Log", 
                itemKey: "ash",
                path: itemPath.log,
            },
            // Plank
            pinePlank: {
                title: "Pine Plank", 
                itemKey: "pine",  
                path: itemPath.plank,
            },
            oakPlank: {
                title: "Oak Plank", 
                itemKey: "oak",  
                path: itemPath.plank,
            },
            walnutPlank: {
                title: "Walnut Plank", 
                itemKey: "walnut",  
                path: itemPath.plank,
            },
            ashPlank: {
                title: "Ash Plank", 
                itemKey: "ash",  
                path: itemPath.plank,
            },

            // Minerals
            stone: {
                title: "Stone",   
                itemKey: "stone", // Added itemKey
                path: itemPath.mineral,
            },
            coal: {
                title: "Coal",    
                itemKey: "coal",  // Added itemKey
                path: itemPath.mineral,
            },
            // Ore
            copperOre: {
                title: "Copper Ore",
                itemKey: "copper",
                path: itemPath.ore,
            },
            tinOre: {
                title: "Tin Ore",   
                itemKey: "tin",  
                path: itemPath.ore,
            },
            ironOre: {
                title: "Iron Ore",  
                itemKey: "iron", 
                path: itemPath.ore,
            },
            cobaltOre: {
                title: "Cobalt Ore", 
                itemKey: "cobalt",
                path: itemPath.ore,
            },
            tungstenOre: {
                title: "Tungsten Ore", 
                itemKey: "tungsten",
                path: itemPath.ore,
            },
            // Ingot
            copperIngot: {
                title: "Copper Ingot", 
                itemKey: "copper",  
                path: itemPath.ingot,
            },
            bronzeIngot: {
                title: "Bronze Ingot", 
                itemKey: "bronze",  
                path: itemPath.ingot,
            },
            ironIngot: {
                title: "Iron Ingot",   
                itemKey: "iron",    
                path: itemPath.ingot,
            },
            tungstenIngot: {
                title: "Tungsten Ingot", 
                itemKey: "tungsten",  
                path: itemPath.ingot,
            },

            // Forage
            clay: {
                title: "Clay",    
                itemKey: "clay",  // Added itemKey
                path: itemPath.forage,
            },
            straw: {
                title: "Straw",   
                itemKey: "straw", // Added itemKey
                path: itemPath.forage,
              },




            // account for new log/plank ore/ingots setup (WRITE ITEM PATHS FOR INVENTORY AND CRAFTING)

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
            copper: {
                title: "Copper",
                type: "mineral",
                processing: {
                    isProcessable: false
                    // hammar, smelt
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
                    // smelt
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
                    // smelt
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
                // smelt
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
                // smelt
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
                // crush, smelt
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
            basket: {
                title: "Basket",
                type: "idk",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        straw: 0,

                    }
                }
            },
            bucket: {
                title: "Bucket",
                type: "idk",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        bucket: 1,
                        clay: 1
                    }
                }
            },

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
                // station = firepit
                // molds?
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
                // station = firepit (material)
                
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
                // station = (clay/adobe) furnace ) (material)
                // ( two furnaces? )
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
                // station = (clay/adobe) furnace
                // anvil
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
                // station = crucible furnace
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
                // station = crucible furnace
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
        },
        idkTBD: {
            
            bellows: {
                title: "Bellows",
                type: "idk",
                crafting: {
                    isCraftable: true,
                    requiredItems: {
                        wood: 2,
                        hide: 1, // leather
                        clay: 1,
                    }
                }

            }
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
            },
            craftingBench: {
                title: "Crafting Bench",
                requiredItems: {
                    wood: 0,
                    walnut: 0,
                    bronze: 0,
                    // table (wood)
                    // tools (wood/stick, minerals)
                    // upgradable (tools)
                },
                requiredTools: ["axe"]
            },
            clayFurnace: {
                title: "Furnace",
                requiredItems: {
                    clay: 3,
                    straw: 0,
                    sand: 0,
                    // water? bucket
                    bellows: 0
                },
                requiredTools: ["bucket"]
            },
            crucibleFurnace: {
                title: "Crucible Furnace",
                requiredItems: {
                    // crucible (clay/graphite)
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