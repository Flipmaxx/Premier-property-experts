'use client'
import FeaturesAndStats from "./Components/bar"
import Blogs from "./Components/Homepage/Blogs"
import Cities from "./Components/Homepage/city"
import Environment from "./Components/Homepage/Enviornment"
import Faq from "./Components/Homepage/Faq"
import Hero from "./Components/Homepage/Hero"
import ServicesSlider from "./Components/Homepage/ServicesCard"
import Subscribe from "./Components/Homepage/Subscribe"
import GetInTouch from "./Components/Homepage/Touch"


export default function Home(){
  return(
     <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      <Hero/>
      <Cities/>
      <FeaturesAndStats/>
      <ServicesSlider/>
      <Environment/>
      <GetInTouch/>
      <Faq/>
      <Blogs/>
      <Subscribe/>
     </div>
  )
}