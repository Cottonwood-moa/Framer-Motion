```js
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
const Svg = styled.svg`
  width: 300px;
  height: 300px;
`;
const svgVariants = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
    transition: {
      // 모든 transition
      default: {
        duration: 5,
      },
      // 특정 요소 transition
      fill: { duration: 2, delay: 2 },
    },
  },
};
function App() {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path
          variants={svgVariants}
          initial="start"
          animate="end"
          // transition={{
          //   default: { duration: 5 },
          //   fill: { duration: 2, delay: 2 },
          // }}
          stroke="white"
          strokeWidth="1"
          d="The d in the svg>path was too long so I cut it.
          Enter your value!"
        />
      </Svg>
    </Wrapper>
  );
}

export default App;
```
