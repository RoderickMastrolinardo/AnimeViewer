import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import ProfileScreen from '../containers/ProfileScreen';
import AnimeScreen from '../containers/AnimeScreen';
import FavoritesScreen from '../containers/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Mi Perfil':
              iconName = 'user';
              break;
            case 'Animes':
              iconName = 'book';
              break;
            case 'Mis favoritos':
              iconName = 'star';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Mi Perfil" component={ProfileScreen} />
      <Tab.Screen name="Animes" component={AnimeScreen} />
      <Tab.Screen name="Mis favoritos" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};
