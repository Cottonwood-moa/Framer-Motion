import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;
const containerVars = {
  start: {},
  end: {},
};
function Test() {
  return (
    <AnimatePresence>
      <Container variants={containerVars} initial="start" animate="end">
        <Link to={`/`}>Go to Home</Link>
      </Container>
    </AnimatePresence>
  );
}
export default Test;
