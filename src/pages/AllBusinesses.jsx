import { useState, useEffect, useReducer } from "react";
import { URL } from "../shared/constants.jsx";
import Business from "./Business.jsx";
import {
  reducer as businessesReducer,
  actions as businessesActions,
  initialState as initialBusinessesState,
} from "../reducers/businesses.reducer.jsx";
const AllBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);

  const token = `Bearer ${import.meta.env.VITE_PAT}`;
  const [businessesState, dispatch] = useReducer(
    businessesReducer,
    initialBusinessesState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: businessesActions.fetchBusinesses });

      try {
        const options = {
          method: "GET",
          headers: {
            Authorization: token,
          },
        };

        const resp = await fetch(URL, options);

        const data = await resp.json();
        setBusinesses(data.records);
      } catch (err) {
        console.error("Failed to fetch records", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>All Businesses Page</div>

      <ul>
        {businesses.map((business) => (
          <li key={business.id}>
            <Business business={business.fields} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllBusinesses;
