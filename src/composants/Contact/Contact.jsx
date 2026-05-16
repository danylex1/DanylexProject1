// import { useState } from 'react'
import udoneLogo from '../../assets/logoudone.png'
import './Contact.css'

function Contact() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="contact">  

        <img src={udoneLogo} className="base" width="170" height="179" alt="Logo Udone" />
        
        <ul>
          <li><p><b>Téléphone</b> : <span>0696 67 64 05</span></p></li>
          <li><p><b>Email</b> : <span>udone.alexis@gmail.com</span></p></li>
          <li>
            <p><b>Adresse</b> : <span>Route de Desrochers,</span></p> 
            <p><span>Résidence Castel des rochers,</span></p>
            <p><span>Batiment 18 Appartement 109,</span></p> 
            <p><span>97234 Fort-de-France</span></p>
          </li>
        </ul>

        
          
      </section>

      
    </>
  )
}

export default Contact
