import { ConnectButton, useConnection } from '@arweave-wallet-kit/react';
import Dashboard from './components/Dashboard';
import { APP_LOGO_URL } from './constants';

function App() {
    const { connected, connect } = useConnection();

    return (
        // rgb(56, 189, 248), rgb(37, 99, 235)
        <div className="font-ubuntu w-full h-screen pt-24 justify-center items-center text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <ConnectButton
                className="absolute top-4 right-4"
                showBalance={false}
            />

            <div className="absolute top-2 left-4">
                <img src={APP_LOGO_URL} alt="logo" width={70} />
            </div>
            <div className="text-center font-semibold text-5xl pb-6 drop-shadow-md">
                <span className="text-blue-800 drop-shadow-white">Perma</span>{' '}
                <span className="drop-shadow-blue">Tools</span>
            </div>
            {!connected && (
                <div className="flex text-center items-center justify-center">
                    <p>
                        To use the app you need to{' '}
                        <button
                            onClick={connect}
                            className="rounded-md bg-blue-500 hover:bg-blue-400 px-2 py-1 font-semibold"
                        >
                            connect
                        </button>
                    </p>
                </div>
            )}
            {connected && (
                <div className="flex items-center justify-center">
                    <Dashboard />
                </div>
            )}
        </div>
    );
}

export default App;
