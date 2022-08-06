import React from 'react';
import Header from './../components/header';

export default function AbvCalculator() {
    const currencyText = document.getElementById('currency-text');
    let estimatedCost = 0;
    let selectedCurrency = '£';
    const changeCurrency = event => {
        selectedCurrency = event.target.value;
        currencyText.innerText = selectedCurrency;
        if (estimatedCost === 0) {
            currencyText.innerText = selectedCurrency + '0';
        }
    }

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
                        <p>The cost per pint is <span className="text-4xl text-red" id="currency-text">£00.00</span> per pint.</p>
                    </div>
                    <div className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Number of pints</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" type="number" placeholder="Pints"/>
                                <p className="text-red-500 text-xs italic">British imperial pint of 20 imperial fluid ounces (568 ml)</p>
                            </div>
                            <div className="w-full px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Currency</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={changeCurrency}>
                                    <option >Choose a currency</option>
                                    <option value="$">US Dollars</option>
                                    <option value="£">British Pound</option>
                                </select>
                            </div>
                            <div className="w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Grains
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" type="number" placeholder="Grains"/>
                            </div>
                            <div className="w-1/2 px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Hops
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="final-gravity" type="number" placeholder="Hops"/>
                            </div>
                            <div className="w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Yeast
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" type="number" placeholder="Yeast"/>
                            </div>
                            <div className="w-1/2 px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Extras
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="final-gravity" type="number" placeholder="Extras"/>
                                <p className="text-red-500 text-xs italic">Fruits, spices etc.</p>
                            </div>
                            <div className="w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Water
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" type="number" placeholder="Water"/>
                            </div>
                            <div className="w-1/2 px-3 mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cost of Electric/ Gas
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="final-gravity" type="number" placeholder="Electric or Gas"/>
                            </div>
                            <div className="w-full p-4">
                                <div className="md:w-2/3 flex items-center justify-center">
                                    <button className="bg-red border-transparent border-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-2" type="button">
                                        Update
                                    </button>
                                </div>
                            </div>

                            <p id='result-field'></p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}