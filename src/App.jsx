import { useState } from 'react'
import './App.css'
import FormArea from './components/form-area'
import './styles/form-area.css'
import Resume from './components/resume'
import './styles/resume.css'

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
        <div id='main-content'>
          <Resume />
        </div>
      </div>

      <div id='footer'></div>
    </>
  )
}

export default App
