// import { useState } from 'react'
import UdoneLogo from '../Navbar/UdoneLogo/UdoneLogo'
import Liens from '../Navbar/Liens/Liens'
import './Navbar.css'


function Navbar() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <section id="navbar">       

        <UdoneLogo />

        <Liens /> 
          
      </section>

      
    </>
  )
}

export default Navbar
