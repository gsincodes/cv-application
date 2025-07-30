import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import header from './components/header'
import FormArea from './components/form-area'
import Section from './components/section'
import './styles/form-area.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='header'>
        <div id='logo'>CV Builder</div>
        <div id='navbar'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Links</li>
          </ul>
        </div>
      </div>
      
      <div id='content-area'>
        <div id='sidebar'>
          <FormArea/>
        </div>
        <div id='main-content'></div>
      </div>

      <div id='footer'></div>
    </>
  )
}

export default App
