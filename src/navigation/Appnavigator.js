import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabStack from './TabStack';
import AnimeDetail from '../containers/AnimeDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          options={{headerShown: false}}
          name="Tabs"
          component={TabStack}
        />
        <Stack.Screen name="Anime Details" component={AnimeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
