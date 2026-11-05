import HeroSection from "../layouts/HeroSection";
import Projects from "../layouts/Projects";
import Skills from "../layouts/Skills";

const HomePage = () => {
  return (
    <>
      {/* <!-- ---------- Hero ---------- --> */}
      <HeroSection />

      {/* <!-- ---------- Skills ---------- --> */}
      <Skills />

      {/* <!-- ---------- Projects ---------- --> */}
      <Projects />
    </>
  );
};

export default HomePage;
