import About, { Team, History } from "./Router/About";
import Contact from "./Router/Contact";
import Header from "./Router/Header";
import Home from "./Router/Home";
import Index from "./Router/Index";
import Link from "./Router/Link";
import Outlet from "./Router/Outlet";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="team" element={<Team />} />
              <Route path="history" element={<History />} />
            </Route>
            <Route path="header" element={<Header />} />
            <Route path="contact" element={<Contact />} />
            <Route path="link" element={<Link />} />
            <Route path="outlet" element={<Outlet />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
