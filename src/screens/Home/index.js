import React from "react";
import UserLayout from "../../components/Layout/userlayout";
import Homehero from "../../components/Homehero";
import Welcome from "../../components/Welcome";
import PortfolioMain from "../Portfolio";
import BestProducts from "../../components/Bestproducts";
import Gallery from "../../components/gallery";
import Contact from "../../components/Contact";
import "./style.css";

const Home = () => {
  return (
    <>
      <UserLayout>

          <Homehero/>

          <Welcome/>

          <PortfolioMain />

          <BestProducts/>

          <Gallery/>

          <Contact/>
       
      </UserLayout>
    </>
  );
};

export default Home;
