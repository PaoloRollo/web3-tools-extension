import { useState } from 'react';
import { PlusCircleIcon, RefreshIcon, UploadIcon, QrcodeIcon } from '@heroicons/react/outline'
import Web3 from 'web3';

const Wallet = () => {
    const [wallet, setWallet] = useState(null);
    const [address, setAddress] = useState('');

    const generateWallet = () => {
        const web3 = new Web3("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
        const w = web3.eth.accounts.create();
        setWallet(w)
    }

    return (
        <div className="mt-4 flex flex-col">
            { !wallet && <>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            To checksum address
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm mb-4">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            </div>
                            <button
                            type="button"
                            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            onClick={() => { 
                                try { 
                                    setAddress(Web3.utils.toChecksumAddress(address))
                                } catch (e) {} 
                            }}
                            >
                                <span>Convert</span>
                            </button>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => generateWallet()}
                    >
                        <PlusCircleIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                        Generate wallet
                    </button> 
                </>
            }
            { 
                wallet && <div>
                    <p className="break-words text-md">
                        <strong>Address:</strong> {wallet.address}
                        <br/>
                        <br/>
                        <strong>PKey:</strong> {wallet.privateKey}
                    </p>
                    <button
                        type="button"
                        className="mt-4 w-full inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => generateWallet()}
                    >
                            <RefreshIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                            Generate again
                        </button> 
                </div>
            }
        </div>
    )
}

export default Wallet;