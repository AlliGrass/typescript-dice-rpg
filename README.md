# Dice RPG
A webapp game that relies on dice rolls to progress through the game. Currently only at the stage which is building the core fundamentals for the web application. In future it will be a fully functional web-based game that stores users information with cookies and cache so that the user can close the window without worrying of losing their progress. May be elements of idle mechanics which rely on type passing and other common mechanics within games.

## Tech Stack
### Languages: TypeScript, HTML
### Frameworks: React
### State Management: Zustand, Immer
### Development Environment: Linux (Ubuntu)

## Overview
### Purpose: Expanding My Skillset
I have mostly worked with JavaScript before and have been curious of branching out to TypeScript for a time. This project is a perfect blend that encourages me to understand key concepts and functionalities of TypeScript in a way that I am motivated to engage with.
### Current Status: Early Development
At this stage I am familiarising myself with the best ways to set up a project of this scale, as well as optimising for the potential of its scalability.
### Key Inspiration: Enjoying the Learning Process
I began learning TypeScript by wanting to remake my portfolio which included a Python backend using Django, however I found myself unwilling to work on the project as time went on and my frustrations grew. Taking a step back and working on a project out of pure curiosity and enjoyment has been the perfect stepping stone into TypeScript removing the immediate need to work on backend development.

## Features
### Core Features: 
- A location section of the page which can change depending on user input with relevent information relating to the location. 
- Action buttons coincidentally change with the location. Able to dynamically enable certain buttons. (Minor yet noticable delay when changing locations between the location component and the relevent list of action buttons)
- A dice zustand store that manages dice rolls and results which will be a key component to future mechanics for the game.
- Crafting and progression based on key circumstances. (Player has specific item in inventory)


## Development Notes
### Recently Implemented:
- **Crafting functionality currently suspended. Reconstructing material types.**
- ~~Inventory & Crafting Windows with responsive craft buttons based on available materials.~~
- ~~Crafting function that removes relevant materials ands crafted item to player inventory.~~
- Action buttons dependent on relevant items to enable.

### Known Issues & Solutions
- **Type Inference Warnings**: 
  - Affected Files: `usePlayerStore`, `DefaultContext`, `ActionBar`, etc.
  - Status: Functional. (Dev-Only Warnings)
  - Plan: Explicit typing post-prototype phase.

### Incoming Development:
- Functional crafting system
- Unlockable actions and locations
- Fully localised types and interfaces to avoid cluttering component files.
- Fully optimized base level functions. (Scalable Friendly)
- Player leveling system / meaningful progression.

### Long-Term Goals:
- Implementing a story for players to engage with.
- Customisability for the user. Includes the potential for character classes.
- Immersive assets. (Images, Audio)
- (In depth) settings that the user can adjust to their liking.
- Home base customisation (UI intensive)

### Current Limitations:
- Not storing any data locally on devices. Fully resets page and progress on refresh.
- Lacking graphics are not intuitive to the average user.
- UI not optimised for mobile devices.
- Lacking in depth knowledge of the possibilities of TypeScript leads to the potential of inoptimal implementation of a feature.

<!-- ## Licence -->