import { useEffect } from "react";
import { URL } from "../shared/constants.jsx";
import Business from "./Business.jsx";
import { actions as businessActions } from "../reducers/businesses.reducer.jsx";
import { useBusiness } from "../context/BusinessContext.jsx";

const AllBusinesses = () => {
  const token = `Bearer ${import.meta.env.VITE_PAT}`;
  const { state: businessesState, dispatch } = useBusiness();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            Authorization: token,
          },
        };
        const resp = await fetch(URL, options);
        const records = await resp.json();
        dispatch({
          type: businessActions.loadBusinesses,
          records: records.records,
        });
      } catch (err) {
        console.error("Failed to fetch records", err);
      }
    };
    fetchBusinesses();
  }, [token, dispatch]);

  return (
    <>
      <div>All Businesses Page</div>
      <ul>
        {businessesState.businessList.map((business) => (
          <li key={business.id}>
            <Business business={business} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllBusinesses;
