import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface IBoxContent {
  id: number;
  name: string;
}
function App() {
  const [id, setId] = useState<null | string>(null);
  const boxContent: Array<IBoxContent> = [
    {
      id: 1,
      name: "박건우",
    },
    {
      id: 2,
      name: "정재욱",
    },
    {
      id: 3,
      name: "이채영",
    },
    {
      id: 4,
      name: "백승현",
    },
  ];
  return (
    <Wrapper>
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
              {boxContent[parseInt(id) - 1].name}
              {boxContent[parseInt(id) - 1].id}
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
