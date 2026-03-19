import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Extensions } from './components/Extensions'
import { FAQ } from './components/FAQ'
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
    </>
  )
}

export default App
