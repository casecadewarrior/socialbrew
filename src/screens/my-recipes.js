import React from 'react';
import RecipeFilter from '../components/recipeFilter';
import Header from './../components/header';
import RecipeItem from './../components/recipeItem';
import AddRecipeButton from './../components/addRecipeButton';

import recipeData from "../data/recipes";

const currentRecipe = recipeData;

export default function PublicRecipes() {
    return (
        <main>
            <Header/>
            <RecipeFilter />
            <AddRecipeButton />
            {currentRecipe.map((data, idx) => (
                <RecipeItem key={idx} {...data}/>
            ))}
        </main>
    );
}