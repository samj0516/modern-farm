console.log("Welcome to the main module")
import { createPlan } from './plan.js'

const yearlyPlan = createPlan()
console.log(yearlyPlan)

// import { createAsparagus } from './seeds/asparagus.js'
// import { createCorn } from './seeds/corn.js'
// import { createPotato } from './seeds/potato.js'
// import { createSoybean } from './seeds/soybean.js'
// import { createSunflower } from './seeds/sunflower.js'
// import { createWheat } from './seeds/wheat.js'
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// const cornSeed = createCorn()

import { addPlant, usePlants } from './field.js'

// addPlant(cornSeed)



import { plantSeeds } from './tractor.js'

plantSeeds(yearlyPlan)
let plantedSeed = usePlants()

console.log(plantedSeed)