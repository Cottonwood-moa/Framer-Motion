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
  div {
    display: flex;
    transform: translateY(200px);
  }
`;

const Box = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 28px;
`;
const boxVariants = {
  start: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    rotate: 0,
  }),
  end: {
    x: 0,
    opacity: 1,
    rotate: 360,
  },
  hide: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    rotate: 0,
  }),
};
function App() {
  const [visible, setVisible] = useState(2);
  const [back, setBack] = useState(false);
  const nextButton = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? (prev = 1) : prev + 1));
  };
  const prevButton = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? (prev = 10) : prev - 1));
  };
  return (
    <Wrapper>
      {/* exitBeforeEnter => exit,enter 애니메이션이 동시에 실행되지 않도록 */}
      <AnimatePresence custom={back}>
        <Box
          key={visible}
          custom={back}
          variants={boxVariants}
          initial={`start`}
          animate={`end`}
          exit={`hide`}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <div>
        <button onClick={prevButton}>prev</button>
        <button onClick={nextButton}>next</button>
      </div>
    </Wrapper>
  );
}

export default App;
