export async function fetchRecipes(filter){
    const {query, limit} = filter;

    const apiKey = 
    `f849b08a1b88f3c483a0e32037b9e044`	


   const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${limit}&apiKey=4abb14f40e4844d2a59d034aa671a214`


    const response = await fetch(url)

    const data = await response.json()
    return data.results;

}

export async function fetchRecipe(id){

    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=4abb14f40e4844d2a59d034aa671a214`


    const response = await fetch(url)

    const data = await response.json()
    return data;

}


export async function fetchSimilarRecipe(id){
    const url = `https://api.spoonacular.com/recipes/${id}/similar?&number=15&apiKey=4abb14f40e4844d2a59d034aa671a214`

    const response = await fetch(url)

    const data = await response.json()
    return data;
}