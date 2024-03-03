import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from '../data.js'
import './style.css'

function App() {
  const cards = data.map((item, index) => { 
        
    return (
      <Card
        key={item.id}
        img={item.image}
        country={item.country}
        title={item.title}
        link={item.link}
        date={item.date}
        description={item.description}
        index={index}
      />
    )
  })

  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

export default App
