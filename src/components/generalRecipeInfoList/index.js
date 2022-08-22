import React from "react";
import { useState } from "react"; // imports state for the toggle

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
                <p>1.062</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">FG</p>
                <p>1.010</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">ABV</p>
                <p>6.2%</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">EBC</p>
                <p>12</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">SRM</p>
                <p>8</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">Volume</p>
                <p>20L / 5gal</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold text-red">Beer Style</p>
                <p>Double IPA</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}