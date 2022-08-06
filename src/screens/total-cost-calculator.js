import { useState } from "react";
import Header from './../components/header';

export default function AbvCalculator() {
    const [totalCostCalc, setTotalCostCalc] = useState({
        pints: "",
        currency: "",
        grains: "",
        hops: "",
        yeast: "",
        extras: "",
        water: "",
        electricGas: "",
    });

    const handleChange = (event) => {
        setTotalCostCalc({ ...totalCostCalc, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        //const currencyText = document.getElementById('currency-text');
        // prevents the submit button from refreshing the page
        event.preventDefault();
        //let currencyValue = totalCostCalc.currency;
        let pintsValue = parseFloat(totalCostCalc.pints);
        let grainsValue = parseFloat(totalCostCalc.grains);
        let hopsValue = parseFloat(totalCostCalc.hops);
        let yeastValue = parseFloat(totalCostCalc.yeast);
        let extrasValue = parseFloat(totalCostCalc.extras);
        let waterValue = parseFloat(totalCostCalc.water);
        let electricGasValue = parseFloat(totalCostCalc.electricGas);
        let calculatedCost = (grainsValue + hopsValue + yeastValue + extrasValue + waterValue + electricGasValue) / pintsValue;
        console.log(calculatedCost);
    };

    return (
        <div>
            <Header/>
            <main>
                <div className="font-poppins w-full p-4 my-4">
                    <h2 className="font-bold text-lg text-red mb-4">Abv Calculator</h2>
                    <div className="w-full mb-8">
                        <p>sdkshdjhjkshdjkh hjh jhskjdh jkshd kjsjk jhskjdh jkshd kjsjk. sdkshdjhjkshdjkh hjh jhskjdh jkshd kjsjk jhskjdh jkshd kjsjk. sdkshdjhjkshdjkh hjh jhskjdh jkshd kjsjk jhskjdh jkshd kjsjk.</p>
                    </div>
                    <div className="mb-6">
                        <p>The cost per pint is <span className="text-4xl text-red" id="currency-text"></span> per pint.</p>
                    </div>
                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Number of pints</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" name="pints" type="number" value={totalCostCalc.pints} placeholder="Pints" onChange={handleChange}/>
                                <p className="text-red-500 text-xs italic">British imperial pint of 20 imperial fluid ounces (568 ml)</p>
                            </div>
                            <div className="w-full px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Currency</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="currency" value={totalCostCalc.currency} onChange={handleChange}>
                                    <option >Choose a currency</option>
                                    <option value="$">US Dollars</option>
                                    <option value="£">British Pound</option>
                                </select>
                            </div>
                            <div className="w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Grains
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" name="grains" type="number" value={totalCostCalc.grains} placeholder="OG" onChange={handleChange}/>
                            </div>
                            <div className="w-1/2 px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Hops
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="hops" name="hops" type="number" value={totalCostCalc.hops} placeholder="Hops" onChange={handleChange}/>
                            </div>
                            <div className="w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Yeast
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" name="yeast" type="number" value={totalCostCalc.yeast} placeholder="Yeast" onChange={handleChange}/>
                            </div>
                            <div className="w-1/2 px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Extras
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="extras" name="extras" type="number" value={totalCostCalc.extras} placeholder="Extras" onChange={handleChange}/>
                                <p className="text-red-500 text-xs italic">Fruits, spices etc.</p>
                            </div>
                            <div className="w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Water
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="water" name="water" type="number" value={totalCostCalc.water} placeholder="Water" onChange={handleChange}/>
                            </div>
                            <div className="w-1/2 px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Electric/ Gas
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="electric-gas" name="electricGas" type="number" value={totalCostCalc.electricGas} placeholder="Electric or Gas" onChange={handleChange}/>
                            </div>
                            <div className="w-full p-4">
                                <div className="md:w-2/3 flex items-center justify-center">
                                    <button className="bg-red border-transparent border-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-2">
                                        Update
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