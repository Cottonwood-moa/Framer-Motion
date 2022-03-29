import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;
function Test() {
  return (
    <AnimatePresence>
      <Container>
        <Link to={`/`}>Go to Home</Link>
      </Container>
    </AnimatePresence>
  );
}
export default Test;
