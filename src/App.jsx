import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import WebApp from '@twa-dev/sdk';

import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
  useWalletInfo,
} from '@web3modal/ethers/react';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '';

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
};

const metadata = {
  name: 'ton-test-2',
  description: 'AppKit Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>
        Open Network Modal
      </button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const { walletInfo } = useWalletInfo();

  console.log(walletInfo?.name, walletInfo?.icon);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + WalletConnect</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
      <ConnectButton />
      <p>walletInfo NAME: {walletInfo?.name ? walletInfo?.name : 'None'}</p>
      <p>walletInfo ICON: {walletInfo?.icon ? walletInfo?.icon : 'None'}</p>
    </>
  );
}

export default App;
