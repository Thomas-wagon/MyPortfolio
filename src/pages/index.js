import React from "react"

//import general styles
import "./index.scss"

// import component
import Banner from "../components/banner"
import Navbar from "../components/navbar"
import Toolkit from "../components/toolkit"
import Projects from "../components/projects"
import AboutMe from "../components/about_me"
import Contact from "../components/contact"

export default function Index() {

  React.useEffect(()=>{

    // get an element that actually scrolls
    const app = document.getElementsByClassName('app')[0];
    // Get the navbar
    const navbar = document.getElementsByClassName("navbar")[0];
    let navbarPos = navbar.getBoundingClientRect().top    

    app.addEventListener('scroll', (e) => {
      // Get the offset position of the navbar
      navbarPos = navbar.getBoundingClientRect().top
      if (navbarPos <= 0) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky")
      }
    });
  })

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