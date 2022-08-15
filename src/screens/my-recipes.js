import React from 'react';
import Header from './../components/header';
import RecipeItem from './../components/recipeItem';



export default function PublicRecipes() {
    return (
        <div>
            <Header/>
            <main className='p-4'>
                <RecipeItem />
                <RecipeItem />
                <RecipeItem />
                <RecipeItem />
                <RecipeItem />
                <RecipeItem />
                <RecipeItem />
            </main>
        </div>
    );
}