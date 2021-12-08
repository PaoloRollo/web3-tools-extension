import { useState } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import { TrashIcon, ClipboardCopyIcon } from '@heroicons/react/solid'

const Favorites = () => {
    const [value, setValue, isPersistent, error] = useChromeStorageLocal('favs', []);

    const [newValKey, setNewValKey] = useState('');
    const [newValValue, setNewValValue] = useState('');

    const addNewValue = () => {
        setValue(value.concat({ key: newValKey, value: newValValue }));
        setNewValKey('');
        setNewValValue('');
    }

    console.log(value)

    return (
        <div>
            <div className="mt-4">
                <label htmlFor="newValKey" className="block text-sm font-medium text-gray-700">
                    Key
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="newValKey"
                    id="newValKey"
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={newValKey}
                    onChange={(e) => setNewValKey(e.target.value)}
                    placeholder={"Uniswap address"}
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="newValValue" className="block text-sm font-medium text-gray-700">
                    Value
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="newValValue"
                    id="newValValue"
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={newValValue}
                    onChange={(e) => setNewValValue(e.target.value)}
                    placeholder={"0x00000000000000000000000000000"}
                    />
                </div>
            </div>
            <button
                type="button"
                className="inline-flex text-center mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={() => addNewValue()}
            >
                Add new value
            </button> 
            <div className="relative mt-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
            </div>
            <ul role="list" className="divide-y divide-gray-200">
                {value.map((v, index) => (
                    <li key={index} className="py-4 flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-900">{v.key}</p>
                            <p className="text-sm text-gray-500">{v.value}</p>
                        </div>
                        <div className="flex">

                            <button
                                type="button"
                                className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                onClick={async () => await navigator.clipboard.writeText(v.value)}
                            >
                                <ClipboardCopyIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="ml-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={() => setValue(value.filter((v, idx) => index !== idx))}
                            >
                                <TrashIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites;