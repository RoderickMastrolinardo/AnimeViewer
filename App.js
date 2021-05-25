import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persist} from './src/config/configureStore';
import AppNavigator from './src/navigation/Appnavigator';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <AppNavigator />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

export default App;
