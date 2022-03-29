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
  start: {
    backgroundColor: `rgba(0,0,0,0)`,
  },
  end: {
    backgroundColor: `rgba(0,0,0,1)`,
  },
};

function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Container variants={containerVars} initial="start" animate="end">
        <Link to={`/test`}>Go to Test</Link>
      </Container>
      ;
    </AnimatePresence>
  );
}

export default Home;
