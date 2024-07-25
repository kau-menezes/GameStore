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

    tags.forEach( tag => renderTag(tag) )
}

const renderTag = ( tag ) => {
    let filter = document.getElementById("filter")
    filter.insertAdjacentHTML('beforeend', 
        `
        <input type="checkbox" id="${tag}" class="checkbox-filter">
        <label for="gameTag">${tag}</label>
        `
    )
}

export function renderFilteredTags() {
    
    let filter = Array.from(document.querySelectorAll('input[type=checkbox]'))
    let checked = []

    filter.forEach( element => {
        if (element.checked) {
            checked.push(element.id)
        }
    })

    console.log(checked)

    list.innerHTML = ""

    data.forEach( (element) => {
        // console.log(checked.includes(element.tag))

        element.tag.forEach( (tag) => {
            if (checked.includes(tag)) {
                list.insertAdjacentHTML('beforeend', generateCard(element))
                return;
            }
        })

        
    })

}