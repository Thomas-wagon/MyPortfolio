import React from "react"

//import general styles
import "./styles.css"

// import component
import Banner from "../components/banner"
import Navbar from "../components/navbar"
import Toolkit from "../components/toolkit"
import Projects from "../components/projects"
import AboutMe from "../components/about_me"
import Contact from "../components/contact"


export default function Home() {
  return (
    <div className="app">
      <Banner></Banner>
      <div className="container">
        <Navbar></Navbar>
        <Toolkit></Toolkit>
        <Projects></Projects>
        <AboutMe></AboutMe>
        <Contact></Contact>
      </div>
    </div>
  )
}