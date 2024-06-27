import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './recipeCard.css'
import { fetchRecipe } from '../utils';
import RecipeDetails from './RecipeDetails';


const RecipeCard = ({ recipe }) => {

  const navigate = useNavigate();
  const { image, title, id } = recipe;

  const handleClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className='recipe-link' onClick={() => handleClick(id)} key={id} >
      <div className='recipe-card'>
        <img src={image} alt={title} width={200} />
        <div>
          <p className='recipe-label'>{title.length > 26 ? title.slice(0, 19) + '...' : title} </p>
        </div>
      </div>

    </div>
  );
};


export default RecipeCard