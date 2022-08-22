import React from "react";
import { useState } from "react"; // imports state for the toggle
import ImageSearchIcon from '../../assets/images/search.svg';

function handleSearch(e) {
    e.preventDefault();
    // add functionality for search
}


export default function RecipeFilter() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    return (
        <>
            <div className="w-full font-poppins mb-4">
                <div className="px-4 py-2 w-full text-red font-bold flex justify-between border-b-2 border-red">
                    <p>Filter Recipes</p>
                    <button type="button" onClick={() => setIsFilterOpen((prev) => !prev)}>+</button>
                </div>
                <div className={"w-full" + (isFilterOpen ? null : " hidden")}>
                    <form className="px-4 py-1 w-full bg-input flex justify-between border-b-2 border-white" onSubmit={handleSearch}>
                        <input type="search" placeholder="Search your recipes" className="bg-transparent p-2 pl-0 w-full" />
                        <button type="submit">
                            <img src={ImageSearchIcon} alt="Recipe Select" width="35px"/>
                        </button>
                    </form>
                    {/*<div className="autocomple-search w-full mb-4">
                        <ul className="bg-input">
                            <li className="px-4 py-2 border-b-2 border-white text-red text-sm">Item 1</li>
                            <li className="px-4 py-2 border-b-2 border-white text-red text-sm">Item 2</li>
                            <li className="px-4 py-2 border-b-2 border-white text-red text-sm">Item 3</li>
                        </ul>
                    </div>*/}
                </div>
            </div>
        </>
    );
}