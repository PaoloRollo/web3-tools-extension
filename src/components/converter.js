import { useState } from 'react';
import Web3 from 'web3';

const Converter = () => {
    const [weiAmount, setWeiAmount] = useState(0);
    const [gweiAmount, setGweiAmount] = useState(0);
    const [ethAmount, setEthAmount] = useState(0);

    const onChangeWei = (value) => {
        if (parseFloat(value) <= 0) {
            setGweiAmount(0);
            setEthAmount(0);
            return;
        }
        setWeiAmount(value);
        setGweiAmount(Web3.utils.fromWei(Web3.utils.toBN(value), 'Gwei'));
        setEthAmount(Web3.utils.fromWei(Web3.utils.toBN(value)));
    }

    const onChangeGwei = (value) => {
        if (parseFloat(value) <= 0) {
            setWeiAmount(0);
            setEthAmount(0);
            return;
        }
        setGweiAmount(value);
        setWeiAmount(Web3.utils.toWei(Web3.utils.toBN(value), 'Gwei'));
        setEthAmount(Web3.utils.fromWei(Web3.utils.toWei(Web3.utils.toBN(value), 'Gwei')));
    }

    const onChangeEth = (value) => {
        if (parseFloat(value) <= 0) {
            setWeiAmount(0);
            setGweiAmount(0);
            return;
        }
        setEthAmount(value);
        setWeiAmount(Web3.utils.toWei(Web3.utils.toBN(value)));
        setGweiAmount(Web3.utils.fromWei(Web3.utils.toWei(Web3.utils.toBN(value)), 'Gwei'));
    }

    return (
        <div className="mt-4 flex flex-col">
            <div>
                <label htmlFor="wei" className="block text-sm font-medium text-gray-700">
                    Wei
                </label>
                <div className="mt-1">
                    <input
                    type="number"
                    name="wei"
                    id="wei"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={weiAmount}
                    onChange={(e) => onChangeWei(e.target.value)}
                    min={0}
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="gwei" className="block text-sm font-medium text-gray-700">
                    Gwei
                </label>
                <div className="mt-1">
                    <input
                    type="number"
                    name="gwei"
                    id="gwei"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={gweiAmount}
                    onChange={(e) => onChangeGwei(e.target.value)}
                    min={0}
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="ether" className="block text-sm font-medium text-gray-700">
                    Ether
                </label>
                <div className="mt-1">
                    <input
                    type="number"
                    name="ether"
                    id="ether"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={ethAmount}
                    onChange={(e) => onChangeEth(e.target.value)}
                    min={0}
                    />
                </div>
            </div>
        </div>
    )
}

export default Converter;