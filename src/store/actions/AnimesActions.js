import axios from 'axios';
import {showMessage} from 'react-native-flash-message';

export const getAnimes = (offset, text) => {
  let endpoint = '';
  if (text) {
    const encodedText = encodeURIComponent(text);
    endpoint = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=${offset}&filter%5Btext%5D=${encodedText}`;
  } else {
    endpoint = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=${offset}`;
  }
  const animes = axios
    .get(endpoint)
    .then(response => {
      const {data} = response;
      if (data.data && data.data.length > 0) {
        return data.data;
      }
    })
    .catch(error => {
      showMessage({
        message: error.response,
        type: 'danger',
        icon: {icon: 'danger', position: 'left'},
        backgroundColor: '#ed1c24',
      });
      return [];
    });
  return animes;
};
export const deleteAnime = (title, callBack) => {
  return (dispatch, getState) => {
    const {
      Anime: {favoritesAnimes},
    } = getState();
    const index = favoritesAnimes.findIndex(
      anime => title === anime.canonicalTitle,
    );
    if (index !== -1) {
      dispatch({type: 'DELETE_ANIME', index: index});
      callBack();
    } else {
      showMessage({
        message: 'Anime no encontrado en favoritos',
        type: 'danger',
        icon: {icon: 'danger', position: 'left'},
        backgroundColor: '#ed1c24',
      });
    }
  };
};
