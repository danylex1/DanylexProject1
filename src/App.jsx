// import { useState } from 'react'
import Navbar from './composants/Navbar/Navbar'
import Entete from './composants/Entete/Entete'
import Conteneur from './composants/Conteneur/Conteneur'
// import ConteneurArticle from './composants/ConteneurArticle/ConteneurArticle'
import CategorieArticle from './composants/ConteneurArticle/CategorieArticle'
import Pied from './composants/Pied/Pied'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    

      <section id="center">   

        <Navbar />     

        <Entete /> 
        
        <Conteneur />
        
        {/* <ConteneurArticle /> */}

        <CategorieArticle />

        <Pied />
         
      </section>

    </>
  )
}

export default App
