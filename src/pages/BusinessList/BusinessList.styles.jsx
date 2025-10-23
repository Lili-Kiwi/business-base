import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #282c34;
`;

export const BusinessListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BusinessItem = styled.li`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
