import React from 'react';
import RecipeFilter from '../components/recipeFilter';
import Header from './../components/header';
import RecipeItem from './../components/recipeItem';

import recipeData from "../data/recipes";

const currentRecipe = recipeData; // Add logic to set recipe id

export default function PublicRecipes() {
    return (
        <div>
            <Header/>
            <RecipeFilter />
            {currentRecipe.map((data, idx) => (
                <RecipeItem {...data}/>
            ))}
        </div>
    );
}