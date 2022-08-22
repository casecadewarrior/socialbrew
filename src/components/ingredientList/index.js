import React from "react";

export default function IngredientList() {
    return (
    <>
      <div className="w-full p-4 font-poppins mb-4">
        <div className="bg-red text-white px-4 py-3 font-bold flex justify-between">
          <p>Ingredients</p>
          <button type="button" className="">+</button>
        </div>
        <div className="w-full border-2 border-red border-t-0">
          <div className="w-full text-red flex justify-between px-4 py-3 bg-cream text-sm">
            <p className="font-bold">Malt</p>
            <button type="button" className="">Edit</button>
          </div>
          <div className="w-full">
            <ul className="w-full">
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold">2-row</p>
                <p>4.5kg</p>
              </li>
              <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                <p className="font-bold">2-row</p>
                <p>4.5kg</p>
              </li>
            </ul>
          </div>
          <div className="w-full text-red">
            <div className="w-full flex justify-between px-4 py-3 bg-cream text-sm">
              <p className="font-bold">Yeast</p>
              <button type="button" className="">Edit</button>
            </div>
            <div className="w-full">
              <ul className="w-full">
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">US-05</p>
                  <p>1 pkt (12g)</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full text-red">
            <div className="w-full flex justify-between px-4 py-3 bg-cream text-sm">
              <p className="font-bold">Hops</p>
              <button type="button" className="">Edit</button>
            </div>
            <div className="w-full">
              <ul className="w-full">
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">2-row</p>
                  <p>60min Addition</p>
                  <p>4.5kg</p>
                </li>
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">Citra</p>
                  <p>30min Addition</p>
                  <p>4.5kg</p>
                </li>
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">Citra</p>
                  <p>0min Addition</p>
                  <p>4.5kg</p>
                </li>
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
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">Irish Moss</p>
                  <p>10g</p>
                </li>
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
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <p className="font-bold">Calcium</p>
                  <p>3.5g</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}