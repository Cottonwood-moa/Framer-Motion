import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
const Card = styled(motion.div)<{ background: string }>`
  width: 20rem;
  height: 20rem;
  border-radius: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  place-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    135deg,
    ${(props) => props.background},
    rgba(0, 0, 0, 0.5)
  );
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
interface ICard {
  content: string;
  backgroundColor: string;
}
const cardList: Array<ICard> = [
  {
    content: "gesture",
    backgroundColor: "#00a8ff",
  },
  {
    content: "variants",
    backgroundColor: "#fbc531",
  },
  {
    content: "motionValue",
    backgroundColor: "#44bd32",
  },
  {
    content: "layout",
    backgroundColor: "#e84118",
  },
  {
    content: "animatePresense",
    backgroundColor: "#273c75",
  },
  {
    content: "svg",
    backgroundColor: "#8c7ae6",
  },
  {
    content: "selectBox",
    backgroundColor: "#40739e",
  },
  {
    content: "slider",
    backgroundColor: "#55efc4",
  },
];
function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      <H1>Framer motion</H1>
      <Container layout variants={containerVars}>
        {cardList.map((card, index) => {
          return (
            <Card layout key={index} background={card.backgroundColor}>
              {card.content}
            </Card>
          );
        })}
      </Container>
      ;
    </>
  );
}

export default Home;
