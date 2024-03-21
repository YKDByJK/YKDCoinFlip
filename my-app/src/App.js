import React, { useState } from 'react';
import './App.css';
import { Wallet } from './wallet.tsx'; // Import the Wallet component

function App() {
  const [wallet, setWallet] = useState(null);
  const [connection, setConnection] = useState(null);
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    localStorage.getItem('darkModeEnabled') === 'true'
  );

  const connectWallet = async () => {
    try {
      // Your wallet connection logic here
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const flipCoin = async () => {
    try {
      // Your coin flip logic here
    } catch (error) {
      console.error('Error flipping coin and transferring tokens:', error);
    }
  };

  const toggleDarkMode = () => {
    const darkModeEnabled = !darkModeEnabled;
    setDarkModeEnabled(darkModeEnabled);
    if (darkModeEnabled) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkModeEnabled', darkModeEnabled);
  };

  return (
    <div className="App">
      <div className="dark-mode-toggle">
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={darkModeEnabled}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkModeToggle"></label>
      </div>
      <div className="content">
        <div className="container">
          <h1>Coin Flip DApp</h1>
          {/* Render the Wallet component to connect the Solana wallet */}
          <Wallet setWallet={setWallet} setConnection={setConnection} />
          <p>Bet <span id="betAmount">0.1</span> SOL on a coin flip:</p>
          <button onClick={flipCoin} id="flipButton" disabled>Flip Coin</button>
          <p id="result"></p>
          <div className="coin-container">
            <img src="coin.png" alt="Coin" id="coin" className="coin" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
