import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  margin-top: 32px;
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; /* Widen the card */
  text-align: center;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
  color: #4caf50;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  margin-top: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  &:hover {
    background-color: #45a049;
  }
`;

const Heading = styled.h2`
  margin: 20px 0;
  font-weight: bold;
`;

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Logo>
          <img
            src="/path-to-knust-logo.png"
            alt="KNUST Logo"
            style={{ height: "40px", marginRight: "8px" }}
          />
        </Logo>
        <StyledButton onClick={() => navigate("/")}>Home</StyledButton>
      </Header>
      <Main>
        <h1>Welcome to Project Pairing Apps Portal</h1>
        <h3>Please select any of the sections below</h3>
        <CardsContainer>
          <Card>
            <Icon>
              <FaGraduationCap />
            </Icon>
            <Heading>Students</Heading>
            <p>Enter this section to access the students&apos; portal.</p>
            <StyledButton onClick={() => navigate("/student-signin")}>
              Go &gt;&gt;
            </StyledButton>
          </Card>
          <Card>
            <Icon>
              <FaChalkboardTeacher />
            </Icon>
            <Heading>Lecturer</Heading>
            <p>This section is exclusively for Lecturer&apos;s.</p>
            <StyledButton onClick={() => navigate("/lecturer-signin")}>
              Go &gt;&gt;
            </StyledButton>
          </Card>
        </CardsContainer>
      </Main>
    </Container>
  );
};

export default LandingPage;
