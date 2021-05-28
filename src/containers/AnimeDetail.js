import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAnime} from '../store/actions/AnimesActions';
// import {useDispatch} from 'react-redux';

const AnimeDetail = props => {
  const dispatch = useDispatch();
  const attributes = props.route.params;
  const {favoritesAnimes} = useSelector(state => state.Anime);
  const [isFav, setisFav] = useState(
    favoritesAnimes.find(
      anime => attributes.canonicalTitle === anime.canonicalTitle,
    )
      ? true
      : false,
  );
  const starPressed = () => {
    if (isFav) {
      dispatch(deleteAnime(attributes.canonicalTitle, () => setisFav(false)));
    } else {
      dispatch({type: 'SAVE_ANIME', payload: attributes});
      setisFav(true);
    }
  };
  const linkPressed = () => {
    //https://www.youtube.com/watch?v=
  };
  return (
    <ImageBackground
      source={{uri: attributes.posterImage.large}}
      style={styles.image}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={() => starPressed()}
          style={{position: 'absolute', right: 10, top: 10}}>
          <Icon
            name={isFav ? 'star' : 'staro'}
            size={25}
            color={isFav ? 'orange' : 'gray'}
          />
        </TouchableOpacity>
        <View
          style={{
            marginBottom: 5,
          }}>
          <View>
            <Text style={styles.title}>{attributes.canonicalTitle}</Text>
            <Text style={styles.titleJp}>{attributes.titles.ja_jp}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.circle}>
                <Text>{attributes.ratingRank}</Text>
              </View>
              <Text>rating</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.circle}>
                <Text>{attributes.popularityRank}</Text>
              </View>
              <Text style={{textAlign: 'center', width: '80%'}}>
                Rango popularidad
              </Text>
            </View>
          </View>
        </View>
        <ScrollView style={{height: '35%'}}>
          <Text style={styles.synopsis}>{attributes.synopsis}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                ...styles.moreInfo,
                marginRight: 5,
              }}>{`Cantidad de episodios: ${attributes.episodeCount}`}</Text>
            <Text
              style={{
                ...styles.moreInfo,
                marginLeft: 5,
              }}>{`duración: ${attributes.episodeLength} min`}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                `https://www.youtube.com/watch?v=${attributes.youtubeVideoId}`,
              );
            }}>
            <Text
              style={{
                color: 'blue',
                textDecorationLine: 'underline',
              }}>
              Link del trailer
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
  },
  title: {
    width: '90%',
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'black',
  },
  titleJp: {
    width: '70%',
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic',
  },
  synopsis: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'black',
    textAlign: 'justify',
  },
  moreInfo: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'black',
    textAlign: 'justify',
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA016',
  },
});
export default AnimeDetail;
