import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from './seeds/corn.js'

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
                console.log("You are here!")
            }
            // console.log(row, column)
            // } else if (plan[row][column] == "Corn"){
            //     createCorn()
            // }
    
        }   
    }
    
}

// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]