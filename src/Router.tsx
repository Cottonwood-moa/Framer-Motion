import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatePresense from "./routes/AnimatePresense";
import Gesture from "./routes/Gesture";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import MotionValue from "./routes/motionValue";
import SelectBox from "./routes/SelectBox";
import Slider from "./routes/Slider";
import Svg from "./routes/Svg";
import Variants from "./routes/Variants";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/svg" element={<Svg />} />
        <Route path="/gesture" element={<Gesture />} />
        <Route path="/variants" element={<Variants />} />
        <Route path="/motionValue" element={<MotionValue />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/animatePresense" element={<AnimatePresense />} />
        <Route path="/selectBox" element={<SelectBox />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
