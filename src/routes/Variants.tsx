import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Code from "../components/Code";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-weight: bold;
`;
const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  place-self: center;
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
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const circleVariants = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
};
function Variants() {
  const [code, setCode] = useState(false);
  return (
    <Wrapper>
      <AnimatePresence>
        {code ? <Code setCode={setCode} branch={`variants`} /> : null}
      </AnimatePresence>
      <Box variants={boxVariants} initial={`start`} animate={`end`}>
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
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

export default Variants;
