import React from 'react';
import IngredientList from '../components/ingredientList';
import Header from './../components/header';
import GeneralRecipeInfoList from './../components/generalRecipeInfoList';
import RecipeComments from './../components/recipeComments';


export default function PublicRecipes() {
    return (
        <main>
            <Header/>
            <GeneralRecipeInfoList/>
            <IngredientList/>
            <RecipeComments/>
        </main>
    );
}