import { useState } from 'react'
import './Titrecategorie.css'

function Titrecategorie({titre}) {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <section id="titrescategorie"> 

        <h1>{titre}</h1> 
                  
      </section>
      
    </>
  )
}

export default Titrecategorie
