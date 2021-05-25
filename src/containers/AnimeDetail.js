import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
// import {useDispatch} from 'react-redux';

const AnimeDetail = props => {
  const attributes = props.route.params;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({type: 'ANIMES_SUCCES', payload: ['dragon ball', 'naruto']});
  // }, []);
  return (
    <View>
      <Text>Anime Details</Text>
    </View>
  );
};

export default AnimeDetail;
