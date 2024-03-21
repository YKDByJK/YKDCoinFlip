import React from 'react';
import { Wallet } from './wallet.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Solana Wallet Integration Example</h1>
      </header>
      <main>
        <Wallet />
        {/* Your other components go here */}
      </main>
    </div>
  );
};

export default App;
