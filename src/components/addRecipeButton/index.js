import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function sharePostForm() {
    return (
    <>
        <div className='w-full px-4 mb-4 font-poppins'>
            <Link to="/about">
                <button className='bg-red rounded text-white p-2 text-sm hover:bg-redDark'>Add New Recipe</button>
            </Link>
        </div>
    </>
  );
}