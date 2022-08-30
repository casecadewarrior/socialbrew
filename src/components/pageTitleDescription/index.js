import React from "react";
export default function sharePostForm(props) {
    const recipe = props;
    return (
    <>
        <div className='w-full p-4 pb-0 font-poppins'>
            <h1 className='text-red text-2xl font-bold mb-2'>{recipe.beerName}</h1>
            <p>{recipe.recipeDescription}</p>
        </div>
    </>
  );
}