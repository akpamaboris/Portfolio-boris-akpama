import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
export const Projects = () => {
  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};
