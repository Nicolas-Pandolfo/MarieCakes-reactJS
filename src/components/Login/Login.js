import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()

        login(username, password)
    }

    return (
        <div className="div">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label className="Username">
                    username
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label className="Password">
                    password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button >Login</button>
            </form>
        </div>
    )
}

export default Login