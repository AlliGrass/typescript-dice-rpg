const itemPath = {
    wood: ["material", "wood"],
    log: ["material", "wood", "log"],
    plank: ["material", "wood", "plank"],
    mineral: ["material", "mineral"],
    ore: ["material", "mineral", "ore"],
    ingot: ["material", "mineral", "ingot"],
    forage: ["material", "forage"],
    tool: ["tool"]
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
                        { // ??
                            title: "Upgrade Home", // Build Fire Pit
                            active: true,
                            action: "buildStructure",
                            variable: ["home"]
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
                            title: "Gather Minerals",
                            active: true,
                            action: "gatherMaterial",
                            variable: ["stone", "pickaxe"],
                        },
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
                                require: "unknown"
                            },
                        },
                        {
                            title: "Shipping Merchant",
                            active: false,
                            action: "templateFunction",
                            requirement: {
                                type: "tool", // unknown
                                require: "unknown"
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
                            action: "gatherMaterial",
                            variable: ["straw", "container"]
                        },
                        {
                            title: "Hunt for Food",
                            active: false,
                            action: "templateFunction",
                            requirement: {
                                type: "tool",
                                require: "unknown"
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
                            title: "Roam Woods",
                            active: true,
                            action: "gatherMaterial",
                            variable: ["stick"]
                        },
                        {
                            title: "Pine Forest",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["pineLog", "axe"]
                        },
                        {
                            title: "Oak Forest",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["oakLog", "axe"]
                        },
                        {
                            title: "Walnut Forest",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["walnutLog", "axe"]
                        },
                        {
                            title: "Ash Forest",
                            active: false,
                            action: "gatherMaterial",
                            requirement: {
                                type: "tool",
                                require: "stoneAxe"
                            },
                            variable: ["ashLog", "axe"]
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
            naturalMaterials: {
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
            },
            craftedMaterials: {
                // Ingot
                copperIngot: {
                    title: "Copper Ingot", 
                    itemKey: "copper",  
                    requiredMaterial: {
                        copperOre: 0,
                    },
                    requiredUnlock: {
                        furnace: 1
                    },
                    path: itemPath.ingot,
                },
                bronzeIngot: {
                    title: "Bronze Ingot", 
                    itemKey: "bronze",  
                    requiredMaterial: {
                        copperOre: 0,
                        tinOre: 0,
                    },
                    requiredUnlock: {
                        furnace: 1
                    },
                    path: itemPath.ingot,
                },
                ironIngot: {
                    title: "Iron Ingot",   
                    itemKey: "iron",    
                    requiredMaterial: {
                        copperOre: 0,
                    },
                    requiredUnlock: {
                        furnace: 1
                    },
                    path: itemPath.ingot,
                },
                steelIngot: {
                    title: "Steel Ingot",
                    itemKey: "steel",
                    requiredMaterial: {
                        ironOre: 0,
                        coal: 0
                    },
                    requiredUnlock: {
                        furnace: 1
                    },
                },
                toolSteelIngot: {
                    title: "Tool Steel Ingot",
                    itemKey: "toolSteel",
                    requiredMaterial: {
                        ironOre: 0,
                        tungstenOre: 0,
                        coal: 0
                    },
                    requiredUnlock: {
                        furnace: 1
                    },
                },
                tungstenIngot: {
                    title: "Tungsten Ingot", 
                    itemKey: "tungsten",  
                    requiredMaterial: {
                        tungstenOre: 0,
                        cobaltOre: 0,
                        coal: 0
                    },
                    requiredUnlock: {
                        furnace: 1
                    },
                    path: itemPath.ingot,
                },
            },
            









        },
        tools: {
            container: {
                1: {
                    title: "Basket",
                    crafting: {
                        requiredMaterial: {
                            straw: 12,
                        }
                    },
                    properties: {
                        dropRate: {
                            straw: 70,
                            clay: 25
                        }
                    }
                    
                },
                2: {
                    title: "Bucket",
                    crafting: {
                        requiredMaterial: {
                            clay: 1
                        },
                        requiredUnlock: {
                            home: 1
                        }
                    },
                    properties: {
                        dropRate: {}
                    }
                }
            },
            axe: {
                1: {
                    title: "Stone Axe",
                    crafting: {
                        requiredMaterial: {
                            stick: 1,
                            stone: 2
                        },
                        requiredUnlock: {
                            home: 1 // firePit
                        }
                    },
                    properties: {
                        condition: "Pristine",
                        durability: 100,
                        dropRate: {
                            log: 20,
                            stick: 80
                        }
                    }
                },
                2: {
                    title: "Copper Axe",
                    crafting: {
                        requiredMaterial: {
                            pineLog: 1,
                            copperIngot: 2
                        },
                        requiredUnlock: {
                            crafting: 1,
                            tool: "stoneAxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            log: 30,
                            stick: 70
                        }
                    }
                },
                3: {
                    title: "Bronze Axe",
                    crafting: {
                        requiredMaterial: {
                            walnutLog: 1,
                            bronzeIngot: 2
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "copperAxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            log: 40,
                            stick: 60
                        }
                    }
                    // station = (clay/adobe) furnace ) (material)
                    // ( two furnaces? )
                },
                4: {
                    title: "Iron Axe",
                    crafting: {
                        requiredMaterial: {
                            oakLog: 1,
                            stone: 2
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "bronzeAxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            log: 60,
                            stick: 40
                        }
                    }
                    // station = (clay/adobe) furnace
                    // anvil
                },
                5: {
                    title: "Steel Axe",
                    crafting: {
                        requiredMaterial: {
                            oakLog: 1,
                            stone: 2
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "ironAxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            log: 75,
                            stick: 25
                        }
                    }
                    // station = crucible furnace
                },
                6: {
                    title: "Tool Steel Axe",
                    crafting: {
                        requiredMaterial: {
                            ashLog: 1,
                            stone: 2
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "steelAxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            log: 90,
                            stick: 10,
                        }
                    }
                    // station = crucible furnace
                }
            },
            pickaxe: {
                1: {
                    title: "Stone Pickaxe",
                    crafting: {
                        requiredMaterial: {
                            stick: 1,
                            stone: 3
                        },
                        requiredUnlock: {
                            home: 1, // firePit,
                        }
                    },
                    properties: {
                        condition: "Pristine",
                        durability: 100,
                        dropRate: {
                            stone: 55,
                            coal: 20,
                            copperOre: 25
                        }
                    }
                },
                2: {
                    title: "Copper Pickaxe",
                    crafting: {
                        requiredMaterial: {
                            pineLog: 1,
                            copperIngot: 3
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "stonePickaxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            stone: 0,
                            coal: 0,
                            copperOre: 0,
                            tinOre: 0
                        }
                    }
                },
                3: {
                    title: "Bronze Pickaxe",
                    crafting: {
                        requiredMaterial: {
                            walnutLog: 1,
                            bronzeIngot: 3
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "copperPickaxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            stone: 0,
                            coal: 0,
                            copperOre: 0,
                            tinOre: 0,
                            ironOre: 0
                        }
                    }
                },
                4: {
                    title: "Iron Pickaxe",
                    crafting: {
                        requiredMaterial: {
                            oakLog: 1,
                            stone: 3
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "bronzePickaxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            stone: 0,
                            coal: 0,
                            copperOre: 0,
                            tinOre: 0,
                            ironOre: 0
                        }
                    }
                },
                5: {
                    title: "Steel Pickaxe",
                    crafting: {
                        requiredMaterial: {
                            oakLog: 1,
                            stone: 3
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "ironPickaxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            stone: 0,
                            coal: 0,
                            copperOre: 0,
                            tinOre: 0,
                            ironOre: 0,
                            tungstenOre: 0
                        }
                    }
                },
                6: {
                    title: "Tool Steel Pickaxe",
                    crafting: {
                        requiredMaterial: {
                            ashLog: 1,
                            stone: 3
                        },
                        requiredUnlock: {
                            // station: "",
                            tool: "steelPickaxe"
                        }
                    },
                    properties: {
                        dropRate: {
                            stone: 0,
                            coal: 0,
                            copperOre: 0,
                            tinOre: 0,
                            ironOre: 0,
                            tungstenOre: 0
                        }
                    }
                }
            }
        },
        idkTBD: {
            
            bellows: {
                title: "Bellows",
                type: "idk",
                crafting: {
                    requiredMaterial: {
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
            // firepit: false,
            // shack: false,
            // cabin: false,
            // cottage: false,
            // bungalow: false,
            // villa: false,
            // mansion: false,
            // estate: false
            1: {
                title: "Fire Pit",
                requiredMaterial: {
                    stick: 3,
                    stone: 5
                }
            },
            2: {
                title: "Shack",
                requiredMaterial: {

                },
                requiredUnlock: {
                    tools: ["axe"]
                }
            },
            3: {
                title: "Cabin",
                requiredMaterial: {

                },
                requiredUnlock: {

                }
            },
        },
        crafting: {
            1: {
                title: "Crafting Bench",
                requiredMaterial: {

                },
                requiredUnlock: {
                    tools: ["axe"], 
                }
            },
            2: {
                title: "2 Crafting Bench"
            }
        },
        furnace: {
            1: {
                title: "Clay Furnace",
                requiredMaterial: {
                    clay: 3,
                    straw: 0,
                    sand: 0,
                    stick: 0,
                    // water? bucket
                    bellows: 0
                },
                requiredUnlock: {
                    structure: "firePit"
                }, // minerals
            },
            2: {
                title: "Bloomery Furnace"
            },
            3: {
                title: "Crucible Furnace"
            }
        },
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