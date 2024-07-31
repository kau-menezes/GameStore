import { gameRendering } from "./gameRendering.js"
import { renderFilterTags } from "./filter.js"
import { renderFilteredCards } from "./filter.js"

import data from "../../../data/games.json" with { type: "json" }

export const list = document.querySelector("#games")

gameRendering(data, list)

renderFilterTags(data)

const filter = document.querySelectorAll('.filterTag')

Array.from(filter).forEach( (element) => element.addEventListener('input', () => { renderFilteredCards(data) }))