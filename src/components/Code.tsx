import { motion } from "framer-motion";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import ReadMd from "../service/readMd";
import { useEffect, useState } from "react";
const Overlay = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  h1 {
    font-size: 56px;
  }
`;
const Close = styled.div`
  position: fixed;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 2rem;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`;
export interface IProps {
  setCode(arg: boolean | ((prev: boolean) => void)): void;
  branch: string;
}
const readMd = new ReadMd();

function Code({ setCode, branch }: IProps) {
  const [mdFile, setMdFile] = useState(``);
  const read = async () => {
    const res = await readMd.readGithubMd(branch);
    setMdFile(res as string);
  };
  useEffect(() => {
    read();
  }, [mdFile]);
  return (
    <>
      <Overlay
        initial={{ top: `100vh` }}
        animate={{ top: `0` }}
        exit={{ top: `100vh` }}
        transition={{
          duration: 0.4,
        }}
      >
        <Close onClick={() => setCode((prev) => !prev)}>X</Close>

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
      </Overlay>
    </>
  );
}

export default Code;
