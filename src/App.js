import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import { useState } from 'react';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import Converter from './components/converter';
import Hashing from './components/hashing';
import Wallet from './components/wallet';
import BlockCalculator from './components/block';
import Encoder from './components/encoder';
import Favorites from './components/favorites';


function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [currentNav, setCurrentNav] = useState(null);

  console.log(currentNav);

  const getCurrentElement = () => {
    switch (currentNav.name.toLowerCase()) {
      case 'hashing':
        return <Hashing />
      case 'wallet':
        return <Wallet />
      case 'block calculator':
        return <BlockCalculator />
      case 'encoder':
        return <Encoder />
      case 'favorites':
        return <Favorites />
      default:
        return <Converter />
    }
  }

  return (
    <div className="px-8 py-6 w-80">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">🛠 Web3 Tools</h1>
        <button
          type="button"
          onClick={(e) => { setShowMenu(!showMenu); setCurrentNav(null); }}
          className="inline-flex items-center p-2 border border-transparent rounded-full text-white bg-white hover:bg-gray-50 focus:outline-none"
        >
          { showMenu ? <XIcon className="h-5 w-5 text-black" aria-hidden="true" /> : <MenuAlt2Icon className="h-5 w-5 text-black" aria-hidden="true" />}
        </button>
      </div>
      { showMenu && <Nav onClick={(element) => { setShowMenu(false); setCurrentNav(element) }} /> }
      { (!showMenu && currentNav) && getCurrentElement()}
    </div>
  );
}

export default App;
