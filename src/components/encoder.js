import { useState } from 'react';
import Web3EthAbi from 'web3-eth-abi';

const Encoder = () => {
    const [option, setOption] = useState('encodeFunctionSignature');

    const [functionSignature, setFunctionSignature] = useState('');
    const [encodedFunctionSignature, setEncodedFunctionSignature] = useState('');

    const encodeFunctionSignature = () => {
        setEncodedFunctionSignature(Web3EthAbi.encodeFunctionSignature(functionSignature));
    }

    const [eventSignature, setEventSignature] = useState('');
    const [encodedEventSignature, setEncodedEventSignature] = useState('');

    const encodeEventSignature = () => {
        setEncodedEventSignature(Web3EthAbi.encodeEventSignature(eventSignature));
    }

    const [parameter, setParameter] = useState('');
    const [parameterType, setParameterType] = useState('');
    const [encodedParameter, setEncodedParameter] = useState('');

    const encodeParameter = () => {
        setEncodedParameter(Web3EthAbi.encodeParameter(parameterType, parameter));
    }

    const [parameters, setParameters] = useState('');
    const [parametersTypes, setParametersTypes] = useState('');
    const [encodedParameters, setEncodedParameters] = useState('');

    const encodeParameters = () => {
        setEncodedParameters(Web3EthAbi.encodeParameters(JSON.parse(parametersTypes), JSON.parse(parameters)));
    }

    const [functionJsonInterface, setFunctionJsonInterface] = useState('');
    const [functionParameters, setFunctionParameters] = useState('');
    const [encodedFunctionCall, setEncodedFunctionCall] = useState('');

    const encodeFunctionCall = () => {
        setEncodedFunctionCall(Web3EthAbi.encodeFunctionCall(JSON.parse(functionJsonInterface), JSON.parse(functionParameters)));
    }

    const [encParameter, setEncParameter] = useState('');
    const [encParameterType, setEncParameterType] = useState('');
    const [decodedParameter, setDecodedParameter] = useState('');

    const decodeParameter = () => {
        setDecodedParameter(Web3EthAbi.decodeParameter(encParameterType, encParameter));
    }

    const [encParameters, setEncParameters] = useState('');
    const [encParametersTypes, setEncParametersTypes] = useState('');
    const [decodedParameters, setDecodedParameters] = useState('');

    const decodeParameters = () => {
        setDecodedParameters(JSON.stringify(Web3EthAbi.decodeParameters(JSON.parse(encParametersTypes), encParameters)));
    }

    return (
        <div className="mt-4 flex flex-col">
            <div>
                <label htmlFor="method" className="block text-sm font-medium text-gray-700">
                    Method
                </label>
                <select
                    id="method"
                    name="method"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                >
                    <option value={"encodeFunctionSignature"}>Encode function signature</option>
                    <option value={"encodeEventSignature"}>Encode event signature</option>
                    <option value={"encodeParameter"}>Encode parameter</option>
                    <option value={"encodeParameters"}>Encode parameters</option>
                    <option value={"encodeFunctionCall"}>Encode function call</option>
                    <option value={"decodeParameter"}>Decode parameter</option>
                    <option value={"decodeParameters"}>Decode parameters</option>
                </select>
            </div>
            <div className="relative mt-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
            </div>
            {
                option === 'encodeFunctionSignature' && <>
                    <div className="mt-4">
                        <label htmlFor="functionSignature" className="block text-sm font-medium text-gray-700">
                            Function signature
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="functionSignature"
                            id="functionSignature"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={functionSignature}
                            onChange={(e) => setFunctionSignature(e.target.value)}
                            placeholder={"myFunction(uint256,uint32[],bytes10,bytes)"}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex text-center mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => encodeFunctionSignature()}
                    >
                        Encode
                    </button> 
                    <div className="mt-4">
                        <label htmlFor="encodedFunctionSignature" className="block text-sm font-medium text-gray-700">
                            Encoded function signature
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encodedFunctionSignature"
                            id="encodedFunctionSignature"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encodedFunctionSignature}
                            disabled
                            />
                        </div>
                    </div>
                </>
            }
            {
                option === 'encodeEventSignature' && <>
                    <div className="mt-4">
                        <label htmlFor="eventSignature" className="block text-sm font-medium text-gray-700">
                            Event signature
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="eventSignature"
                            id="eventSignature"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={eventSignature}
                            onChange={(e) => setEventSignature(e.target.value)}
                            placeholder={"myEvent(uint256,uint32[],bytes10,bytes)"}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex text-center mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => encodeEventSignature()}
                    >
                        Encode
                    </button> 
                    <div className="mt-4">
                        <label htmlFor="encodedEventSignature" className="block text-sm font-medium text-gray-700">
                            Encoded event signature
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encodedEventSignature"
                            id="encodedEventSignature"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encodedEventSignature}
                            disabled
                            />
                        </div>
                    </div>
                </>
            }
            {
                option === 'encodeParameter' && <>
                    <div className="mt-4">
                        <label htmlFor="parameter" className="block text-sm font-medium text-gray-700">
                            Parameter
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="parameter"
                            id="parameter"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={parameter}
                            onChange={(e) => setParameter(e.target.value)}
                            placeholder={"123456"}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="parameterType" className="block text-sm font-medium text-gray-700">
                            Parameter type
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="parameterType"
                            id="parameterType"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={parameterType}
                            onChange={(e) => setParameterType(e.target.value)}
                            placeholder={"uint256"}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex text-center mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => encodeParameter()}
                    >
                        Encode
                    </button> 
                    <div className="mt-4">
                        <label htmlFor="encodedParameter" className="block text-sm font-medium text-gray-700">
                            Encoded parameter
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encodedParameter"
                            id="encodedParameter"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encodedParameter}
                            disabled
                            />
                        </div>
                    </div>
                </>
            }
            {
                option === 'encodeParameters' && <>
                    <div className="mt-4">
                        <label htmlFor="parameters" className="block text-sm font-medium text-gray-700">
                            Parameters
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="parameters"
                            id="parameters"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={parameters}
                            onChange={(e) => setParameters(e.target.value)}
                            placeholder={'[123456, "abcdefgh"]'}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="parametersTypes" className="block text-sm font-medium text-gray-700">
                            Parameters types
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="parametersTypes"
                            id="parametersTypes"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={parametersTypes}
                            onChange={(e) => setParametersTypes(e.target.value)}
                            placeholder={'["uint256", "string"]'}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex text-center mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => encodeParameters()}
                    >
                        Encode
                    </button> 
                    <div className="mt-4">
                        <label htmlFor="encodedParameters" className="block text-sm font-medium text-gray-700">
                            Encoded parameters
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encodedParameters"
                            id="encodedParameters"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encodedParameters}
                            disabled
                            />
                        </div>
                    </div>
                </>
            }
            {
                option === 'encodeFunctionCall' && <>
                    <div className="mt-4">
                        <label htmlFor="functionJsonInterface" className="block text-sm font-medium text-gray-700">
                            Function JSON interface
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="functionJsonInterface"
                            id="functionJsonInterface"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={functionJsonInterface}
                            onChange={(e) => setFunctionJsonInterface(e.target.value)}
                            placeholder={'{"name":"myMethod","type":"function","inputs":[{"type":"uint256","name":"myNumber"},{"type":"string","name":"myString"}]}'}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="functionParameters" className="block text-sm font-medium text-gray-700">
                            Parameters
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="functionParameters"
                            id="functionParameters"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={functionParameters}
                            onChange={(e) => setFunctionParameters(e.target.value)}
                            placeholder={'["Hello", 123456]'}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex text-center mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => encodeFunctionCall()}
                    >
                        Encode
                    </button> 
                    <div className="mt-4">
                        <label htmlFor="encodedFunctionCall" className="block text-sm font-medium text-gray-700">
                            Encoded function call
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encodedFunctionCall"
                            id="encodedFunctionCall"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encodedFunctionCall}
                            disabled
                            />
                        </div>
                    </div>
                </>
            }
            {
                option === 'decodeParameter' && <>
                    <div className="mt-4">
                        <label htmlFor="encParameter" className="block text-sm font-medium text-gray-700">
                            Encoded parameter
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encParameter"
                            id="encParameter"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encParameter}
                            onChange={(e) => setEncParameter(e.target.value)}
                            placeholder={"0x0000000000000000000000000000000000000000000000000000000000000010"}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="encParameterType" className="block text-sm font-medium text-gray-700">
                            Encoded parameter type
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encParameterType"
                            id="encParameterType"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encParameterType}
                            onChange={(e) => setEncParameterType(e.target.value)}
                            placeholder={"uint256"}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex text-center mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => decodeParameter()}
                    >
                        Decode
                    </button> 
                    <div className="mt-4">
                        <label htmlFor="decodedParameter" className="block text-sm font-medium text-gray-700">
                            Decoded parameter
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="decodedParameter"
                            id="decodedParameter"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={decodedParameter}
                            disabled
                            />
                        </div>
                    </div>
                </>
            }
            {
                option === 'decodeParameters' && <>
                    <div className="mt-4">
                        <label htmlFor="encParameters" className="block text-sm font-medium text-gray-700">
                            Encoded parameters
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encParameters"
                            id="encParameters"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encParameters}
                            onChange={(e) => setEncParameters(e.target.value)}
                            placeholder={"0x0000000000000000000000000000000000000000000000000000000000000010"}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="encParametersTypes" className="block text-sm font-medium text-gray-700">
                            Encoded parameters types
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="encParametersTypes"
                            id="encParametersTypes"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={encParametersTypes}
                            onChange={(e) => setEncParametersTypes(e.target.value)}
                            placeholder={'["string"]'}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex text-center mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => decodeParameters()}
                    >
                        Decode
                    </button> 
                    <div className="mt-4">
                        <label htmlFor="decodedParameters" className="block text-sm font-medium text-gray-700">
                            Decoded parameters
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="decodedParameters"
                            id="decodedParameters"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            value={decodedParameters}
                            disabled
                            />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Encoder;