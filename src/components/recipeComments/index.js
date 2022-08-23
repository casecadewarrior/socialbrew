import React from "react";
import { useState } from "react"; // imports state for the toggle

export default function IngredientList(props) {
  const [isToggleEnabled, setToggleEnabled] = useState(false);
  const recipe = props;
  return (
    <>
      <div className="w-full px-4 pb-0 font-poppins mb-4">
        <div className="bg-black text-white px-4 py-3 font-bold flex justify-between">
          <p>Comments</p>
          <button type="button" onClick={() => setToggleEnabled((prev) => !prev)}>+</button>
        </div>
        <div className={"w-full border-2 border-black border-t-0" + (isToggleEnabled ? null : " hidden")}>
          <div className="w-full">
            <ul className="w-full">
              {recipe.comments.map(comment => (
                <li className="w-full text-black flex px-4 py-3 justify-between text-sm border-b-2 border-input">
                  <img className="w-20 h-20 rounded-full border-2 border-red" src={comment.profileImageSrc} alt={comment.profileImageAlt}></img>
                  <div className="pl-4">
                    {comment.commentBody}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}