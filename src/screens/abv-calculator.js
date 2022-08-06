import React from 'react';
import Header from './../components/header';

export default function AbvCalculator() {
    const ogField = document.getElementById('original-gravity');
    const fgField = document.getElementById('final-gravity');
    //const resultText = document.getElementById('result-field');
    let abvValue = 0;
    let ogValue = 0;
    let fgValue = 0;

    const setOgValue = () => {
        ogValue = parseFloat(ogField.value);
        alert(ogValue);
    }

    const setFgValue = () => {
        //fgValue = parseFloat(fgField.value);
    }


    const calculateAbv = () => {
        //ogValue = parseFloat(ogField.value);
        //fgValue = parseFloat(fgField.value);
        //abvValue = (ogValue-fgValue)*131.25;
        alert(abvValue.toFixed(2)+"%");
        //resultText.textContent = abvValue.toFixed(2);
    }
    const resetValue = () => {
        //ogField.value = 0;
        //fgField.value = 0;
        //abvValue.value = 0;
        //alert('clicked');
    }
    return (
        <div>
            <Header/>
            <main>
                <div className="font-poppins w-full p-4 my-4">
                    <h2 className="font-bold text-lg text-red mb-4">Abv Calculator</h2>
                    <div className="w-full mb-8">
                        <p>sdkshdjhjkshdjkh hjh jhskjdh jkshd kjsjk jhskjdh jkshd kjsjk.</p>
                    </div>
                    <div className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Original Gravity
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="original-gravity" type="number" placeholder="Original Gravity" onChange={setOgValue}/>
                            <p className="text-red-500 text-xs italic">Format must be SG e.g (1.050)</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Final gravity
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="final-gravity" type="number" placeholder="Final Gravity" onChange={setFgValue}/>
                            <p className="text-red-500 text-xs italic">Format must be SG e.g (1.050)</p>
                            </div>
                            <div className="w-full p-4">
                                <div className="md:w-2/3 flex items-center justify-center">
                                    <button className="bg-white border-red border-2 hover:bg-red focus:shadow-outline focus:outline-none text-red hover:text-red font-bold py-2 px-4 mx-2" type="button" onClick={resetValue}>
                                        Reset
                                    </button>
                                    <button className="bg-red border-transparent border-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-2" type="button" onClick={calculateAbv}>
                                        Submit
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