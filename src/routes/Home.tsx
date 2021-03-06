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
import MoreInfo from "../components/MoreInfo";
const Container = styled(motion.div)`
  width: 100%;
  max-width: 1400px;
  min-height: 120vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding-top: 15rem;
  padding-bottom: 10rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: url("/palette.svg") no-repeat center center fixed;
  background-size: 40%;
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
    rgba(200, 200, 200, 0.9)
  );
  box-shadow: 10px 10px 49px 0px rgba(0, 0, 0, 0.3);
`;
const H1 = styled(motion.p)`
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin: 4rem 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  start: {
    gridTemplateColumns: `repeat(4,1fr)`,
  },
  end: (width: number) => ({
    gridTemplateColumns:
      width < 1500
        ? width < 1000
          ? width < 800
            ? `repeat(1,1fr)`
            : `repeat(2,1fr)`
          : `repeat(3,1fr)`
        : `repeat(4,1fr)`,
  }),
};
const cardVars = {
  start: { rotate: 270, scale: 0 },
  end: {
    rotate: 370,
    scale: 1,
    transition: {
      type: `spring`,
    },
  },
  whileHover: {
    rotate: 360,
    transition: {
      delay: 0,
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
      <MoreInfo />

      <Container
        layout
        variants={containerVars}
        initial={`start`}
        animate={`end`}
        custom={width}
      >
        {cardList.map((card, index) => {
          return (
            <Card
              layout
              variants={cardVars}
              initial="start"
              animate="end"
              whileHover={`whileHover`}
              background={card.backgroundColor}
              onClick={() => navigate(`${card.content}`, {})}
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
