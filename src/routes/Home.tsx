import { motion, useViewportScroll } from "framer-motion";
import styled from "styled-components";
import { LayoutGroup } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowDimensions from "../getWindowDimension";
const Container = styled(motion.div)`
  width: 1400px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
// const Card = styled(motion.div)<{ width: string }>` => with components props
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
  return (
    <>
      <H1>Framer motion</H1>
      <Container layout variants={containerVars}>
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
