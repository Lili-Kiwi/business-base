const initialState = {
  businessList: [],
};

const actions = {
  fetchBusinesses: "fetchBusinesses",
  loadBusinesses: "loadBusinesses",
  addBusiness: "addBusiness",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.fetchBusinesses:
      return { ...state };
    case actions.loadBusinesses:
      return {
        ...state,
        businessList: action.records.map((record) => ({
          id: record.id,
          ...record.fields,
        })),
      };
    case actions.addBusiness: {
      const savedBusiness = {
        id: action.record.id,
        ...action.record.fields,
      };
      return {
        ...state,
        businessList: [...state.businessList, savedBusiness],
      };
    }
    default:
      return state;
  }
};

export { initialState, actions, reducer };
