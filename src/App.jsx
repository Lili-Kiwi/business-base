import Header from "./Header";
import AllBusinesses from "./pages/AllBusinesses.jsx";
import AddBusiness from "./pages/AddBusiness.jsx";
import {
  reducer as businessesReducer,
  actions as businessesActions,
  initialState as initialBusinessesState,
} from './reducers/businesses.reducer';
import { useReducer } from 'react';

function App() {
  const [businessesState, dispatch] = useReducer(businessesReducer, initialBusinessesState);

  return (
    < >
      <Header />
      <AddBusiness />
      <AllBusinesses isLoading={businessesState.isLoading} businessList={businessesState.businessList} dispatch={dispatch}
      />
    </ >
  );
}

export default App;
