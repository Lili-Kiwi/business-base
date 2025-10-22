import { useEffect, dispatch } from "react";
import { URL } from "../shared/constants.jsx";
import Business from "./Business.jsx";
import { actions as businessesActions } from "../reducers/businesses.reducer.jsx";

const AllBusinesses = ({ isLoading, businessList, dispatch }) => {
  const token = `Bearer ${import.meta.env.VITE_PAT}`;
  useEffect(() => {
    const fetchBusinesses = async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };
      dispatch({ type: businessesActions.fetchBusinesses });
      try {
        const resp = await fetch(URL, options);
        const records = await resp.json();
        dispatch({
          type: businessesActions.loadBusinesses,
          records: records.records,
        });
      } catch (err) {
        console.error("Failed to fetch records", err);
      }
    };
    fetchBusinesses();
  }, [token]);

  return (
    <>
      <div>All Businesses Page</div>
      {isLoading && <p>Loading...</p>}
      <ul>
        {businessList.map((business) => (
          <li key={business.id}>
            <Business business={business} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllBusinesses;
