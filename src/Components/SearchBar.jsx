import React, { useState } from 'react'
import './Recipes.css'
import { FaSearch } from 'react-icons/fa'


const SearchBar = ({ handleInput, input, handleSearchRecipe }) => {

    return (
        <>
            <input type="text" placeholder='eg: cake, vegan, chicken' value={input} onChange={handleInput} />
            <FaSearch className='search-icon' size={33} color={'green'} onClick={handleSearchRecipe} />
        </>
    )
}

export default SearchBar