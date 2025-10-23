import styled from "styled-components";

const AboutWrapper = styled.div`
  max-width: 700px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
`;

const AboutTitle = styled.h1`
  color: #007bff;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

export default function About() {
  return (
    <AboutWrapper>
      <AboutTitle>About Business Base</AboutTitle>
      <AboutText>
        Business Base is a modern React app for managing and viewing businesses. Add, edit, and update business details with a beautiful UI.
      </AboutText>
    </AboutWrapper>
  );
}