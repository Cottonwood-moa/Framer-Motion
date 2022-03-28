import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
