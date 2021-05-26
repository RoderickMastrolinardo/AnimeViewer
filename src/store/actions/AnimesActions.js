import axios from 'axios';
import {showMessage} from 'react-native-flash-message';

export const getAnimes = (offset, text) => {
  // return (dispatch, getState) => {
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
  // };
};
