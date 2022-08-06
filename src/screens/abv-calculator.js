import { useState } from "react";
import Header from './../components/header';

const initialState = {
    originalGravity: "",
    finalGravity: "",
};

export default function AbvCalculator() {
    const [abvCalc, setAbvCalc] = useState(initialState);
    const abvText = document.getElementById('abv-text');
    let abvValue = "";

    const handleChange = (event) => {
        setAbvCalc({ ...abvCalc, [event.target.name]: event.target.value });
    };

    const clearState = () => {
        setAbvCalc({ ...initialState });
        abvText.innerHTML = "?";
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let originalGravityValue = parseFloat(abvCalc.originalGravity);
        let finalGravityValue = parseFloat(abvCalc.finalGravity);
        abvValue = (originalGravityValue - finalGravityValue)*131.25;
        abvText.innerHTML = abvValue.toFixed(2) + "%";
    };
    return (
        <div>
            <Header/>
            <main>
                <div className="font-poppins w-full p-4 my-4">
                    <h2 className="font-bold text-lg text-red mb-4">Abv Calculator</h2>
                    <div className="w-full mb-8">
                        <p>sdkshdjhjkshdjkh hjh jhskjdh jkshd kjsjk jhskjdh jkshd kjsjk.</p>
                    </div>
                    <div className="mb-6">
                        <p>The estimated ABV of your beer is <span className="text-4xl text-red" id="abv-text">?</span></p>
                    </div>
                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Original Gravity
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" type="number" name="originalGravity" value={abvCalc.originalGravity} placeholder="Original Gravity" onChange={handleChange}/>
                            <p className="text-red-500 text-xs italic">Format must be SG e.g (1.050)</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Final gravity
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="final-gravity" name="finalGravity" type="number" value={abvCalc.finalGravity} placeholder="Final Gravity" onChange={handleChange}/>
                            <p className="text-red-500 text-xs italic">Format must be SG e.g (1.050)</p>
                            </div>
                            <div className="w-full p-4">
                                <div className="md:w-2/3 flex items-center justify-center">
                                    <button className="bg-white border-red border-2 hover:bg-red focus:shadow-outline focus:outline-none text-red hover:text-white font-bold py-2 px-4 mx-2" type="button" onClick={clearState}>
                                        Reset
                                    </button>
                                    <button className="bg-red border-transparent border-2 hover:bg-redDark focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-2" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>

                            <p id='result-field'></p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}