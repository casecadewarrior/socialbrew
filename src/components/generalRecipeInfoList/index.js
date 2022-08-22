import React from "react";
import { useState } from "react"; // imports state for the toggle
import recipeData from "../../data/recipes";

const currentRecipe = recipeData[0]; // Add logic to set recipe id

export default function IngredientList() {
  const [isToggleEnabled, setToggleEnabled] = useState(true);
  return (
    <>
      <div className="w-full p-4 pb-0 font-poppins">
        <div className="bg-red text-white px-4 py-3 font-bold flex justify-between">
          <p>Generial Recipe Information</p>
          <button type="button" onClick={() => setToggleEnabled((prev) => !prev)}>+</button>
        </div>
        <div className={"w-full border-2 border-red border-t-0" + (isToggleEnabled ? null : " hidden")}>
          <div className="w-full">
            <ul className="w-full">
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">OG</p>
                <p>{currentRecipe.og}</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">FG</p>
                <p>{currentRecipe.fg}</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">ABV</p>
                <p>{currentRecipe.abv}</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">EBC</p>
                <p>{currentRecipe.ebc}</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">SRM</p>
                <p>{currentRecipe.srm}</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">Volume</p>
                <p>{currentRecipe.volume}</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">Beer Style</p>
                <p>{currentRecipe.beerStyle}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}