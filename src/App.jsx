import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import GoalsCoreValues from "./pages/about/GoalsCoreValues";
import History from "./pages/about/History";
import InstitutionalDirections from "./pages/about/InstitutionalDirections";
import Paascu from "./pages/about/Paascu";
import Philosophy from "./pages/about/Philosophy";
import ServicesFacilities from "./pages/about/ServicesFacilities";
import Academics from "./pages/Academics";
import GradeSchool from "./pages/academics/GradeSchool";
import JuniorHigh from "./pages/academics/JuniorHigh";
import SeniorHigh from "./pages/academics/SeniorHigh";
import Home from "./pages/Home";
import Scolarships from "./pages/Scolarships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="history" element={<History />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="goals" element={<GoalsCoreValues />} />
          <Route path="institutional" element={<InstitutionalDirections />} />
          <Route path="services" element={<ServicesFacilities />} />
          <Route path="paascu" element={<Paascu />} />
        </Route>
        <Route path="academics" element={<Academics />}>
          <Route path="grade-school" element={<GradeSchool />} />
          <Route path="junior-high" element={<JuniorHigh />} />
          <Route path="senior-high" element={<SeniorHigh />} />
        </Route>
        <Route path="scholarships" element={<Scolarships />} />
      </Route>
    </Routes>
  )
}

export default App
