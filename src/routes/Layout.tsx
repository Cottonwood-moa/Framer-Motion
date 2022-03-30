import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Code from "../components/Code";
import { BackArrow } from "./Svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    transform: translateY(200px);
  }
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  margin: 2rem;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 28px;
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.accentColor};
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
function Layout() {
  const [isClicked, setIsClicked] = useState(false);
  const [code, setCode] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={onClick}>
      <BackArrow
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate(-1)}
      >
        Back
      </BackArrow>
      <AnimatePresence>
        {code ? <Code setCode={setCode} branch={`layout`} /> : null}
      </AnimatePresence>
      {/* exitBeforeEnter => exit,enter 애니메이션이 동시에 실행되지 않도록 */}
      <Box
        style={{
          justifyContent: isClicked ? "center" : "flex-start",
          alignItems: isClicked ? "center" : "flex-start",
        }}
      >
        <Circle layout />
      </Box>
      <Box>{isClicked ? <Circle layoutId={"circle"} /> : null}</Box>
      <Box>
        {!isClicked ? (
          <Circle layoutId={"circle"} style={{ scale: 2 }} />
        ) : null}
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

export default Layout;
