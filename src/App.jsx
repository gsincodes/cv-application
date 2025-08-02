import { useState } from 'react'
import './App.css'
import FormArea from './components/form-area'
import './styles/form-area.css'
import Resume from './components/resume'
import './styles/resume.css'
import Button from './components/button'

function App() {
  const [generalContentList , setGeneralContentList] = useState([]);
  const [educationContentList , setEducationContentList] = useState([]);
  const [professionContentList , setProfessionContentList] = useState([]);

  return (
    <>
      <div id='header'>
        <div id='logo'>CV Builder</div>
        <div id='navbar'>
          <ul>
            <li><a href='https://github.com/gsincodes'>Github</a></li>
            <li><a href='https://www.linkedin.com/in/gsincodes/'>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div id='content-area'>
        <div id='sidebar'>
          <FormArea 
            getGeneral = {(someVal) => 
              setGeneralContentList(someVal)
            }
            getEducation = {(someVal) => 
              setEducationContentList(someVal)
            }
            getProfession = {(someVal) => 
              setProfessionContentList(someVal)
            }
          />
        </div>
        <div id='main-content'>
          <Resume 
            passGeneral = {generalContentList}
            passEducation = {educationContentList}
            passProfession = {professionContentList}
          />
        </div>
      </div>

      <div id='footer'>gsincodes 2025</div>
    </>
  )
}

export default App
