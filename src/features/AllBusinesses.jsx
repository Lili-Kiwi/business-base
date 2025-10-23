import { useEffect } from "react";
import Business from "./Business.jsx";
import { actions as businessesActions } from "../reducers/businesses.reducer.jsx";
import { PageWrapper, Title, BusinessList, BusinessItem, UpdateButton } from "./AllBusinesses.styles";
import { Loading } from "./AllBusinesses.loading";

const AllBusinesses = ({ isLoading, businessList, dispatch, URL }) => {
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

  const handlUpdate = async (business) => {
    const payload = {
      records: [
        {
          id: business.id,
          fields: {
            name: business.name,
            address: business.address,
            category: business.category,
            phone: business.phone,
            email: business.email,
            website: business.website,
            description: "Updated description",
          },
        },
      ],
    };

    const options = {
      method: "PATCH",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      const resp = await fetch(URL, options);
      if (!resp.ok) {
        const errorData = await resp.json();
        console.error('Error response:', errorData);
        throw new Error(`Update failed: ${resp.status}`);
      }
    } catch (err) {
      console.error("Failed to update business", err);
    }
  };

  return (
    <PageWrapper>
      <Title>All Businesses Page</Title>
      {isLoading && <Loading>Loading...</Loading>}
      <BusinessList>
        {businessList.map((business) => (
          <BusinessItem key={business.id}>
            <Business business={business} />
            <UpdateButton onClick={() => handlUpdate(business)}>Update</UpdateButton>
          </BusinessItem>
        ))}
      </BusinessList>
    </PageWrapper>
  );
};

export default AllBusinesses;
