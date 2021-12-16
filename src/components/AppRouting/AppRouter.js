import { Routes,  Route } from "react-router-dom";
import { About } from "../../pages/About/About";
import { Home } from "../../pages/Home/Home";
import { Services } from "../../pages/Services/Services";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
    </Routes>
  )
}
