import React from "react";
import { useState } from "react"; // imports state for the toggle

export default function IngredientList(props) {
  const [isToggleEnabled, setToggleEnabled] = useState(false);
  const recipe = props;
  return (
    <>
      <div className="w-full p-4 font-poppins">
        <div className="bg-red text-white px-4 py-3 font-bold flex justify-between">
          <p>Ingredients</p>
          <button type="button" onClick={() => setToggleEnabled((prev) => !prev)}>{(isToggleEnabled ? '-' : "+")}</button>
        </div>
        <div className={"w-full border-2 border-red border-t-0" + (isToggleEnabled ? null : " hidden")}>
          <div className="w-full text-red flex justify-between px-4 py-3 bg-cream text-sm">
            <p className="font-bold">Malt</p>
            <button type="button" className="">Edit</button>
          </div>
          <div className="w-full">
            <ul className="w-full">
              {recipe.grains.map(grain => (
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
              {recipe.yeasts.map(yeast => (
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
                {recipe.hops.map(hop => (
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
                {recipe.otherIngredients.map(other => (
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
                {recipe.chemicals.map(chemical => (
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