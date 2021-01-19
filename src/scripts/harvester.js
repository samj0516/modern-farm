let harvestArray = []

export const harvestPlants = (fieldArray) => {
    for (const veggie of fieldArray) {
        let copy = veggie.output
        if (veggie.type == "Corn"){
         let cornCopy = copy / 2
            for (let i = 0; i < cornCopy; i++){
                harvestArray.push(veggie)
            }
        }else {
            for (let i = 0; i < copy; i++){
                harvestArray.push(veggie)
            }
        }
    }
    return harvestArray
}

