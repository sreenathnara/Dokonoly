import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createUser } from "../../redux/slices/userSlice";

const UserInfo = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            password
        }
        dispatch(createUser(data));
        navigate("/users")
        setName("");
        setPassword("");
    }

    return <div>
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
    </div>
}

export default UserInfo;