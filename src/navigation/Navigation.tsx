import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Projects } from "../Pages/Projects";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
};
