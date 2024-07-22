import { gameRendering } from "./gameRendering.js"
import { renderFilterTags } from "./filter.js"

import data from "../../../data/games.json" with { type: "json" }

const list = document.querySelector("#games")

gameRendering(data, list)

renderFilterTags(data)