import data from "../../../data/games.json" with { type: "json" }
import { generateCard } from "./gameRendering.js";
const list = document.querySelector("#games")


export const renderFilterTags = (data) => {
    
    let tags = [];
    data.forEach( element => {
        element.tag.forEach( tag => {

            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        } )
    })
    let filter = document.getElementById("filter")

    filter.insertAdjacentHTML("beforeend", `
        <div class='filterTags'>
    `   
    )

    tags.forEach( tag => renderTag(tag) )

    filter.insertAdjacentHTML("beforeend", `
        <\div>
    `)
}

const renderTag = ( tag ) => {
    let filter = document.getElementById("filter")
    filter.insertAdjacentHTML('beforeend', 
        `
        <input type="checkbox" id="${tag}" class="filterTag"">
        <label for="gameTag">${tag}</label>
        `
    )
}

export function renderFilteredTags() {
    
    let filter = Array.from(document.querySelectorAll('input[type=checkbox][class=filterTag]'))
    console.log(filter)
    let checked = []

    // an object with only unique
    let insertedTags = new Set()

    filter.forEach( element => {
        if (element.checked) {
            checked.push(element.id)
        }
    })

    let price = document.getElementById("gamePrice").value
    console.log(price)

    let search = document.getElementById("gameSearch").value

    console.log(checked)

    list.innerHTML = ""

    data.forEach( (element) => {

        element.tag.forEach( (tag) => {
            if (checked.includes(tag) && !insertedTags.has(element.id) && element.price < price && element.name.includes(search)) {
                list.insertAdjacentHTML('beforeend', generateCard(element))
                insertedTags.add(element.id)
                return;
            }
        })
        
        return;
        
    })

}