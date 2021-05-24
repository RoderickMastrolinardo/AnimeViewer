import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const AnimeScreen = props => {
  const goToAnimeDetail = () => {
    props.navigation.navigate('Anime Details');
  };
  return (
    <View>
      <TouchableOpacity onPress={() => goToAnimeDetail()}>
        <Text>animes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimeScreen;
