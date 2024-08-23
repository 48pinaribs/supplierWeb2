import React from 'react'
import './LoginForm.css'
import { FaUserAlt, } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import logo from "../../assets/ozyer_logo.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const users = [
        { username: 'user1', password: 'pass1', passwordStatus: 'true' },
        { username: 'user2', password: 'pass2', passwordStatus: 'false' }
    ];
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const checkUser = (username, password) => {
        const usercheck = users.find(user => user.username === username && user.password === password);
        return usercheck
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = checkUser(username, password)
        console.log(user)
        if (user.passwordStatus === 'true') {
            navigate('/Password');
        } else {
            navigate('/Home');
        }
    }
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div> <a> <img src={logo} alt='logo' /> </a> </div>
                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
                    <FaUserAlt className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="button" onClick={handleSubmit} >Login</button>
                <p></p>
                <p></p>
                <p></p>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
        </div>
    )
}
export default LoginForm

