import styled from "styled-components";
import React from "react";
export const BusinessCard = ({ children }) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    padding: "1rem",
    background: "#f4f6fa",
    borderRadius: "6px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  }}>
    {children}
  </div>
);

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

export const UpdateButton = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0056b3;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const EditIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  color: #666;
  cursor: pointer;
  &:hover { color: #007bff; }
`;
