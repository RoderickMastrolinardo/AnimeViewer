import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import AnimeTextInput from '../components/AnimeTextInput';
import AnimeItem from '../components/AnimeItem';

const FavoritesScreen = props => {
  const {favoritesAnimes} = useSelector(state => state.Anime);

  const goToAnimeDetail = attributes => {
    props.navigation.navigate('Anime Details', {...attributes});
  };
  const renderAnimeItem = item => {
    return (
      <AnimeItem
        animeScreen
        attributes={item}
        onAnimePress={() => goToAnimeDetail(item)}
      />
    );
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <FastImage
        style={{width: 200, height: '40%', alignSelf: 'center'}}
        source={require('../assets/images/logo.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.listView}>
        {favoritesAnimes.length > 0 ? (
          <FlatList
            data={favoritesAnimes}
            numColumns={2}
            columnWrapperStyle={{
              alignSelf: 'center',
              alignContent: 'space-between',
            }}
            renderItem={({item}, index) => renderAnimeItem(item, index)}
            keyExtractor={item => item.id}
          />
        ) : (
          //COLOCAR LOTTIE
          <></>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    height: '60%',
    borderTopLeftRadius: 40,
    paddingTop: 20,
  },
  textInputStyles: {
    marginHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 15,
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default FavoritesScreen;
