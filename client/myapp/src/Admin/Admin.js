import React, { useState } from 'react';
import adminstyles from './adminstyles.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const adminLogin = (e) => {
        e.preventDefault();
        axios
            .post('https://sigmainfotech.onrender.com/login', {
                email,
                password,
            })
            .then((res) => {
                if (
                    res.data.message === 'User not registered' ||
                    res.data.message === 'Invalid login credentials'
                ) {
                    alert('User not registered or Invalid login credentials');
                } else {
                    localStorage.setItem('isAdminLoggedIn', 'true');
                    navigate('/admindashboard');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <main>
            <section>
                <div className={adminstyles.bread}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Admin Login</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div
                            className={`col-md-3 mx-auto ${adminstyles.bx_shadow}`}
                        >
                            <form className="p-4" onSubmit={adminLogin}>
                                {/* Name */}
                                <div className=" mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="User Name"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                {/* Password */}
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                {/* Submit Button */}
                                <div className="col-md-12 text-center">
                                    <input
                                        type="submit"
                                        value="Admin login"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    <NavLink to="/forgotPassword">
                                        Forgot Password?
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to="/createAccount">
                                        Create Account
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Admin;
