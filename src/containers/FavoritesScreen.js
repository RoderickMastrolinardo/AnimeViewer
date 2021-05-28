import React, {useRef} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import AnimeItem from '../components/AnimeItem';

const FavoritesScreen = props => {
  const {favoritesAnimes} = useSelector(state => state.Anime);
  const animation = useRef();

  useFocusEffect(
    React.useCallback(() => {
      animation.current.play();
    }, []),
  );

  const goToAnimeDetail = attributes => {
    props.navigation.navigate('Detalles del anime', {...attributes});
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
      <View
        style={{
          justifyContent: 'center',
          height: '40%',
        }}>
        <LottieView
          ref={animation}
          source={require('../assets/lotties/favStar.json')}
          autoPlay
          loop={false}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontFamily: 'Arial',
            fontSize: 18,
            color: '#FFA016',
            alignSelf: 'center',
          }}>
          Mis favoritos
        </Text>
      </View>
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
          <View style={{alignItems: 'center'}}>
            <LottieView
              source={require('../assets/lotties/empty.json')}
              autoPlay
              loop
              style={{width: 200, height: 200, alignSelf: 'center'}}
            />
            <Text style={{fontFamily: 'Arial', fontSize: 18, color: 'gray'}}>
              No tienes Animes favoritos guardados
            </Text>
          </View>
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
