import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Code from "../components/Code";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgb(0, 168, 255)",
    transition: {
      duration: 1,
    },
  },
};

function Gesture() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const [code, setCode] = useState(false);
  return (
    <>
      <AnimatePresence>
        {code ? <Code setCode={setCode} branch={`gesture`} /> : null}
      </AnimatePresence>
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            variants={boxVariants}
            drag
            dragConstraints={biggerBoxRef} // drag가능한 범위 요소 지정
            dragSnapToOrigin // drag후 원래 있던 자리로
            dragElastic={0.0001} // 당기는 힘. 0~1사이 값, default:0.5
            whileHover="hover"
            whileTap="click"
            whileDrag="drag"
          ></Box>
        </BiggerBox>
        <button onClick={() => setCode(true)}>버튼</button>
      </Wrapper>
    </>
  );
}

export default Gesture;
