import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from './seeds/corn.js'

export const plantSeeds = (plan) => {
    for (i of plan){
        console.log(plan[i])
    }
}


// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]