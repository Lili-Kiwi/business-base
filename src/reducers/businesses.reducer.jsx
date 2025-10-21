const initialState = {
  businesses: []
};

const actions = {
  fetchBusinesses: "fetchTodos",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.fetchBusinesses:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export { initialState, actions, reducer };
