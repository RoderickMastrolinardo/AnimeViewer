import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getAnimes} from '../store/actions/AnimesActions';

const AnimeScreen = props => {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [end, setEnd] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setAnimes([]);
    setOffset(0);
  }, []);
  useEffect(async () => {
    const animesFetched = await dispatch(getAnimes(offset));
    if (animesFetched.length < 20) {
      setEnd(true);
    }
    setAnimes([...animes, ...animesFetched]);
  }, [offset]);

  const fetchMoreAnime = () => {
    if (!end) {
      setOffset(offset + 20);
    }
  };

  const goToAnimeDetail = attributes => {
    props.navigation.navigate('Anime Details', {...attributes});
  };
  const renderAnimeItem = (item, index) => {
    return (
      <TouchableOpacity onPress={() => goToAnimeDetail(item.attributes)}>
        <Text>{item.attributes.canonicalTitle}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {animes.length > 0 ? (
        <FlatList
          data={animes}
          renderItem={({item}, index) => renderAnimeItem(item, index)}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.9}
          onEndReached={fetchMoreAnime}
          //loading more spinner
          // ListFooterComponent={ListFooter}
        />
      ) : (
        //COLOCAR LOTTIE
        <></>
      )}
    </View>
  );
};

export default AnimeScreen;
