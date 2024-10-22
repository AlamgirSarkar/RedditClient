import React from 'react';
import LaneContainer from './LaneContainer';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <header className="app-header">
        <h1>Multi-Lane Reddit Client</h1>
        <p>View multiple subreddits in separate customizable lanes</p>
        </header>
        <div>
          <LaneContainer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
