import Header from "./shared/Header.jsx";
import BusinessList from "./pages/BusinessList/BusinessList.jsx";
import AddBusiness from "./pages/AddBusiness/AddBusiness.jsx";
import {
  reducer as businessesReducer,
  initialState as initialBusinessesState,
} from './reducers/businesses.reducer';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router';
import NotFound from './pages/NotFound';
import About from './pages/About';

function App() {
  const [businessesState, dispatch] = useReducer(businessesReducer, initialBusinessesState);
  const URL = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;
  const token = `Bearer ${import.meta.env.VITE_PAT}`;

  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <div style={{ width: '100vw' }}>
        <Routes>
          <Route
            path="/"
            element={
              <BusinessList token={token}
                isLoading={businessesState.isLoading}
                businessList={businessesState.businessList} dispatch={dispatch} URL={URL}
              />
            }
          />
          <Route
            path="/add-business"
            element={<AddBusiness token={token} dispatch={dispatch} URL={URL} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
