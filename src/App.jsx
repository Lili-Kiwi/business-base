import Header from "./shared/Header.jsx";
import AllBusinesses from "./features/AllBusinesses.jsx";
import AddBusiness from "./features/AddBusiness.jsx";
import {
  reducer as businessesReducer,
  actions as businessesActions,
  initialState as initialBusinessesState,
} from './reducers/businesses.reducer';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router';


function App() {
  const [businessesState, dispatch] = useReducer(businessesReducer, initialBusinessesState);

  return (
    <div   >
      <Header />
      <div style={{ width: '100vw' }}>
        <Routes>
          <Route
            path="/"
            element={
              <AllBusinesses
                isLoading={businessesState.isLoading}
                businessList={businessesState.businessList} dispatch={dispatch}
              />
            }
          />
          <Route
            path="/addBusiness"
            element={<AddBusiness dispatch={dispatch} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
