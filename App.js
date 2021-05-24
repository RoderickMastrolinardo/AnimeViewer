import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persist} from './src/config/configureStore';
import AppNavigator from './src/navigation/Appnavigator';

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persist}> */}
      <AppNavigator />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
