console.log("Welcome to the main module")
import { createPlan } from './plan.js'

const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)
const cornSeed = createCorn()

import { addPlant, usePlants } from './field.js'

addPlant(cornSeed)

let plantedSeed = usePlants()

console.log(plantedSeed)