// import { useState } from 'react'
import GrandFermant from './Grand/GrandFermant'
import PetitFermant from './Petit/PetitFermant'
import './Fermant.css'

function Fermant() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="fermant"> 

        <PetitFermant /> 
        
        <GrandFermant />              
                  
      </section>

      
    </>
  )
}

export default Fermant
