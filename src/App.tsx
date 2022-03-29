import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    transform: translateY(200px);
  }
`;

const Box = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  font-weight: bold;
  font-size: 28px;
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.accentColor};
`;
function App() {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={onClick}>
      {/* exitBeforeEnter => exit,enter 애니메이션이 동시에 실행되지 않도록 */}
      <Box
        style={{
          justifyContent: isClicked ? "center" : "flex-start",
          alignItems: isClicked ? "center" : "flex-start",
        }}
      >
        <Circle layout />
      </Box>
    </Wrapper>
  );
}

export default App;
