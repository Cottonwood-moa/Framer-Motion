import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 56px;
  font-weight: bold;
  span {
    margin: 1rem;
  }
`;
const BackButton = styled.span`
  cursor: pointer;
`;
function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <span>404 NOT FOUND</span>
      <BackButton onClick={() => navigate(-1)}>Go Back</BackButton>
    </Container>
  );
}

export default NotFound;
