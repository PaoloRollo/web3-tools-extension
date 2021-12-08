import { useState } from 'react';
import Web3 from 'web3';
import axios from 'axios';

const BlockCalculator = () => {
    const [blockInput, setBlockInput] = useState("");
    const [blockOutput, setBlockOutput] = useState("");

    const onChangeBlockInput = async (value) => {
        setBlockInput(value);
        const web3 = new Web3("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
        const blockNumber = await web3.eth.getBlockNumber();
        if (blockNumber <= value) {
            const diff = value - blockNumber;
            const currentBlock = await web3.eth.getBlock(blockNumber);
            const currentDate = new Date(currentBlock.timestamp * 1000);
            const oldBlock = await web3.eth.getBlock(blockNumber - diff);
            const oldDate = new Date(oldBlock.timestamp * 1000);
            const diffDays = Math.ceil(Math.abs(currentDate - oldDate) / (1000 * 60 * 60 * 24)); 
            const newDate = new Date();
            newDate.setDate(newDate.getDate() + diffDays);
            setBlockOutput(newDate.toISOString());
        } else {
            setBlockOutput("");
        }
    }

    return (
        <div className="mt-4 flex flex-col">
            <p className="text-left">The estimated date provided is a simple estimation of when the given block could be mined.</p>
            <div className="mt-4">
                <label htmlFor="blockInput" className="block text-sm font-medium text-gray-700">
                    Future block number
                </label>
                <div className="mt-1">
                    <input
                    type="number"
                    name="blockInput"
                    id="blockInput"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={blockInput}
                    onChange={(e) => onChangeBlockInput(e.target.value)}
                    min={0}
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="blockOutput" className="block text-sm font-medium text-gray-700">
                    Estimated date
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="blockOutput"
                    id="blockOutput"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={blockOutput}
                    disabled
                    />
                </div>
            </div>
        </div>
    )
}

export default BlockCalculator;