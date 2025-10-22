import styled from "styled-components";

export const BusinessCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem;
  background: #f4f6fa;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
`;

export const BusinessField = styled.div`
  font-size: 1rem;
  color: #222;
  word-break: break-word;
`;

export const BusinessLabel = styled.span`
  font-weight: 500;
  color: #007bff;
  margin-right: 0.5rem;
`;
