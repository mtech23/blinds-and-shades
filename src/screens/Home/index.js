import React from 'react';
import UserLayout from '../../components/Layout/userlayout';
import CustomButton from '../../components/CustomButton';
import "./style.css";

const Home = () => {
  return (
    <>
      <UserLayout>

        <section>
            <h2>this is the main section.</h2>
            <CustomButton type="button" className="" text=" This is actionBtn"/>
        </section>


      </UserLayout>
    </>
  )
}
export default Home
