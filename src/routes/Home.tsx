import { motion, useViewportScroll } from "framer-motion";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useWindowDimensions from "../getWindowDimension";
const Container = styled(motion.div)`
  left: 0;
  right: 0;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`;

const Card = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  border-radius: 20px;
  background-color: white;
  place-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 4rem;
`;
const containerVars = {
  start: {},
  end: {},
};
const cardList: Array<string> = [
  "gesture",
  "variants",
  "motionValue",
  "layout",
  "animatePresense",
  "svg",
  "selectBox",
  "slider",
];
function Home() {
  const { width } = useWindowDimensions();
  console.log(width);
  return (
    <>
      <H1>Framer motion</H1>
      <Container
        layout
        variants={containerVars}
        style={{
          gridTemplateColumns: width < 1200 ? `repeat(3,1fr)` : `repeat(4,1fr)`,
        }}
      >
        {cardList.map((card, index) => {
          return (
            <Card layout key={index}>
              {card} {index}
            </Card>
          );
        })}
      </Container>
      ;
    </>
  );
}

export default Home;
