import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
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

function MotionValue() {
  // MotionValue는 react render cycle을 발생시키지 않는다. -> console로 x를 찍어도 바뀐값이 찍히지 않음
  const x = useMotionValue(0);
  // x값에 따라 지정한 값으로 변환
  // useTransform(감지할 motion value(x), x의 양 끝과 중간값, 매칭되는 새로운 값)
  // 중간값 생략가능 양끝값으로 중간값 자동 삽입
  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      `linear-gradient(135deg, rgb(127, 255, 212), rgb(201, 253, 236);)`,
      `linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))`,
      `linear-gradient(135deg, rgb(10, 0, 153), rgb(91, 86, 156))`,
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  // 추적 방법
  useEffect(() => {
    x.onChange(() => {
      console.log(x.get());
    });
  }, [x]);
  return (
    <Wrapper style={{ background: gradient }}>
      {/* <button onClick={() => x.set(200)}>click me</button> */}
      <Box style={{ x, rotate, scale }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}

export default MotionValue;
