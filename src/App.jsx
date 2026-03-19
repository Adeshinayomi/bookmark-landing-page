import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Extensions } from './components/Extensions'
import { FAQ } from './components/FAQ'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <main>
        <Features />
        <Extensions />
        <FAQ />
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
