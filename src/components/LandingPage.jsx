import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 40px 30px;
  width: 350px;
  height: 280px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) and (min-width: 481px) {
    width: 300px;
    height: 220px;
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 180px;
    padding: 20px 15px;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.4);
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const HandleSchoolProjects = () => {
    navigate("/schoolprojects");
  };

  const HandleFreelanceProjects = () => {
    navigate("/freelanceprojects");
  };

  return (
    <Container>
      <h1>Jasmin's Portfolio</h1>
      <ButtonContainer>
        <Button onClick={HandleSchoolProjects}>
          <p>School Projects</p>
        </Button>
        <Button onClick={HandleFreelanceProjects}>
          <p>Freelance & Passion Projects</p>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingPage;
