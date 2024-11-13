
import HomePage from './Pages/HomePage'
import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'

  
function App() {
 

  return (
       
    <Router>

     <Routes>

           <Route path='/' element = {<HomePage/>} /> 
            <Route path='/welcome-netflix' element={<WelcomeMessage/>} /> 

      </Routes>
      
      </Router>

    
  )
}

export default App
