import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import './Recipes.css'
import SearchBar from './SearchBar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils'

const Recipes = () => {

    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('Pizza')
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')


    const handleInput = (e) => {
        setInput(e.target.value)
        setQuery(input)
    }


    const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({ query: query, limit: 30 })
            setRecipes(data)
            setLoading(false)
        }
        catch (err) {
            console.log('error:', err)
        }
        finally {
            setLoading(false)
        }
    }

    const handleSearchRecipe = async (e) => {
        e.preventDefault()
        fetchRecipe()
    }

    const showMore = () => {
        setLimit(prev => prev + 10)
        fetchRecipe()
    }


    useEffect(() => {
        setLoading(true)
        fetchRecipe()
    }, [])

    if (loading) {
        return (
            <div className='Loading-icon'>
                <form className='recipes-form'>
                    <SearchBar />
                </form>
                <ReactLoading type={'balls'} color={'skyblue'} width={100} height={100} />
            </div>
        )
    } else {
        return (
            <div style={{ width: '100%' }}>
                <div className='recipes-container'>
                    <form className='recipes-form' onSubmit={handleSearchRecipe}>
                        <SearchBar handleInput={handleInput} input={input} handleSearchRecipe={handleSearchRecipe} />
                    </form>
                </div>

                {recipes.length > 0 ? (
                    <>
                        <div className='recipe-list'>
                            {
                                recipes.map((item, index) => {
                                    return <RecipeCard recipe={item} key={index} />
                                })

                            }
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

                {/* <div className='more-recipes'>
     <button className='more-btn' onClick={()=> showMore()}>Show more</button>
   </div> */}
            </div>
        )
    }


}

export default Recipes