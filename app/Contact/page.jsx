'use client'

import { Main } from "next/document"
import ContactLanding from "../Components/ContactComponents/ContactLanding"
import MainContact from "../Components/ContactComponents/MainContact"

export default function Contact(){
  return(
      <div>
        <ContactLanding/>
        <MainContact/>
    </div>
  )
}