import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Code from "../components/Code";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "./Svg";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ButtonWrap = styled.div`
  display: flex;
  transform: translateY(200px);
`;
const Box = styled(motion.div)`
  position: absolute;
  width: 300px;
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
const Button = styled.div`
  width: 4rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
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
function Slider() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const [code, setCode] = useState(false);
  const navigate = useNavigate();
  const nextButton = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? (prev = 1) : prev + 1));
  };
  const prevButton = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? (prev = 10) : prev - 1));
  };
  return (
    <>
      <Wrapper>
        <BackArrow
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate(-1)}
        >
          Back
        </BackArrow>
        <AnimatePresence>
          {code ? <Code setCode={setCode} branch={`slider`} /> : null}
        </AnimatePresence>
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
        <ButtonWrap>
          <Button onClick={prevButton}>prev</Button>
          <Button onClick={nextButton}>next</Button>
        </ButtonWrap>
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
    </>
  );
}

export default Slider;
