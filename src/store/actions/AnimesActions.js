import axios from 'axios';
import {showMessage} from 'react-native-flash-message';

export const getAnimes = offset => {
  return (dispatch, getState) => {
    const animes = axios
      .get(
        `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=${offset}`,
      )
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
};
