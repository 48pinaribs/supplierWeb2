import React from 'react'
import { FaLock } from "react-icons/fa";
import logo from "../../assets/ozyer_logo.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Password.css';

function Password() {
    const passwords = [
        { newPassword: 'pass3', newPasswordAgain: 'pass3' },
    ];
    const [errorMessage, setErrorMessage] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordAgain, setNewPasswordAgain] = useState('');
    const navigate = useNavigate();
    const checkPassword = (newPassword, newPasswordAgain) => {
        const passwordCheck = passwords.find(password => password.newPassword === newPassword && password.newPasswordAgain === newPasswordAgain);
        if (passwordCheck) {
            return true;
        }
        return false;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkPassword(newPassword, newPasswordAgain)) {
            navigate('/Home');
        } else {
            console.log("User not found or incorrect credentials");
            setErrorMessage("Şifreler Eşleşemedi!");
        }
    }
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div> <a> <img src={logo} alt='logo' /> </a> </div>
                <div className="input-box">
                    <input type="password" placeholder="Yeni Şifre " onChange={e => setNewPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Yeni Şifre Tekrar" onChange={e => setNewPasswordAgain(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
                <button type="button" onClick={handleSubmit}>Kaydet</button>
                <p></p>
                <p></p>
                <p></p>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
        </div>
    )
}
export default Password

