import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

import Integrantes from './components/Integrantes'
import SobreAtualizado from './components/SobreAtualizado'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Integrantes />
      <SobreAtualizado />
    </main>
  )
}

export default App
