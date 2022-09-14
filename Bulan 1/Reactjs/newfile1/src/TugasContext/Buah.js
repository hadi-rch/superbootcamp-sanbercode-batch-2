import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahList from "./BuahList"
import BuahForm from "./BuahForm"

const Fruits = () =>{
  return(
    <BuahProvider>
      <BuahList/>
      <BuahForm/>
    </BuahProvider>
  )
}

export default Fruits