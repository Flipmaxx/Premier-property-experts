'use client'

import AboutLanding from "../Components/AboutComp/AboutLanding"
import Whowe from "../Components/AboutComp/Whowe"
import Environment from "../Components/Homepage/Enviornment"
import Services from "../Components/Homepage/Services"
import Subscribe from "../Components/Homepage/Subscribe"

export default function About(){
    return(
        <div>
            <AboutLanding/>
            <Whowe/>
           <Environment/>
           <Services/>
           <Subscribe/>
          </div>
    )
}