import React from "react";
import RecipeShareIcon from '../../assets/images/share-recipe.svg';
import ImageShareIcon from '../../assets/images/camera.svg';

function handleSubmit(e) {
    e.preventDefault();
    // Enter logic to save post to DB via API once ready
    alert('Submitted');
}

function uploadImage() {
    // Enter logic to save post to DB via API once ready
    alert('Image upload');
}

function selectRecipe() {
    // Enter logic to save post to DB via API once ready
    alert('popup triggered upload');
}

export default function sharePostForm() {
    return (
    <>
        <form onSubmit={handleSubmit} className="font-poppins">
            <div className="w-full bg-cream p-4 flex justify-between">
                <div className="overflow-hidden border-red border-2 relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute -left-1 w-12 h-12 text-gray-400" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
                <textarea className="flex-grow ml-4 p-2 h-28 bg-input" placeholder="Hey, What's brewing?"></textarea>
            </div>
            <div className="w-full flex justify-between">
                <div className="px-4 py-2 flex items-center border-b-2 border-input flex-grow">
                    <button onClick={selectRecipe} type="button" className="mr-4">
                        <img src={RecipeShareIcon} alt="Recipe Select" width="35px"/>
                    </button>
                    <button onClick={uploadImage} type="button" className="mr-4">
                        <img src={ImageShareIcon} alt="Image upload" width="35px"/>
                    </button>
                </div>
                <button type="submit" className="bg-red hover:bg-redDark text-white py-2 px-4">Submit</button>
            </div>
        </form>
    </>
  );
}