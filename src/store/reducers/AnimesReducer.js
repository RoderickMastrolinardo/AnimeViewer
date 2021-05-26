import produce from 'immer';

const initState = {
  favoritesAnimes: [],
};

const AnimesReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'SAVE_ANIME':
        draft.favoritesAnimes.push(action.payload);
        break;
      case 'DELETE_ANIME':
        draft.favoritesAnimes.splice(action.index, 1);
        break;
      default:
        return state;
    }
  });

export default AnimesReducer;
