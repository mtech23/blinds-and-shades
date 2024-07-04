import React from "react";
import UserLayout from "../../components/Layout/userlayout";
import Homehero from "../../components/Homehero";
import Welcome from "../../components/Welcome";
import "./style.css";

const Home = () => {
  return (
    <>
      <UserLayout>

          <Homehero/>

          <Welcome/>
       
      </UserLayout>
    </>
  );
};

export default Home;
