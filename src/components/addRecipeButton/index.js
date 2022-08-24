import React from "react";

function handleSubmit(e) {
    e.preventDefault();
    // Enter logic to save post to DB via API once ready
    alert('Submitted');
}

export default function sharePostForm() {
    return (
    <>
        <div className='w-full px-4 mb-4 font-poppins'>
            <button className='bg-red rounded text-white p-2 text-sm hover:bg-redDark'>Add New Recipe</button>
        </div>
    </>
  );
}