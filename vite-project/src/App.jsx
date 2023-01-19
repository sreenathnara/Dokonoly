import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from './redux/slices/userSlice';
import UserInfo from './components/UserInfo';
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      password
    }
    dispatch(createUser(data));
    setName("");
    setPassword("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div>
          <label>password:</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" />
        </div>
        <button>Submit</button>
      </form>
      <UserInfo />
    </div>
  )
}

export default App
