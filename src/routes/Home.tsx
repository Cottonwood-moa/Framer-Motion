import { motion } from "framer-motion";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
`;
const Card = styled(motion.div)``;

const containerVars = {
  start: {},
  end: {},
  exit: {},
};

function Home() {
  return (
    <AnimatePresence>
      <Container
        variants={containerVars}
        initial="start"
        animate="end"
        exit="exit"
      >
        <Link to={`/test`}>Go to Test</Link>
      </Container>
      ;
    </AnimatePresence>
  );
}

export default Home;
