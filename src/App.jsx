import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { PrivyProvider, usePrivy } from '@privy-io/react-auth';

import WebApp from '@twa-dev/sdk';

function LoginPrivyButton() {
  const { ready, authenticated, login } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);

  return (
    <button disabled={disableLogin} onClick={login}>
      Log in
    </button>
  );
}

function LogoutPrivyButton() {
  const { ready, authenticated, logout } = usePrivy();
  const disableLogout = !ready || (ready && !authenticated);

  return (
    <button disabled={disableLogout} onClick={logout}>
      Log out
    </button>
  );
}

function User() {
  const { ready, authenticated, user } = usePrivy();

  // Show nothing if user is not authenticated or data is still loading
  if (!(ready && authenticated) || !user) {
    return null;
  }

  return (
    <div>
      <p>User {user.id} has linked the following accounts:</p>
      <ul>
        <li>Apple: {user.apple ? user.apple.email : 'None'}</li>
        <li>Discord: {user.discord ? user.discord.username : 'None'}</li>
        <li>Email: {user.email ? user.email.address : 'None'}</li>
        <li>Farcaster: {user.farcaster ? user.farcaster.username : 'None'}</li>
        <li>GitHub: {user.github ? user.github.username : 'None'}</li>
        <li>Google: {user.google ? user.google.email : 'None'}</li>
        <li>Instagram: {user.instagram ? user.instagram.username : 'None'}</li>
        <li>LinkedIn: {user.linkedin ? user.linkedin.email : 'None'}</li>
        <li>Phone: {user.phone ? user.phone.number : 'None'}</li>
        <li>Spotify: {user.spotify ? user.spotify.email : 'None'}</li>
        <li>Telegram: {user.telegram ? user.telegram.username : 'None'}</li>
        <li>TikTok: {user.tiktok ? user.tiktok.email : 'None'}</li>
        <li>Twitter: {user.twitter ? user.twitter.username : 'None'}</li>
        <li>Wallet: {user.wallet ? user.wallet.address : 'None'}</li>
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  console.log(import.meta.env.VITE_PRIVY_APP_ID);

  return (
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID || ''}
      config={{
        appearance: {
          theme: 'dark',
          walletList: ['detected_wallets', 'metamask'],
        },
        loginMethods: ['email'],
      }}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Privy</h1>
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
      <LogoutPrivyButton />
      <LoginPrivyButton />
      <User />
    </PrivyProvider>
  );
}

export default App;
