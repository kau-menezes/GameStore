import { gameRendering } from "./gameRendering.js"
import { renderFilterTags } from "./filter.js"
import { renderFilteredTags } from "./filter.js"


import data from "../../../data/games.json" with { type: "json" }

const list = document.querySelector("#games")

gameRendering(data, list)

renderFilterTags(data)

const filter = document.getElementById("filter")

filter.addEventListener('change', renderFilteredTags(list))