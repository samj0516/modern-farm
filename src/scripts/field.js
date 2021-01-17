
const field = []

export const addPlant = (seed) => {
    field.push(seed)
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
export const usePlants = () => {
    return field.slice()
}