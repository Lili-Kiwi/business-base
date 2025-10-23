import styled from "styled-components";

export const FormWrapper = styled.div`
  /* max-width removed */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  & > h2 {
    grid-column: span 2;
  }

  & > button {
    grid-column: span 2;
    justify-self: center;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.2rem;
`;

export const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.8rem 1.2rem;
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
