import React from 'react';
import Header from './../components/header';
export default function Calculators() {
    return (
    <main>
        <Header/>
        <div className="font-poppins">
            <img src="https://source.unsplash.com/random/800x300/?img=1" alt="placeholder alt"/>
            <div className="w-full p-4">
                <h1 className="font-bold text-lg mb-4">Brewing Calculators</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae tempus enim, id pharetra libero. Ut vel auctor est, id euismod neque. Etiam in lacus lorem. Maecenas metus ex, semper a ex eget, tincidunt volutpat magna.</p>
                <div className="w-full my-6">
                    <div className="w-full border-2 border-red p-4 mb-4">
                        <h2 className="font-bold mb-4">ABV Calculator</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae tempus enim, id pharetra libero. Ut vel auctor est, id euismod neque. Etiam in lacus lorem. Maecenas metus ex, semper a ex.</p>
                        <a href="/brewing-calculators/abv" className="w-full block text-red text-right font-bold mt-2">View More</a>
                    </div>
                    <div className="w-full border-2 border-red p-4 mb-4">
                        <h2 className="font-bold mb-4">IBU Calculator</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae tempus enim, id pharetra libero. Ut vel auctor est, id euismod neque. Etiam in lacus lorem. Maecenas metus ex, semper a ex.</p>
                        <a href="/brewing-calculators/ibu" className="w-full block text-red text-right font-bold mt-2">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}