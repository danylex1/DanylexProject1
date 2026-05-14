// import { useState } from 'react'
import Navbar from './composants/Navbar/Navbar'
import Entete from './composants/Entete/Entete'
import Conteneur from './composants/Conteneur/Conteneur'
import ConteneurArticle from './composants/ConteneurArticle/ConteneurArticle'
import Pied from './composants/Pied/Pied'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar />

      <section id="center">        

        <Entete /> 
        
        <Conteneur />
        
        <ConteneurArticle />


        <Pied />
         
      </section>

    </>
  )
}

export default App
