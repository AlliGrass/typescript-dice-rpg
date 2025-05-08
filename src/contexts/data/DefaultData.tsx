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
                            action: "templateFunction"
                        },
                        {
                            title: "Coal",
                            active: false,
                            action: "templateFunction"
                        },
                        {
                            title: "Bronze",
                            active: false,
                            action: "templateFunction"
                        },
                        {
                            title: "Copper",
                            active: false,
                            action: "templateFunction"
                        },
                        {
                            title: "Iron",
                            active: false,
                            action: "templateFunction"
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
                            action: "GAINWOOD"
                        },
                        {
                            title: 'Gather Wood',
                            active: false,
                            action: "templateFunction",
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
    base : {
        materials: {
            sticks: 70,
            wood: 0,
            stone: 40,
        }, 
    },
    notation: {
        classes: {
            standard: {
                classTitle: "Standard",
                health: 6,
                strength: 2
            }
        }
    }
}