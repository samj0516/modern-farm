
const field = []

// adds each vegetable object/array to the field array 
export const addPlant = (seed) => {
    if (Array.isArray(seed)){
        seed.forEach(element => field.push(element))
    } else {
    field.push(seed)
    }
}
// seed is a vegetable object
// export const createAsparagus = () => {
//     const asparagus = {
//         type: "Asparagus",
//         height: 24,
//         output: 4,
//     }
//     return asparagus
// }

// returns a copy of the field array 
export const usePlants = () => {
    return field.slice()
}