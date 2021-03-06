import React, { useState } from "react";
import Contact from "../components/Contact/Contact";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import AboutMe from "../components/AboutMe/AboutMe";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import ScrollTop from "./../components/ScrollTop/ScrollTop";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <AboutMe />
      <Contact />
      <ScrollTop />
    </Layout>
  );
};

export default Home;
