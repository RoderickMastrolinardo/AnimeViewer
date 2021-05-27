import React, {Component} from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import {deleteAnime} from '../store/actions/AnimesActions';

const {width: screenWidth} = Dimensions.get('window');

class AnimeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isFav: false};
  }
  componentDidMount = () => {
    const {attributes} = this.props;
    this.checkIfIsFavorite(attributes.canonicalTitle);
  };
  checkIfIsFavorite = title => {
    const {favorites} = this.props;
    if (favorites.find(anime => title === anime.canonicalTitle)) {
      this.setState({isFav: true});
    } else {
      this.setState({isFav: false});
    }
  };
  starPressed = () => {
    const {saveAnime, attributes, deleteAnime} = this.props;
    if (this.state.isFav) {
      deleteAnime(attributes.canonicalTitle, () =>
        this.setState({isFav: false}),
      );
    } else {
      saveAnime(attributes);
      this.setState({isFav: true});
    }
  };

  render() {
    const {attributes, onAnimePress, animeScreen} = this.props;
    const {isFav} = this.state;
    return (
      <TouchableOpacity onPress={onAnimePress} style={styles.itemContainer}>
        <FastImage
          style={styles.posterStyles}
          source={{uri: attributes.posterImage.tiny}}
          resizeMode={FastImage.resizeMode.contain}
        />

        <Text numberOfLine={2} style={styles.titleText}>
          {attributes.canonicalTitle}
        </Text>
        <Text numberOfLine={2} style={styles.yearText}>
          {`(${attributes.startDate.slice(0, 4)})`}
        </Text>

        {animeScreen && (
          <TouchableOpacity
            onPress={() => this.starPressed()}
            style={{position: 'absolute'}}>
            <Icon
              name={isFav ? 'star' : 'staro'}
              size={20}
              color={isFav ? 'orange' : 'gray'}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = state => {
  return {favorites: state.Anime.favoritesAnimes};
};
const mapDispatchToProps = dispatch => {
  return {
    saveAnime: anime => dispatch({type: 'SAVE_ANIME', payload: anime}),
    deleteAnime: (animetitle, callBack) =>
      dispatch(deleteAnime(animetitle, callBack)),
  };
};
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    // borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5,
  },
  posterStyles: {
    width: (screenWidth * 45) / 100,
    // width: '100%',
    height: (screenWidth * 45) / 100,
    alignSelf: 'center',
  },
  titleText: {fontFamily: 'Arial', fontSize: 14, paddingLeft: 15},
  yearText: {
    fontFamily: 'Arial',
    fontSize: 14,
    paddingLeft: 15,
    color: 'gray',
    marginBottom: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimeItem);
