
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #dc3545;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  color: #555;
  font-size: 1.2rem;
`;

function NotFound() {
  return (
    <Wrapper>
      <Title>404 - Not Found</Title>
      <Message>The page you are looking for does not exist.</Message>
    </Wrapper>
  );
}

export default NotFound;
