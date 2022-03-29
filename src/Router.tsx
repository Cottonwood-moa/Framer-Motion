import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Test from "./routes/Test";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
