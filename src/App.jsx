import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Extensions } from './components/Extensions'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <main>
        <Features />
        <Extensions />
      </main>
    </>
  )
}

export default App
