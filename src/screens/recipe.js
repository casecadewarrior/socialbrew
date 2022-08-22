import React from 'react';
import IngredientList from '../components/ingredientList';
import Header from './../components/header';
import GeneralRecipeInfoList from './../components/generalRecipeInfoList'



export default function PublicRecipes() {
    return (
        <main>
            <Header/>
            <GeneralRecipeInfoList/>
            <IngredientList/>
        </main>
    );
}