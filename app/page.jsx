'use client'
import Blogs from "./Components/Homepage/Blogs"
import Cities from "./Components/Homepage/city"
import Environment from "./Components/Homepage/Enviornment"
import Faq from "./Components/Homepage/Faq"
import Hero from "./Components/Homepage/Hero"
import Services from "./Components/Homepage/Services"
import Subscribe from "./Components/Homepage/Subscribe"
import Footer from "./Components/Homepage/Footer"
import Navbar from "./Components/Homepage/Navbar"


export default function Home(){
  return(
     <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* <Navbar/> */}
      <Hero/>
      <Cities/>
      <Services/>
      <Environment/>
      <Faq/>
      <Blogs/>
      <Subscribe/>
      <Footer/>
     </div>
  )
}