const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      console.log(action.category);
      console.log("REDUCER",state);
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json, loading: false }
    default:
      return state;
  }
};

export default reducer;
