console.log("Welcome to the main module")
import { createPlan } from './plan.js'

const yearlyPlan = createPlan()
console.log(yearlyPlan)


// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// const cornSeed = createCorn()

import { addPlant, usePlants } from './field.js'

// addPlant(cornSeed)



import { plantSeeds } from './tractor.js'

plantSeeds(yearlyPlan)
let plantedSeed = usePlants()

// console.log(plantedSeed)

import { harvestPlants } from './harvester.js'

let harvest = harvestPlants(plantedSeed)
console.log(harvest)