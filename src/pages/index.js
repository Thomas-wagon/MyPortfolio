import React from "react"

//import general styles
import "../styles/styles.css"

// import component
import Banner from "../components/banner"
import Navbar from "../components/navbar"
import Toolkit from "../components/toolkit"
import Projects from "../components/projects"
import AboutMe from "../components/about_me"
import Header from "../components/header"


export default function Home() {
  return (
    <div className="container">
      <Banner></Banner>
      <Navbar></Navbar>
      <Toolkit></Toolkit>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}