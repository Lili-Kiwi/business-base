import Header from "./shared/Header.jsx";
import AllBusinesses from "./features/AllBusinesses/AllBusinesses.jsx";
import AddBusiness from "./features/AddBusiness/AddBusiness.jsx";
import {
  reducer as businessesReducer,
   initialState as initialBusinessesState,
} from './reducers/businesses.reducer';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router';


function App() {
  const [businessesState, dispatch] = useReducer(businessesReducer, initialBusinessesState);
 const URL = `https://api.airtable.com/v0/${
  import.meta.env.VITE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

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
                businessList={businessesState.businessList} dispatch={dispatch} URL={URL} 
              />
            }
          />
          <Route
            path="/addBusiness"
            element={<AddBusiness dispatch={dispatch} URL={URL}  />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
