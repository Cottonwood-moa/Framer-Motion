import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../getWindowDimension";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import ReadMd from "../service/readMd";
const Container = styled(motion.div)`
  width: 1400px;
  height: 100vh;
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
  margin: 4rem;
`;
const Package = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3) !important ;
  padding: 1rem;
  div {
    margin-top: 2rem !important;
    background-color: rgba(0, 0, 0, 0.5) !important ;
  }
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
    content: "animatePresence",
    backgroundColor: "#273c75",
  },
  {
    content: "layout",
    backgroundColor: "#e84118",
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
const readMd = new ReadMd();
function Home() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const [mdFile, setMdFile] = useState(``);
  const read = async () => {
    const res = await readMd.readGithubMd(`master`);
    setMdFile(res as string);
  };
  useEffect(() => {
    read();
  }, [mdFile]);
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
            <Card
              layout
              variants={cardVars}
              background={card.backgroundColor}
              animate={{ rotate: 10 }}
              whileHover={`whileHover`}
              onClick={() => navigate(`/${card.content}`)}
              key={card.content}
            >
              {card.content.toUpperCase()}
            </Card>
          );
        })}
      </Container>
      <Package>
        <H1>Package</H1>
        <ReactMarkdown
          children={mdFile}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={a11yDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </Package>
    </>
  );
}

export default Home;
