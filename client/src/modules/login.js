import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
    const [usr, setUsr] = useState({
        username: "",
        password: "",
    });

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/login", usr);

            console.log(response.data.isLoggedIn);
            const isLoggedin = response.data.isLoggedIn;
            if (isLoggedin) {
                navigate("/");
            }else {
                alert("Login failed");
                return;
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleChange = (event) => {
        setUsr((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    console.log(usr);


    const navigate = useNavigate();

    axios.defaults.withCredentials = true;


    return (
        <div className="Login">
            <h1>Login</h1>
            <div>
                <form action="" method="POST" onSubmit={handleLoginSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handleChange} required />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} required />
                    <br />
                    <input type="submit" value="Login" />
                </form><br /><br />
                <p>Don't have an account?</p>
                <a href="/register">Register</a>
            </div>
        </div>
    );
}

export default Login;