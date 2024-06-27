import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipe, fetchRecipes } from '../utils'
import ReactLoading from 'react-loading'
import Header from './Header'
import './RecipeDetail.css'
import { AiFillPushpin } from 'react-icons/ai'
import RecipeCard from './RecipeCard'

const RecipeDetails = () => {

  const { id } = useParams()

  const [recipe, setRecipe] = useState({})

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [randomRecipes, setRandomRecipes] = useState([])


  const cuisineCategories = [
    'Burgers',
    'Chicken',
    'Mutton',
    'Vegetarian',
    'Noodles',
    'Pasta',
    'Seafood',
    'Salads',
    'Soups',
    'Rice Dishes',
    'Sandwiches',
    'Pizza',
    'Stir-fry',
    'BBQ',
    'Desserts'
  ];


  const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };


  const getRecipe = async (id) => {
    try {
      const recommend = await fetchRecipes({ query: randomRecipes, limit: 15 })
      setRecipes(recommend)
      setLoading(true)
      const data = await fetchRecipe(id)
      setRecipe(data)
      setLoading(false)
    }
    catch (err) {
      console.log('error:', err)
      setLoading(false)
    }

  }

  useEffect(() => {
    const yourRandomDish = getRandomElement(cuisineCategories);

    setRandomRecipes(yourRandomDish);
    if (id) {
      getRecipe(id)
    }
  }, [id])

  if (loading) {
    return (
      <div className='Loading-icon'>
        <ReactLoading type={'balls'} color={'skyblue'} width={100} height={100} />
      </div>
    )
  } else {
    return (
      <div className='recipe-detail'>
        <Header title={recipe.title} image={recipe.image} />

        <div className='dish-container'>
          <div className='dish-info'>
            <span>
              {recipe.servings}
            </span>
            <p>Servings</p>
          </div>
          <div className='dish-info'>
            <span>
              {recipe.readyInMinutes}
            </span>
            <p>Time in Minutes</p>
          </div>
        </div>


        <div className='recipe-guide'>
          <div className='fetch-steps'>
            {recipe.analyzedInstructions && recipe.analyzedInstructions.map((instruction, index) => (
              <div key={index}>
                <p className='instructions'><b>Instructions:</b></p>
                {instruction.steps && instruction.steps.map((step, idx) => (
                  <div key={idx}>
                    <div className='steps-ingredients'>
                      <p className='each-step'><AiFillPushpin color='green' size={20} /> <b>Step {step.number}: </b>{step.step}</p>

                      <AiFillPushpin color='green' size={20} />  <b className='ingredient'>Ingredients: </b>
                      <span>
                        {step.ingredients && step.ingredients.map((ingredient, i) => (
                          <span key={i} className='each-ingredient'>
                            {ingredient.name}
                            {i < step.ingredients.length - 1 && ', '}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <h2 className='suggest-recipe'>Random Recipes:</h2>
        {randomRecipes.length > 0 ? (
          <>
            <div className='random-container'>
              <div className='random-recipe'>
                {
                  recipes.map((item, index) => {
                    return <RecipeCard recipe={item} key={index} />
                  })

                }
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='recipe-none'>
              <p>No Recipes Found!</p>
            </div>
          </>
        )

        }

      </div>
    )
  }
}

export default RecipeDetails