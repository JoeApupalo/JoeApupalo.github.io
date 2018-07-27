let loadrecipes = document.querySelector('#recipes')
let holder = document.querySelector('#recipeHolder')

loadrecipes.addEventListener('click', e => {
    console.log("WHERES THE LAMB SAUCE")
    const theingredients = document.querySelector('#ingredients').value
    console.log('ingredients: ' + theingredients)
    sendApiRequest(theingredients)
    console.log(theingredients)
})

function sendApiRequest(theingredients) {
    console.log('sending api request')
    fetch(`https://api.edamam.com/search?q=${theingredients}&app_id=a8c342e2&app_key=b3c54e353e645ca10f325e2ef8d60cf5`)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            console.log(json)
            displayIngredients(json)
        })

}

function displayIngredients(json) {
    holder.innerHTML += (json.hits["0"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["0"].recipe.url)}'>${(json.hits["0"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["1"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["1"].recipe.url)}'>${(json.hits["1"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["2"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["2"].recipe.url)}'>${(json.hits["2"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["3"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["3"].recipe.url)}'>${(json.hits["3"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["4"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["4"].recipe.url)}'>${(json.hits["4"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["5"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["5"].recipe.url)}'>${(json.hits["5"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["6"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["6"].recipe.url)}'>${(json.hits["6"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["7"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["7"].recipe.url)}'>${(json.hits["7"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["8"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["8"].recipe.url)}'>${(json.hits["8"].recipe.url)}</a><br>`


    holder.innerHTML += (json.hits["9"].recipe.label)
    holder.innerHTML += ` <a href='${(json.hits["9"].recipe.url)}'>${(json.hits["9"].recipe.url)}</a><br>`

}
//Baljeet Ya Yeet
