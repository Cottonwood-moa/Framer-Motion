import { motion } from "framer-motion";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: royalblue;
`;
const Card = styled(motion.div)``;

function Home() {
  return (
    <AnimatePresence>
      <Container>
        <Link to={`/test`}>Go to Test</Link>
      </Container>
      ;
    </AnimatePresence>
  );
}

export default Home;
