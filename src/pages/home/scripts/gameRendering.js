
export function gameRendering (data, list){

    list.innerHTML = ""

    data.forEach( (game) => { 
        list.insertAdjacentHTML("beforeend", generateCard(game))
    })
}

export function generateCard(game) {
     
    return `
            <li class="game-card">
                <img src="../../assets/img/${game.id}.png" alt="">
                <div class="game-info">
                    <h1 class="game-name">${game.name}</h1>
                    <h3 class="game-tags">${game.publisher}</h3>
                    <h3 class="game-tags">${game.tag.join(", ")}</h3>
                    <h3 class="game-price">R$ ${game.price},00</h3>
                    <div class="btns">
                        <button class="add-to-cart">ADD TO CART</button>
                        <input type="checkbox" style="display:none" id="like-${game.id}"/>
                        <label for="like-${game.id}">
                            <span class="material-symbols-outlined like">favorite</span>
                        </label>
                    </div>
                </div>
            </li>
    `

}
