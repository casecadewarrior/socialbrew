import React from "react";
import { useState } from "react"; // imports state for the toggle
import recipeData from "../../data/recipes";

const currentRecipe = recipeData[0]; // Add logic to set recipe id

export default function IngredientList() {
  const [isToggleEnabled, setToggleEnabled] = useState(false);

  console.log(currentRecipe);
  return (
    <>
      <div className="w-full p-4 font-poppins">
        <div className="bg-red text-white px-4 py-3 font-bold flex justify-between">
          <p>Ingredients</p>
          <button type="button" onClick={() => setToggleEnabled((prev) => !prev)}>+</button>
        </div>
        <div className={"w-full border-2 border-red border-t-0" + (isToggleEnabled ? null : " hidden")}>
          <div className="w-full text-red flex justify-between px-4 py-3 bg-cream text-sm">
            <p className="font-bold">Malt</p>
            <button type="button" className="">Edit</button>
          </div>
          <div className="w-full">
            <ul className="w-full">
              {currentRecipe.grains.map(grain => (
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold">{grain.grainName}</p>
                <p>{grain.grainAmount}</p>
              </li>
              ))}
            </ul>
          </div>
          <div className="w-full text-red">
            <div className="w-full flex justify-between px-4 py-3 bg-cream text-sm">
              <p className="font-bold">Yeast</p>
              <button type="button" className="">Edit</button>
            </div>
            <div className="w-full">
              {currentRecipe.yeasts.map(yeast => (
                <ul className="w-full">
                  <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                    <p className="font-bold">{yeast.yeastName}</p>
                    <p>{yeast.yeastAmount}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="w-full text-red">
            <div className="w-full flex justify-between px-4 py-3 bg-cream text-sm">
              <p className="font-bold">Hops</p>
              <button type="button" className="">Edit</button>
            </div>
            <div className="w-full">
              <ul className="w-full">
                {currentRecipe.hops.map(hop => (
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">{hop.hopName}</p>
                  <p>{hop.additionTime} - {hop.hopPurpose}</p>
                  <p>{hop.hopAmount}</p>
                </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full text-red">
            <div className="w-full flex justify-between px-4 py-3 bg-cream text-sm">
              <p className="font-bold">Other</p>
              <button type="button" className="">Edit</button>
            </div>
            <div className="w-full">
              <ul className="w-full">
                {currentRecipe.otherIngredients.map(other => (
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">{other.otherName}</p>
                  <p>{other.otherAmount}</p>
                </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full text-red">
            <div className="w-full flex justify-between px-4 py-3 bg-cream text-sm">
              <p className="font-bold">Water Chemicals</p>
              <button type="button" className="">Edit</button>
            </div>
            <div className="w-full">
              <ul className="w-full">
                {currentRecipe.chemicals.map(chemical => (
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">{chemical.chemicalName}</p>
                  <p>{chemical.chemicalAmount}</p>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}