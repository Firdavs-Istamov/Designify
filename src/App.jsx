import React from "react";
import "./index.css";
import { Hero, SiteHeader, AboutUs, Team, Services, Projects, ClientSection, Frequently, Partners, Footer } from "./components/section";

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutUs/>
        <Team/>
        <Services/>
        <Projects/>
        <ClientSection/>
        <Frequently/>
        <Partners/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
