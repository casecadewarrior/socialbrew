import React from 'react';
import IngredientList from '../components/ingredientList';
import Header from './../components/header';



export default function PublicRecipes() {
    return (
        <main>
            <Header/>
            <IngredientList/>
        </main>
    );
}