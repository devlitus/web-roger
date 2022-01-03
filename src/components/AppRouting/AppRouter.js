import { Routes, Route } from "react-router-dom";
import { About } from "../../pages/About/About";
import { Home } from "../../pages/Home/Home";
import { Jobs } from "../../pages/Jobs/Jobs";
import { Services } from "../../pages/ServicesAndProjects/Services";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/job" element={<Jobs />} />
    </Routes>
  );
};
