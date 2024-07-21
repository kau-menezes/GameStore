import { gameRendering } from "./gameRendering.js"
import data from "../../../data/games.json" with { type: "json" }


const list = document.querySelector("#games")

gameRendering(data, list)