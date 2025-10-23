import { useEffect } from "react";
import Business from "../../features/Business/Business.jsx";
import { actions as businessesActions } from "../../reducers/businesses.reducer.jsx";
import { PageWrapper, Title, BusinessListStyle, BusinessItem } from "./BusinessList.styles.jsx";
import styled from "styled-components";

export const Loading = styled.p`
  font-size: 1.2rem;
  color: #007bff;
  text-align: center;
  margin: 2rem 0;
  letter-spacing: 1px;
  font-weight: 500;
`;

const BusinessList = ({ token, isLoading, businessList, dispatch, URL }) => {
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
  }, [token, dispatch, URL]);

  return (
    <PageWrapper>
      <Title>All Businesses Page</Title>
      {isLoading && <Loading>Loading...</Loading>}
      <BusinessListStyle>
        {businessList.map((business) => (
          <BusinessItem key={business.id}>
            <Business URL={URL} token={token} business={business} />
          </BusinessItem>
        ))}
      </BusinessListStyle>
    </PageWrapper>
  );
};

export default BusinessList;
