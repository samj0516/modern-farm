import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'


// iterates over plan and creates a object/array for each vegetable and adds each object to the field array 
export const plantSeeds = (plan) => {
     let creatingObjects 
    //  console.table(plan)
    for (let row = 0; row < plan.length; row++){
        for (let column = 0; column < plan[row].length; column++ ){
            // console.log(plan[row][column])
            
            if (plan[row][column] === "Asparagus"){
                // console.log("You are here!")
                creatingObjects = createAsparagus()
                addPlant(creatingObjects)
            }
            else if (plan[row][column] == "Corn"){
                creatingObjects = createCorn()
                addPlant(creatingObjects)
            }
            else if (plan[row][column] == "Potato"){
                creatingObjects = createPotato()
                addPlant(creatingObjects)
            }
            else if (plan[row][column] == "Soybean"){
                creatingObjects = createSoybean()
                addPlant(creatingObjects)
            }
            else if (plan[row][column] == "Sunflower"){
                creatingObjects = createSunflower()
                addPlant(creatingObjects)
            }
            else if (plan[row][column] == "Wheat"){
                creatingObjects = createWheat()
                addPlant(creatingObjects)
            }
        }   
    }
    
}

// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]