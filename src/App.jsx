import { useState } from "react";
import "./App.css";
import React from "react";
import companiesJSON from "./companies.json";
import tecsJson from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState(companiesJSON);
  const [techs, setTechs] = useState(tecsJson);

  return (
    <div className="app">
      <Routes>
        <Navbar />
        <Route
          exact
          path="/"
          render={() => <HomePage companies={companies} />}
        />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} technologies={techs} />}
        />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
