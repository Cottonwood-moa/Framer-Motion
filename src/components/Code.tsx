import { motion } from "framer-motion";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import ReadMd from "../service/readMd";
import { useEffect, useState } from "react";
const Overlay = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 56px;
  }
`;
interface IProps {
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
    console.log(mdFile);
  }, [mdFile]);
  return (
    <Overlay
      initial={{ y: `100vh` }}
      animate={{ y: `0` }}
      exit={{ y: `100vh` }}
      transition={{
        duration: 0.4,
      }}
    >
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
      <button onClick={() => setCode((prev) => !prev)}>버튼</button>
    </Overlay>
  );
}

export default Code;
