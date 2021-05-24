/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/Appnavigator';
import {Text} from 'react-native';

const App = () => {
  return (
    // <NavigationContainer>
    <AppNavigator />
    // </NavigationContainer>
  );
};

export default App;
