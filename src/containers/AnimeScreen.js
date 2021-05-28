import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import AnimeTextInput from '../components/AnimeTextInput';
import {getAnimes} from '../store/actions/AnimesActions';
import AnimeItem from '../components/AnimeItem';

const AnimeScreen = props => {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchText, setsearchText] = useState(null);
  const [end, setEnd] = useState(false);
  // const dispatch = useDispatch();
  const resetList = () => {
    setAnimes([]);
    setOffset(0);
  };
  useEffect(() => {
    resetList();
  }, []);
  useEffect(async () => {
    // const animesFetched = await dispatch(getAnimes(offset, searchText));
    const animesFetched = await getAnimes(offset, searchText);
    if (animesFetched.length < 20) {
      setEnd(true);
    }
    setAnimes([...animes, ...animesFetched]);
  }, [offset, searchText]);

  const fetchMoreAnime = () => {
    if (!end) {
      setOffset(offset + 20);
    }
  };
  const goToAnimeDetail = attributes => {
    props.navigation.navigate('Detalles del anime', {...attributes});
  };
  const renderAnimeItem = item => {
    return (
      <AnimeItem
        animeScreen
        attributes={item.attributes}
        onAnimePress={() => goToAnimeDetail(item.attributes)}
      />
    );
  };
  const ListFooter = () => {
    if (!end) {
      return (
        <LottieView
          source={require('../assets/lotties/loading.json')}
          autoPlay
          loop
          style={{width: 40, height: 40, alignSelf: 'center'}}
        />
      );
    }
  };
  const searchAnime = text => {
    if (text) {
      setsearchText(text);
      resetList();
    } else {
      if (searchText) {
        setsearchText(null);
        resetList();
      }
    }
  };
  return (
    <View style={{backgroundColor: 'black'}}>
      <FastImage
        style={{width: 200, height: '40%', alignSelf: 'center'}}
        source={require('../assets/images/logo.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.listView}>
        <AnimeTextInput
          onSubmit={text => searchAnime(text)}
          containerStyle={styles.textInputStyles}></AnimeTextInput>
        {animes.length > 0 ? (
          <FlatList
            data={animes}
            numColumns={2}
            columnWrapperStyle={{
              alignSelf: 'center',
              alignContent: 'space-between',
            }}
            renderItem={({item}, index) => renderAnimeItem(item, index)}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.9}
            onEndReached={fetchMoreAnime}
            ListFooterComponent={ListFooter}
          />
        ) : (
          //COLOCAR LOTTIE
          <LottieView
            source={require('../assets/lotties/loading.json')}
            autoPlay
            loop
          />
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

export default AnimeScreen;
