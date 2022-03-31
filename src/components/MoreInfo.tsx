import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
const Wrap = styled(motion.div)`
  position: absolute;
  display: flex;
  width: 100%;
  margin-top: 6rem;
`;
const Circle = styled(motion.div)<{ url: string }>`
  width: 4rem;
  height: 4rem;
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: 105% 105%;
  background-color: white;
  border-radius: 50%;
  margin: 1rem;
  cursor: pointer;
`;
const H1 = styled(motion.div)`
  font-size: 48px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  padding: 2rem;
`;
function MoreInfo() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <>
          <H1
            layout
            style={{
              justifyContent: `center`,
            }}
          >
            <motion.div layoutId="title"> Framer motion</motion.div>
          </H1>
          <Wrap
            layout
            style={{
              justifyContent: `center`,
            }}
          >
            <Circle
              onClick={() =>
                (window.location.href =
                  "https://github.com/Cottonwood-moa/Framer-Motion")
              }
              layoutId="github"
              url={`https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`}
            ></Circle>
            <Circle
              onClick={() =>
                (window.location.href = "https://github.com/framer/motion")
              }
              layoutId="framerMotion"
              url={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZK1f8LLXFo3npTyvaKFS-V8h3CDiJLurg6A&usqp=CAU`}
            />
            <Circle
              onClick={() =>
                (window.location.href = "https://cottonwood-moa.tistory.com/")
              }
              layoutId="blog"
              url={`https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/5a539919017800001.png`}
            />
          </Wrap>
        </>
      ) : (
        <>
          <H1
            layout
            style={{
              justifyContent: `flex-end`,
            }}
          >
            <motion.div layoutId="title">
              {location.pathname.replace("/", "").toUpperCase()}
            </motion.div>
          </H1>
          <Wrap
            layout
            style={{
              justifyContent: `flex-end`,
            }}
          >
            <Circle
              onClick={() =>
                (window.location.href =
                  "https://github.com/Cottonwood-moa/Framer-Motion")
              }
              url={`https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`}
              layoutId="github"
              style={{ scale: 0.8, margin: `0.4rem` }}
            />
            <Circle
              onClick={() =>
                (window.location.href = "https://github.com/framer/motion")
              }
              url={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZK1f8LLXFo3npTyvaKFS-V8h3CDiJLurg6A&usqp=CAU`}
              layoutId="framerMotion"
              style={{ scale: 0.8, margin: `0.4rem` }}
            />
            <Circle
              onClick={() =>
                (window.location.href = "https://cottonwood-moa.tistory.com/")
              }
              url={`https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/5a539919017800001.png`}
              layoutId="blog"
              style={{ scale: 0.8, margin: `0.4rem` }}
            />
          </Wrap>
        </>
      )}
    </>
  );
}
export default MoreInfo;
