import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar> 
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}