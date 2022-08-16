import React from 'react';
import RecipeFilter from '../components/recipeFilter';
import Header from './../components/header';
import RecipeItem from './../components/recipeItem';



export default function PublicRecipes() {
    return (
        <main>
            <Header/>
            <RecipeFilter />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
        </main>
    );
}