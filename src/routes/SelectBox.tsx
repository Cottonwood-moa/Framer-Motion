import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Code from "../components/Code";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "./Svg";
import MoreInfo from "../components/MoreInfo";
import { CodeButton } from "../components/commonstyle";

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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Box = styled(motion.div)`
  height: 200px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SelectBox() {
  const [id, setId] = useState<null | string>(null);
  const [code, setCode] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <MoreInfo />
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
          {code ? <Code setCode={setCode} branch={`selectBox`} /> : null}
        </AnimatePresence>
        <Grid>
          {["1", "2", "3", "4"].map((n) => {
            return (
              <Box onClick={() => setId(n)} key={n} layoutId={n + ""}>
                {n}
              </Box>
            );
          })}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId((prev) => null)}
              initial={{ backgroundColor: `rgba(0, 0, 0, 0)` }}
              animate={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
              exit={{ backgroundColor: `rgba(0, 0, 0, 0)` }}
            >
              <Box layoutId={id} style={{ width: 400, height: 200 }}>
                {id}
              </Box>
            </Overlay>
          ) : null}
        </AnimatePresence>
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

export default SelectBox;
