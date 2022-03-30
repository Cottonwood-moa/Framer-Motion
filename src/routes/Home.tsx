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
  cursor: pointer;
  background: linear-gradient(
    135deg,
    ${(props) => props.background},
    rgba(255, 255, 255, 0.4)
  );
`;
const H1 = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 4rem 0 0 0;
`;
const Wrap = styled(motion.div)`
  display: flex;
  justify-content: center;
`;
const Circle = styled(motion.div)`
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 50%;
  margin: 2rem;
`;
const containerVars = {
  start: {},
  end: {},
};
const cardVars = {
  whileHover: {
    rotate: 0,
    transition: {
      duration: 0.2,
    },
  },
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
      <Wrap>
        <Circle />
        <Circle />
        <Circle />
      </Wrap>
      <Container layout variants={containerVars}>
        {cardList.map((card, index) => {
          return (
            <Link to={`/${card.content}`}>
              <Card
                layout
                key={index}
                variants={cardVars}
                background={card.backgroundColor}
                animate={{ rotate: 10 }}
                whileHover={`whileHover`}
              >
                {card.content.toUpperCase()}
              </Card>
            </Link>
          );
        })}
      </Container>
      ;
    </>
  );
}

export default Home;
