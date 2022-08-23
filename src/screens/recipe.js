import React from 'react';
import IngredientList from '../components/ingredientList';
import Header from './../components/header';
import GeneralRecipeInfoList from './../components/generalRecipeInfoList';
import RecipeComments from './../components/recipeComments';

import recipeData from "../data/recipes";

const currentRecipe = recipeData[0]; // Add logic to set recipe id

export default function PublicRecipes() {
    const beerStyle = currentRecipe.beerStyle;
    return (
        <main>
            <Header/>
            <GeneralRecipeInfoList {...currentRecipe}/>
            <IngredientList {...currentRecipe}/>
            <RecipeComments {...currentRecipe}/>
        </main>
    );
}