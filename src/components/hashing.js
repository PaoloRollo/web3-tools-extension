import { useState } from 'react';
import Web3 from 'web3';

const Hashing = () => {
    const [hashInput, setHashInput] = useState("");
    const [hashOutput, setHashOutput] = useState("");

    const onChangeHashInput = (value) => {
        setHashInput(value);
        setHashOutput(value ? Web3.utils.keccak256(value) : "");
    }

    return (
        <div className="mt-4 flex flex-col">
            <p className="text-left">Hashing method used: <strong>keccak256</strong></p>
            <div className="mt-4">
                <label htmlFor="hashInput" className="block text-sm font-medium text-gray-700">
                    Input
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="hashInput"
                    id="hashInput"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={hashInput}
                    onChange={(e) => onChangeHashInput(e.target.value)}
                    min={0}
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="hashOutput" className="block text-sm font-medium text-gray-700">
                    Output
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="hashOutput"
                    id="hashOutput"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={hashOutput}
                    disabled
                    />
                </div>
            </div>
        </div>
    )
}

export default Hashing;