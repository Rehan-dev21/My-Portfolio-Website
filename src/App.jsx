import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import AppRoute from "./route/Route";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="portfolio">
          <Header />

          <AppRoute />

          {/* <!-- ---------- Contact / Footer ---------- --> */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
