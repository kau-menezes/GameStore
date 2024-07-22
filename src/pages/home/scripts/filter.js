const renderFilterTags = (data) => {
    
    const tags = []
    data.forEach( element => {
        element.tags.forEach( tag => {
            if (tags.includes(tag)) {
                tags.push(tag)
            }
        } )
    })

    tags.forEach( tag => {
        
    });
}

const renderTag = ( tag ) => {
    let input = document.getElementById("")
}