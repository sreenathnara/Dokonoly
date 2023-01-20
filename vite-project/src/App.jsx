import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import UserInfo from './components/UserInfo';
import './App.css'
import { Users } from './components/Users';

function App() {
  console.log("rendered")
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserInfo />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App
