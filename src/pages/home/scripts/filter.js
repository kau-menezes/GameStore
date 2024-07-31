import {generateCard } from "./gameRendering.js";

// selects the div where the game cards are rendered
const list = document.querySelector("#games")

// selects all tags existent and renders them in the #filter div
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

    filter.insertAdjacentHTML("beforeend", "<div class='tagsFilter'></div>");

    tags.forEach(tag => renderTag(tag));

}

// returns the HTML necessary to render the filter
const renderTag = ( tag ) => {
    let container = document.querySelector(".tagsFilter")
    container.insertAdjacentHTML('beforeend', 
        `
        <input type="checkbox" id="${tag}" class="filterTag"">
        <label for="${tag}" class="filter-label">${tag}</label>
        `
    )
}

export function renderFilteredCards(data) {
    
    // selects all inputs and checkboxes from the user input
    let checkedTags = Array.from(document.querySelectorAll('input[type=checkbox][class=filterTag]:checked')).map( (element) => element.id)

    let price = Number(document.getElementById("gamePrice").value)

    let search = document.getElementById("gameSearch").value.toLowerCase().trim()

    // creates a subarray only with gamecards that fit the conditions especified in the filter method 
    let filteredCards = data.filter( (card) => {

        let cardCheck = checkedTags.length === 0 || card.tag.some(tag => checkedTags.includes(tag))

        return card.price <= price && card.name.toLowerCase().includes(search) && cardCheck
    })

    // clears the games section
    list.innerHTML = ""

    // render the cards using the generateCard function imported from the gameRendering.js file
    filteredCards.forEach ( (card) => list.insertAdjacentHTML('beforeend', generateCard(card)))

}