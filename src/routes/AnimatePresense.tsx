import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Code from "../components/Code";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    position: absolute;
  }
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
const Toggle = styled.div`
  position: absolute;
  width: 100px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const CodeButton = styled(motion.div)`
  position: fixed;
  width: 15rem;
  height: 4rem;
  background-color: white;
  border-radius: 20px;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const boxVariants = {
  start: {
    scale: 0,
    opacity: 0,
    rotate: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    rotate: 360,
  },
  hide: {
    scale: 0,
    opacity: 0,
  },
};
function AnimatePresense() {
  const [isToggled, setIsToggled] = useState(false);
  const [code, setCode] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper ref={wrapRef}>
      <AnimatePresence>
        {code ? <Code setCode={setCode} branch={`animatePresence`} /> : null}
      </AnimatePresence>
      <AnimatePresence>
        {isToggled ? (
          <Box
            drag
            dragConstraints={wrapRef}
            variants={boxVariants}
            dragElastic={0.0001}
            initial={`start`}
            animate={`end`}
            exit={`hide`}
          />
        ) : null}
      </AnimatePresence>
      <Toggle onClick={() => setIsToggled((prev) => !prev)}>버튼</Toggle>
      <AnimatePresence>
        {!code ? (
          <CodeButton
            initial={{
              y: `5rem`,
            }}
            animate={{
              y: `2rem`,
              transition: {
                delay: 0.5,
              },
            }}
            exit={{
              y: `5rem`,
            }}
            onClick={() => setCode(true)}
          ></CodeButton>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default AnimatePresense;
