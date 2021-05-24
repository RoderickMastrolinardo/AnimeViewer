import produce from 'immer';

const initState = {
  animes: [],
};

const AnimesReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ANIMES_SUCCES':
        draft.animes = action.payload;
        break;
      default:
        return state;
    }
  });

export default AnimesReducer;
