// import { harvestArray } from './harvester.js'


export const Catalog = (array) => {
    let veggieHTML = ""
    const arrayElement = document.querySelector(".container")
    for (const veggie of array){
        veggieHTML += `<section class="plant">${veggie.type}</section>`
        
    
    }
    arrayElement.innerHTML += `${veggieHTML}`   
}
