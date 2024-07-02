
import Header from "../Header";
import Footer from "../Footer";


import React from 'react'

const UserLayout = (props) => {
  return (
    <>
        <Header/>

        {props.children}

        <Footer/>
        
    </>
  )
}

export default UserLayout