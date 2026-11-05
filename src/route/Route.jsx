import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Work from "../pages/Work";
import SkillsPage from "../pages/SkillsPage";
import ContactPage from "../pages/ContactPage";
import NotFound from "../layouts/NotFound";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoute;
