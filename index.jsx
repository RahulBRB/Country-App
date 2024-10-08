import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { ContactPage } from "./components/ContactPage";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

const RootApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Nested Route under Country */}
          <Route path="/:country" element={<CountryDetail />}>
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<RootApp />);
