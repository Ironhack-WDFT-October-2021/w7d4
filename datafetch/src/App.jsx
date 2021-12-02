import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [characters, setCharacters] = useState([])

  const [name, setName] = useState('')

  useEffect(() => {
    // fetch the data
    axios.get('https://swapi.py4e.com/api/people/')
      .then(response => {
        console.log(response.data.results)
        // set the state of characters
        setCharacters(response.data.results)
      })
      .catch(err => console.log(err))
    // an empty dependency array makes sure the logic 
    // in the callback is called only once when the component
    // initially renders / is mounted
  }, [])

  useEffect(() => {
    console.log('every time name in state changes')

  }, [name])

  const handleChange = event => setName(event.target.value)

  return (
    <div className="App">
      <header className="App-header">
        {name ? <strong>Hello {name} 👋</strong> : 'Please type your name 🦄 🌈'}
        <input type="text" onChange={handleChange} value={name} />
        {characters.map(character => (
          <h1>{character.name}</h1>
        ))}
      </header>
    </div>
  )
}

export default App
