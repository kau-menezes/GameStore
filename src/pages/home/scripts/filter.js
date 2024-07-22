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
        <input type="checkbox" id="gameTag">
        <label for="gameTag">${tag}</label>
        `
    )
}