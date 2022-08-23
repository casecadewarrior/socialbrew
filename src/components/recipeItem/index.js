import React from "react";
import StarRating from '.././starRating';

export default function RecipeItem(props) {
    const recipe = props;
    return (
        <>
    <div className="post-item__content--recipe font-poppins w-full mb-4 px-4">
        <div className="w-full border-2 border-red">
            <div className="w-full p-2 flex">
                <div className="w-1/2">
                    <img src="https://image.shutterstock.com/image-photo/handsome-adult-brewer-inspecting-process-600w-1433953739.jpg" alt="random alt"/>
                </div>
                <div className="w-1/2 pl-2 text-xs">
                    <h2 className="font-bold text-sm">{recipe.beerName}</h2>
                    <h3><span className="font-bold">Style:</span> {recipe.beerStyle}</h3>
                    <h4><span className="font-bold">ABV:</span> {recipe.abv}</h4>
                    <div className="text-xs mt-2">
                        <p>{recipe.recipeDescription}</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex border-red border-t-2">
                <div className="w-full text-xs border-r-2 border-red p-2 w-2/3 flex items-center">
                    <p className="mr-2">Public Rating:</p>
                    <StarRating />
                </div>
                <div className="w-1/3 flex">
                    <a href="/recipe" className="uppercase text-red font-bold text-sm p-2 text-center w-full">View Recipe</a>
                </div>
            </div>
        </div>
    </div>
    </>
);
}