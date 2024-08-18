import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const Login = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');

    return (
        <div>
            <div className="card">
                <h5>Enter a username:</h5>
                <span className="p-float-label">
                    <InputText id="username" value={value2} onChange={(e) => setValue2(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </span>

                <h5>Enter a password:</h5>
                <span className="p-float-label">
                    <InputText id="username" value={value2} onChange={(e) => setValue2(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </span>
                <h5>Forgot your password?</h5>
                <div className="field">
                    <label htmlFor="username1" className="block">Username</label>
                    <InputText id="username1" aria-describedby="username1-help" className="block" />
                    <small id="username1-help" className="block">Enter your username to reset your password.</small>
                </div>
            </div>
        </div>
    )
}
export default Login;