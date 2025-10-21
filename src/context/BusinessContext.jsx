import React, { createContext, useReducer, useContext } from "react";
import {
  reducer as businessesReducer,
  initialState as initialBusinessesState,
} from "../reducers/businesses.reducer.jsx";

const BusinessContext = createContext(null);

export const BusinessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    businessesReducer,
    initialBusinessesState
  );
  return (
    <BusinessContext.Provider value={{ state, dispatch }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const ctx = useContext(BusinessContext);
  if (!ctx) throw new Error("useBusiness must be used within BusinessProvider");
  return ctx;
};

export default BusinessContext;
