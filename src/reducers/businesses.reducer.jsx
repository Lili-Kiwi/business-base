const initialState = {
  businesses: []
};

const actions = {
  fetchBusinesses: "fetchBusinesses",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.fetchBusinesses:
      return { ...state };
    default:
      return state;
  }
};

export { initialState, actions, reducer };
