import React from "react";
import UserLayout from "../../components/Layout/userlayout";
import Homehero from "../../components/Homehero";
import Welcome from "../../components/Welcome";
import Portfolio from "../../components/Portfolio";
import BestProducts from "../../components/Bestproducts";
import Gallery from "../../components/gallery";
import "./style.css";

const Home = () => {
  return (
    <>
      <UserLayout>

          <Homehero/>

          <Welcome/>

          <Portfolio/>

          <BestProducts/>

          <Gallery/>
       
      </UserLayout>
    </>
  );
};

export default Home;
